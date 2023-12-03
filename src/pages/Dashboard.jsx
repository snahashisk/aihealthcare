import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useUserContext } from "../contexts/UserContext";
import {
  faHouse,
  faHeart,
  faBell,
  faUser,
  faGear,
  faSignOutAlt,
  faPenToSquare,
  faMars,
} from "@fortawesome/free-solid-svg-icons";
import BmiChart from "../components/BmiChart";
import CamModal from "../components/CamModal";
import SimpleInfo from "../components/SimpleInfo";
import ComplexInfo from "../components/ComplexInfo";
import Marker from "../components/Marker";
import humanModel from "../img/human.jpg";
import FormModal from "../components/FormModal";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  const [selectedItem, setSelectedItem] = useState("Dashboard");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClick = (item) => {
    setSelectedItem(item);
  };

  const bmiValue = 20;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const [userInfo, setUserInfo] = useState({
    name: "",
    age: "",
    height: "",
    weight: "",
    bloodGroup: "",
    temperature: "",
    bloodPressure: { systolic: "", diastolic: "" },
    bloodSugar: { value: "", unit: "" },
  });
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  useEffect(() => {
    const loadUser = () => {
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : null;
    };

    const currentUser = user || loadUser();
    if (!currentUser || !currentUser.userId) {
      navigate("/login");
      return;
    }

    fetchUserData(currentUser.userId);
  }, [user, setUser, navigate]);

  const fetchUserData = async (userId) => {
    try {
      const response = await fetch(
        `http://localhost:8000/getUserData/${userId}`
      );
      if (response.headers.get("content-type").includes("application/json")) {
        const data = await response.json();
        if (response.ok) {
          setUserInfo(data);
        } else {
          console.error("Error fetching user data:", data.error);
        }
      } else {
        console.error("Received non-JSON response from server");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Update user data in the backend and refetch
  const updateUserInfo = async (newInfo) => {
    try {
      const response = await fetch(`http://localhost:8000/updateUserData`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: user.userId, ...newInfo }),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "Failed to update data");
      }

      fetchUserData(user.userId);
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  return (
    <div className="flex h-full w-full overflow-hidden">
      <FormModal
        isOpen={isFormModalOpen}
        closeModal={() => setIsFormModalOpen(false)}
        updateInfo={updateUserInfo}
      />
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
          <h3
            className="cursor-pointer absolute bottom-6 text-red-500"
            onClick={handleLogout}
          >
            <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" /> Logout
          </h3>
        </div>
      </div>
      <div className="w-8/12 h-full p-8 bg-gradient-to-r from-gray-100 to-gray-50">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-500">Good Morning</p>
            <p className="text-5xl font-semibold text-teal-800 flex items-center gap-4">
              {userInfo.name}{" "}
              <FontAwesomeIcon icon={faMars} className="text-3xl" />
            </p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faPenToSquare}
              className="mr-2 bg-teal-400 p-3 text-2xl rounded-md text-white drop-shadow-md cursor-pointer"
              onClick={() => setIsFormModalOpen(true)}
            />
            <FontAwesomeIcon
              icon={faBell}
              className="mr-2 bg-teal-400 p-3 text-2xl rounded-md text-white drop-shadow-md cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faUser}
              className="mr-2 bg-teal-400 p-3 text-2xl rounded-md text-white cursor-pointer drop-shadow-md"
            />
          </div>
        </div>
        <SimpleInfo
          age={userInfo.age}
          height={userInfo.height}
          weight={userInfo.weight}
          bloodGroup={userInfo.bloodGroup}
        />
        <ComplexInfo
          temperature={userInfo.temperature}
          bloodPressure={userInfo.bloodPressure}
          bloodSugar={userInfo.bloodSugar}
        />
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
            <button
              className="px-8 py-2 bg-teal-400 rounded-md text-white text-lg w-full"
              onClick={openModal}
            >
              Launch App
            </button>
          </div>
          <CamModal isOpen={isModalOpen} closeModal={closeModal} />
        </div>
      </div>
      <div className="w-4/12 h-full bg-blue-200 relative">
        <div class="absolute w-10 h-10 top-4 left-1/2">
          <Marker />
          <div className="ml-12 px-2 py-2 bg-teal-500 h-20 w-28 rounded-lg text-sm text-white opacity-80">
            Your Eye, Hair, Teeth looks normal
          </div>
        </div>
        <div class="absolute w-10 h-10 top-1/4 left-2/4">
          <Marker />
          <div className="ml-12 px-2 py-2 bg-teal-500 h-14 w-28 rounded-lg text-sm text-white opacity-80">
            Your Heart looks normal
          </div>
        </div>
        <div class="absolute w-10 h-10 bottom-1/4 right-1/3">
          <Marker />
          <div className="ml-12 px-2 py-2 bg-teal-500 h-14 w-28 rounded-lg text-sm text-white opacity-80">
            Your skin looks normal
          </div>
        </div>
        <div class="absolute w-10 h-10 top-2/4 left-12">
          <Marker />
          <div className="ml-12 px-2 py-2 bg-teal-500 h-14 w-28 rounded-lg text-sm text-white opacity-80">
            Your nails are normal
          </div>
        </div>
        <div class="absolute w-10 h-10 bottom-2/4 right-1/3">
          <Marker />
          <div className="ml-12 px-2 py-2 bg-teal-500 h-14 w-28 rounded-lg text-sm text-white opacity-80">
            Your Kidney looks normal
          </div>
        </div>
        <img src={humanModel} alt="human model" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Dashboard;
