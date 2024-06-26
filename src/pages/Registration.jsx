import React, { useState } from "react";
import {
  AiFillFacebook,
  AiOutlineGoogle,
  AiOutlineTwitter,
} from "react-icons/ai";
import bgimage from "../img/doc-3.png";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(
        "https://backend-ywtx.onrender.com/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password, firstName, lastName }),
        }
      );

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error || "Registration failed");
      }

      navigate("/login");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="w-screen h-screen overflow-hidden flex flex-row-reverse">
      <div className="relative w-1/2 h-full overflow-hidden bg-gradient-to-br from-purple-600 to-teal-400 via-blue-500 flex flex-col justify-center items-center text-white">
        <img src={bgimage} className="h-full w-full" alt="background" />
      </div>
      <form className="w-1/2 h-full py-16 px-40" onSubmit={handleSubmit}>
        <h1
          className="text-2xl font-bold mb-4 text-teal-700 cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <span className="text-yellow-600">AI </span>HEALTHCARE
        </h1>
        <h3 className="text-4xl font-semibold text-gray-600 mb-3">
          Create an Account
        </h3>
        <p className="text-gray-600">Join us! Register with a method:</p>
        <div className="flex justify-around pt-3 pb-6">
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

        <div className="flex pb-2 gap-3">
          <div className="flex flex-col group">
            <label
              htmlFor="name"
              className="text-gray-700 font-semibold pb-1 group-hover:text-teal-600 duration-200"
            >
              First Name
            </label>
            <input
              id="name"
              name="name"
              type="name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              placeholder="Enter First Name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-700 font-semibold pb-1">
              Last Name
            </label>
            <input
              id="name"
              name="name"
              type="name"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              placeholder="Enter Last Name"
            />
          </div>
        </div>

        <div className="flex flex-col pb-2">
          <label htmlFor="email" className="text-gray-700 font-semibold pb-1 ">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            placeholder="Enter your email"
          />
        </div>

        <div className="flex flex-col pb-2">
          <label
            htmlFor="password"
            className="text-gray-700 font-semibold pb-1"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            placeholder="Enter your password"
          />
        </div>

        <div className="flex flex-col pb-2">
          <label
            htmlFor="confirmPassword"
            className="text-gray-700 font-semibold pb-1"
          >
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            placeholder="Confirm your password"
          />
        </div>

        {errorMessage && <p className="text-red-500">{errorMessage}</p>}

        <div className="flex justify-between items-center mt-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox text-blue-500 h-4 w-4"
            />
            <span className="ml-2 text-gray-700 font-semibold">
              I agree to the terms and conditions
            </span>
          </label>
        </div>

        <button
          type="submit"
          className="my-2 bg-teal-400 text-white font-medium w-full py-3 rounded-md"
        >
          Register
        </button>

        <p className="text-center">
          Already have an account?{" "}
          <button
            className="text-teal-700 cursor-pointer font-medium"
            onClick={handleLogin}
          >
            Login here
          </button>
        </p>
      </form>
    </div>
  );
};

export default Registration;
