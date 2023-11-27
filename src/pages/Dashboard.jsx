import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faHeart,
  faBell,
  faUser,
  faGear,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import BmiChart from "../components/BmiChart";

const Dashboard = () => {
  const [selectedItem, setSelectedItem] = useState("Dashboard");

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  const bmiValue = 20;

  return (
    <div className="flex h-full w-full overflow-hidden">
      <div className="w-2/12 h-full p-8">
        <h2 className="text-xl font-bold text-teal-600">
          <span className="text-yellow-500">AI</span> HEALTHCARE
        </h2>

        <div className="w-full text-lg font-semibold mt-8 flex flex-col gap-6">
          <p className="text-base font-normal">General</p>
          <h3
            onClick={() => handleClick("Dashboard")}
            className={`${
              selectedItem === "Dashboard" ? "text-teal-500" : ""
            } cursor-pointer`}
          >
            <FontAwesomeIcon icon={faHouse} className="mr-2" /> Dashboard
          </h3>
          <h3
            onClick={() => handleClick("Health")}
            className={`${
              selectedItem === "Health" ? "text-teal-500" : ""
            } cursor-pointer`}
          >
            <FontAwesomeIcon icon={faHeart} className="mr-2" /> Health
          </h3>
          <h3
            onClick={() => handleClick("Notification")}
            className={`${
              selectedItem === "Notification" ? "text-teal-500" : ""
            } cursor-pointer`}
          >
            <FontAwesomeIcon icon={faBell} className="mr-2" /> Notification
          </h3>
          <p className="text-base font-normal">Tools</p>
          <h3
            onClick={() => handleClick("Profile")}
            className={`${
              selectedItem === "Profile" ? "text-teal-500" : ""
            } cursor-pointer`}
          >
            <FontAwesomeIcon icon={faUser} className="mr-2" /> Profile
          </h3>
          <h3
            onClick={() => handleClick("Settings")}
            className={`${
              selectedItem === "Settings" ? "text-teal-500" : ""
            } cursor-pointer`}
          >
            <FontAwesomeIcon icon={faGear} className="mr-2" /> Settings
          </h3>
          <h3 className="cursor-pointer absolute bottom-6 text-red-500">
            <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" /> Logout
          </h3>
        </div>
      </div>
      <div className="w-8/12 h-full p-8 bg-gradient-to-r from-gray-100 to-gray-50">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-500">Good Morning</p>
            <p className="text-5xl font-semibold text-teal-800">
              Snahashis Kanrar
            </p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faBell}
              className="mr-2 bg-teal-400 p-4 text-2xl rounded-md text-white drop-shadow-md"
            />
            <FontAwesomeIcon
              icon={faUser}
              className="mr-2 bg-teal-400 p-4 text-2xl rounded-md text-white cursor-pointer drop-shadow-md"
            />
          </div>
        </div>
        <div className="mt-16 flex w-3/4 justify-between">
          <div>
            <p className="text-5xl font-medium text-teal-700">22</p>
            <p className="text-gray-500">Years Old</p>
          </div>
          <div>
            <p className="text-5xl font-medium text-teal-700">180</p>
            <p className="text-gray-500">Height, cm</p>
          </div>
          <div>
            <p className="text-5xl font-medium text-teal-700">60</p>
            <p className="text-gray-500">Weight, kg</p>
          </div>
          <div>
            <p className="text-5xl font-medium text-teal-700">B+</p>
            <p className="text-gray-500">Blood Group</p>
          </div>
        </div>
        <div className="mt-6 flex gap-4 h-1/4 text-white">
          <div className="w-1/3 bg-gradient-to-br from-teal-400 to-sky-500 rounded-2xl p-4 text-lg flex justify-between flex-col shadow-lg">
            <div>
              <p className="text-2xl">Temparature</p>
              <p className="text-sm">degree celcius</p>
            </div>
            <div className="text-6xl">36.6</div>
          </div>
          <div className="w-1/3 bg-gradient-to-bl from-teal-400 to-lime-500 rounded-2xl p-4 flex justify-between flex-col shadow-lg">
            <div>
              <p className="text-2xl">Blood Sugar</p>
              <p className="text-sm">mg/dl</p>
            </div>
            <div className="text-6xl">
              120<span className="text-2xl">/60</span>
            </div>
          </div>
          <div className="w-1/3 bg-gradient-to-tl from-teal-400 to-cyan-500 rounded-xl p-4 flex justify-between flex-col shadow-lg">
            <div>
              <p className="text-2xl">Blood Pressure</p>
              <p className="text-sm">mmhg</p>
            </div>
            <div className="text-6xl">
              80<span className="text-2xl">/120</span>
            </div>
          </div>
        </div>
        <div className="w-full pt-8 flex">
          <div className="w-1/2">
            <h3 className="text-3xl font-semibold text-teal-500">BMI INDEX</h3>
            <p className="text-sm w-4/5 pt-2 text-gray-600">
              The Body Mass Index (BMI) is a numerical measure of an
              individual's weight relative to their height. It categorizes
              individuals as underweight (BMI ≤ 18.5), normal weight (18.5 ≤ BMI
              ≤ 24.9), overweight (25.0 ≤ BMI ≤ 29.9), or obese (BMI ≥ 30.0).
            </p>
            <div className="flex items-center justify-center h-1/2">
              <BmiChart bmiValue={bmiValue} />
            </div>
          </div>
          <div className="w-1/2 flex flex-col gap-2">
            <h3 className="text-3xl font-semibold text-teal-500">
              DISEASE PREDICTION
            </h3>
            <p className="text-sm text-gray-500 pt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              minus tenetur vel ea possimus.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <p className="px-2 py-1 bg-gradient-to-r from-sky-400 to-green-500 rounded-lg text-white shadow-md">
                Skin Disease
              </p>
              <p className="px-2 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white shadow-md">
                Scalp Disease
              </p>
              <p className="px-2 py-1 bg-gradient-to-r from-sky-500 to-teal-500 rounded-lg text-white shadow-md">
                Eye Disease
              </p>
              <p className="px-2 py-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg text-white shadow-md">
                Nail Disease
              </p>
              <p className="px-2 py-1 bg-gradient-to-r from-sky-500 to-fuchsia-500 rounded-lg text-white shadow-md">
                Teeth Disease
              </p>
            </div>
            <p className="text-sm text-gray-500 pt-2">
              You can check and predict all these diseases through our web app
              using our machine learning model
            </p>
            <button className="px-8 py-2 bg-teal-400 rounded-md text-white text-lg w-full">
              Launch App
            </button>
          </div>
        </div>
      </div>
      <div className="w-4/12 h-full bg-blue-200 p-8">3d model</div>
    </div>
  );
};

export default Dashboard;
