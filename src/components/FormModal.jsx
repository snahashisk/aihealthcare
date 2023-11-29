import React, { useState } from "react";

const FormModal = ({ isOpen, closeModal, updateInfo }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [temperature, setTemperature] = useState("");
  const [bloodPressureSystolic, setBloodPressureSystolic] = useState("");
  const [bloodPressureDiastolic, setBloodPressureDiastolic] = useState("");
  const [bloodSugarValue, setBloodSugarValue] = useState("");
  const [bloodSugarUnit, setBloodSugarUnit] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    updateInfo({
      name,
      age,
      height,
      weight,
      bloodGroup,
      temperature,
      bloodPressure: {
        systolic: bloodPressureSystolic,
        diastolic: bloodPressureDiastolic,
      },
      bloodSugar: { value: bloodSugarValue, unit: bloodSugarUnit },
    });
    closeModal();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-20">
      <div className="relative top-20 mx-auto border w-1/2 shadow-lg rounded-md bg-white">
        <h3 className="bg-teal-500 w-full p-2 rounded-md text-white text-xl font-medium text-center">
          Update Your Details
        </h3>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-2 p-5">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-md font-semibold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-md font-semibold mb-2"
              htmlFor="age"
            >
              Age
            </label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Age"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-md font-semibold mb-2"
              htmlFor="age"
            >
              Height
            </label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Height"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-md font-semibold mb-2"
              htmlFor="age"
            >
              Weight
            </label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Weight"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-md font-semibold mb-2"
              htmlFor="age"
            >
              Blood Group
            </label>
            <input
              type="text"
              id="age"
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
              placeholder="Blood Group"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-md font-semibold mb-2"
              htmlFor="age"
            >
              Temparature
            </label>
            <input
              type="number"
              id="temperature"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
              placeholder="Temparature"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-md font-semibold mb-2"
              htmlFor="age"
            >
              Blood Pressure Systolic
            </label>
            <input
              type="number"
              id="bloodPressureSystolic"
              value={bloodPressureSystolic}
              onChange={(e) => setBloodPressureSystolic(e.target.value)}
              placeholder="Blood Pressure Systolic"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-md font-semibold mb-2"
              htmlFor="Blood Pressure Diastolic"
            >
              Blood Pressure Diastolic
            </label>
            <input
              type="number"
              id="bloodPressureSystolic"
              value={bloodPressureDiastolic}
              onChange={(e) => setBloodPressureDiastolic(e.target.value)}
              placeholder="Blood Pressure Diastolic"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-md font-semibold mb-2"
              htmlFor="age"
            >
              Blood Sugar Value
            </label>
            <input
              type="number"
              id="bloodsugarvalue"
              value={bloodSugarValue}
              onChange={(e) => setBloodSugarValue(e.target.value)}
              placeholder="Blood Sugar Value"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-md font-semibold mb-2"
              htmlFor="age"
            >
              Blood Sugar Value
            </label>
            <input
              type="number"
              id="blood sugar unit"
              value={bloodSugarUnit}
              onChange={(e) => setBloodSugarUnit(e.target.value)}
              placeholder="Blood Sugar Unit"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="w-full flex items-center justify-between col-span-2">
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Update Info
            </button>
            <button
              onClick={closeModal}
              className="inline-block align-baseline font-semibold text-md text-red-400 hover:text-red-700"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormModal;
