import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useUserContext } from "../contexts/UserContext";
import {
  faHouse,
  faBell,
  faSignOutAlt,
  faPenToSquare,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import BmiChart from "../components/BmiChart";
import Akinator from "../components/Akinator";
import SimpleInfo from "../components/SimpleInfo";
import ComplexInfo from "../components/ComplexInfo";
import Marker from "../components/Marker";
import humanModel from "../img/human.jpg";
import FormModal from "../components/FormModal";
import PdfTextExtractor from "../components/PdfExtractor";
import NotificationModal from "../components/NoficationModal";
import { useNavigate } from "react-router-dom";
import { useNotifications } from "../contexts/NotificationContext";

const Dashboard = () => {
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();
  const { notifications } = useNotifications();

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (!storedUser) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    navigate("/");
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPdfExtractorOpen, setIsPdfExtractorOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [finalResult, setFinalResult] = useState("");

  const [selectedItem, setSelectedItem] = useState("Dashboard");
  const handleClick = (item) => {
    setSelectedItem(item);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setAnswers({});
    setCurrentQuestion(0);
    setFinalResult("");
    setIsModalOpen(false);
  };

  const closePdfExtractor = () => {
    setIsPdfExtractorOpen(false);
  };

  const closeNotificationModal = () => {
    setIsNotificationOpen(false);
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
      const storedUser = sessionStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : null;
    };

    const currentUser = user || loadUser();
    if (!currentUser || !currentUser.userId) {
      navigate("/login");
      return;
    }

    fetchUserData(currentUser.userId);
  }, [user, setUser, navigate]);

  useEffect(() => {
    if (userInfo.age === null) {
      const timer = setTimeout(() => {
        setIsFormModalOpen(true);
      }, 1000); // Set delay here
      return () => clearTimeout(timer);
    }
  }, [userInfo.age]);

  const fetchUserData = async (userId) => {
    try {
      const response = await fetch(
        `https://backend-ywtx.onrender.com/getUserData/${userId}`
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

  const updateUserInfo = async (newInfo) => {
    const loadUser = () => {
      const storedUser = sessionStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : null;
    };

    const currentUser = user || loadUser();
    if (!currentUser || !currentUser.userId) {
      console.error("No user information available");
      navigate("/login");
      return;
    }

    try {
      const response = await fetch(
        `https://backend-ywtx.onrender.com/updateUserData`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId: currentUser.userId, ...newInfo }),
        }
      );

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "Failed to update data");
      }

      await fetchUserData(currentUser.userId);
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
        userData={userInfo}
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
            onClick={() => {
              handleClick("Notification");
              console.log(notifications[10]);
              setIsNotificationOpen(true);
            }}
            className={`${
              selectedItem === "Notification" ? "text-teal-500" : ""
            } cursor-pointer`}
          >
            <FontAwesomeIcon icon={faBell} className="mr-2" /> Notification
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
            <p className="text-gray-500">Welcome</p>
            <p className="text-5xl font-semibold text-teal-800 flex items-center gap-4">
              {userInfo.name}{" "}
            </p>
          </div>
          <div className="flex">
            <FontAwesomeIcon
              icon={faPenToSquare}
              className="mr-2 bg-teal-400 p-3 text-2xl rounded-md text-white drop-shadow-md cursor-pointer"
              onClick={() => setIsFormModalOpen(true)}
            />
            <FontAwesomeIcon
              icon={faUpload}
              className="mr-2 bg-teal-400 p-3 text-2xl rounded-md text-white drop-shadow-md cursor-pointer"
              onClick={() => setIsPdfExtractorOpen(true)}
            />

            <div
              className="mr-2 relative"
              onClick={() => {
                setIsNotificationOpen(true);
              }}
            >
              <FontAwesomeIcon
                icon={faBell}
                className="bg-teal-400 p-3 text-2xl rounded-md text-white drop-shadow-md cursor-pointer"
              />
              {notifications.length > 0 && (
                <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex justify-center items-center text-sm ">
                  {notifications.length}
                </div>
              )}
            </div>
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
              <BmiChart height={userInfo.height} weight={userInfo.weight} />
            </div>
          </div>
          <div className="w-1/2 flex flex-col gap-2">
            <h3 className="text-3xl font-semibold text-teal-500">
              DISEASE PREDICTION
            </h3>
            <p className="text-sm text-gray-500 pt-2">
              Launch the app and upload a clear well lit image of the effected
              area for better result.
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
          <Akinator
            isOpen={isModalOpen}
            closeModal={closeModal}
            answers={answers}
            setAnswers={setAnswers}
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            finalResult={finalResult}
            setFinalResult={setFinalResult}
          />

          <PdfTextExtractor
            isOpen={isPdfExtractorOpen}
            closeModal={closePdfExtractor}
          />

          <NotificationModal
            isOpen={isNotificationOpen}
            closeModal={closeNotificationModal}
          />
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
