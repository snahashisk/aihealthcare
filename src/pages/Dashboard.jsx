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

const Dashboard = () => {
  const [selectedItem, setSelectedItem] = useState("Dashboard");

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="flex h-full w-full">
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
        <div className="mt-10 flex gap-4 h-1/4 text-white">
          <div className="w-1/3 bg-gradient-to-br from-teal-400 to-sky-400 rounded-2xl p-4 text-lg flex justify-between flex-col shadow-lg">
            <div>
              <p className="text-2xl">Temparature</p>
              <p className="text-sm">degree celcius</p>
            </div>
            <div className="text-6xl">36.6</div>
          </div>
          <div className="w-1/3 bg-gradient-to-bl from-teal-400 to-lime-400 rounded-2xl p-4 flex justify-between flex-col shadow-lg">
            <div>
              <p className="text-2xl">Blood Sugar</p>
              <p className="text-sm">mg/dl</p>
            </div>
            <div className="text-6xl">
              120<span className="text-2xl">/60</span>
            </div>
          </div>
          <div className="w-1/3 bg-gradient-to-tl from-teal-400 to-cyan-400 rounded-xl p-4 flex justify-between flex-col shadow-lg">
            <div>
              <p className="text-2xl">Blood Pressure</p>
              <p className="text-sm">mmhg</p>
            </div>
            <div className="text-6xl">
              80<span className="text-2xl">/120</span>
            </div>
          </div>
        </div>
        <div>bmi meter</div>
      </div>
      <div className="w-4/12 h-full bg-blue-200 p-8">3d model</div>
    </div>
  );
};

export default Dashboard;
