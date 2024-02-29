import React from "react";

const ComplexInfo = ({ temperature, bloodPressure, bloodSugar }) => {
  return (
    <div className="mt-6 flex gap-4 h-1/4 text-white">
      <div className="w-1/3 bg-gradient-to-br from-teal-400 to-sky-500 rounded-2xl p-4 text-lg flex justify-between flex-col shadow-lg">
        <div>
          <p className="text-2xl">Temperature</p>
          <p className="text-sm">degree Fahrenheit</p>
        </div>
        <div className="text-6xl">{temperature}</div>
      </div>
      <div className="w-1/3 bg-gradient-to-bl from-teal-400 to-lime-500 rounded-2xl p-4 flex justify-between flex-col shadow-lg">
        <div>
          <p className="text-2xl">Blood Sugar</p>
          <p className="text-sm">mg/dl</p>
        </div>
        <div className="text-6xl">
          {bloodSugar.value}
          <span className="text-2xl">/{bloodSugar.unit}</span>
        </div>
      </div>
      <div className="w-1/3 bg-gradient-to-tl from-teal-400 to-cyan-500 rounded-xl p-4 flex justify-between flex-col shadow-lg">
        <div>
          <p className="text-2xl">Blood Pressure</p>
          <p className="text-sm">mmHg</p>
        </div>
        <div className="text-6xl">
          {bloodPressure.systolic}
          <span className="text-2xl">/{bloodPressure.diastolic}</span>
        </div>
      </div>
    </div>
  );
};

export default ComplexInfo;
