import React, { useState } from "react";
import {
  AiFillFacebook,
  AiOutlineGoogle,
  AiOutlineTwitter,
} from "react-icons/ai";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bgimage from "../img/doc-2.png";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import { useNotifications } from "../contexts/NotificationContext";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { setUser } = useUserContext();
  const [loading, setLoading] = useState(false);
  const { addNotification } = useNotifications();

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("https://backend-ywtx.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const userData = await response.json();
      sessionStorage.setItem(
        "user",
        JSON.stringify({ userId: userData.userId })
      );
      setUser({ userId: userData.userId });
      setLoading(false);
      navigate("/dashboard");
      addNotification("Welcome to AI Healthcare. We are here to help you.");
    } catch (error) {
      setLoading(false);
      setErrorMessage(error.message);
    }
  };

  const handleRegistration = () => {
    navigate("/registration");
  };
  return (
    <div className="w-screen h-screen overflow-hidden flex">
      <div className="w-1/2 h-full py-16 px-40">
        <h1
          className="text-2xl font-bold mb-8 text-teal-700 cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <span className="text-yellow-600">AI </span>
          HEALTHCARE
        </h1>
        <h3 className="text-4xl font-semibold text-gray-600 mb-3">
          Login to your Account
        </h3>
        <p className="text-gray-600">
          Welcome back! select a method to login:{" "}
        </p>
        <div className="flex justify-around py-6">
          <div className="flex gap-1 border-2 border-gray-200 px-6 py-2 rounded-md text-md cursor-pointer">
            <AiOutlineGoogle className="text-2xl text-teal-600" />
            <p>Google</p>
          </div>
          <div className="flex gap-1 border-2 border-gray-200 px-6 py-2 rounded-md text-md cursor-pointer">
            <AiFillFacebook className="text-2xl text-teal-600" />
            <p>Facebook</p>
          </div>
          <div className="flex gap-1 border-2 border-gray-200 px-6 py-2 rounded-md text-md cursor-pointer">
            <AiOutlineTwitter className="text-2xl text-teal-600" />
            <p>Twitter</p>
          </div>
        </div>
        <p className="text-gray-500 text-center flex items-center">
          <span className="inline-block w-1/3 h-0.5 bg-gray-300 my-4"></span>
          <span
            className={`w-3/5 text-md ${errorMessage ? "text-red-500" : ""}`}
          >
            {errorMessage ? errorMessage : "or continue with email"}
          </span>{" "}
          <span className="inline-block w-1/3 h-0.5 bg-gray-300 my-4"></span>
        </p>
        <form onSubmit={handleLogin}>
          <div className="flex flex-col pt-4 pb-4">
            <label htmlFor="email" className="text-gray-700 font-semibold pb-2">
              Email address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col py-2">
            <label
              htmlFor="password"
              className="text-gray-700 font-semibold pb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="mt-8 mb-6 bg-teal-400 text-white font-medium w-full py-3 rounded-md overflow-hidden"
          >
            {loading ? (
              <div className="flex gap-2 justify-center">
                <FontAwesomeIcon icon={faSpinner} spin size="lg" className="" />
                Loading
              </div>
            ) : (
              "Login"
            )}
          </button>
        </form>
        <p className="text-center">
          Don't have an account?{" "}
          <button
            to="/registration"
            className="text-teal-700 cursor-pointer"
            onClick={handleRegistration}
          >
            Create an account
          </button>
        </p>
      </div>
      <div className="relative w-1/2 h-full overflow-hidden bg-teal-500">
        <img src={bgimage} alt="background" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Login;
