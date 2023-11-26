import React from "react";
import {
  AiFillFacebook,
  AiOutlineGoogle,
  AiOutlineTwitter,
} from "react-icons/ai";
import bgimage from "../img/doc-2.png";

const Login = () => {
  const errorMessage = false;
  return (
    <div className="w-screen h-screen overflow-hidden flex">
      <div className="w-1/2 h-full py-16 px-40">
        <h1 className="text-2xl font-bold mb-8 text-teal-700">
          <span className="text-yellow-600">AI </span>HEALTHCARE
        </h1>
        <h3 className="text-4xl font-semibold text-gray-400 mb-3">
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
            className={`w-2/5 text-md ${errorMessage ? "text-red-500" : ""}`}
          >
            {errorMessage ? errorMessage : "or continue with email"}
          </span>{" "}
          <span className="inline-block w-1/3 h-0.5 bg-gray-300 my-4"></span>
        </p>
        <form>
          <div className="flex flex-col pt-4 pb-4">
            <label htmlFor="email" className="text-gray-700 font-semibold pb-2">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
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
              name="password"
              type="password"
              className="w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex justify-between items-center mt-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-blue-500 h-4 w-4"
              />
              <span className="ml-2 text-gray-700 font-semibold">
                Remember Me
              </span>
            </label>
            <a href="/error" class="text-teal-600 font-medium">
              Forgot Password?
            </a>
          </div>
          <button className="mt-8 mb-6 bg-teal-400 text-white font-medium w-full py-3 rounded-md">
            Login
          </button>
        </form>
        <p className="text-center">
          Don't have an account?{" "}
          <button to="/registration" className="text-teal-700 cursor-pointer">
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
