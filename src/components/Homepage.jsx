import React from "react";
import homeimage from "../img/homepage-1.png";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleRegisterClick = () => {
    navigate("/registration");
  };

  return (
    <div className="h-full overflow-hidden relative">
      <div className="h-full w-full absolute">
        <img src={homeimage} alt="MyImage" className="h-full w-full" />
      </div>
      <div className="z-10 text-black text-xl absolute top-0 left-0 px-40 py-8 w-full h-full">
        <div className="text-3xl font-semibold text-white">
          <span className="text-yellow-400">AI</span> Healthcare
        </div>
        <div className="mt-20">
          <h1 className="text-7xl w-3/5 pt-16 text-white">
            WE PROVIDE NEEDED HEALTHCARE
          </h1>
          <p className="w-2/5 mt-10 text-white text-base mb-10">
            Welcome to our AI-powered healthcare platform, where cutting-edge
            technology meets compassionate care. Explore a world of personalized
            health solutions designed to enhance your well-being. Your journey
            to optimal health begins here.
          </p>
          <div className="flex gap-5">
            <button
              className="px-8 py-2 bg-amber-500 rounded-md text-white text-lg"
              onClick={handleLoginClick}
            >
              Login Here
            </button>
            <button
              className="px-8 py-2 bg-white rounded-md text-teal-600 text-lg"
              onClick={handleRegisterClick}
            >
              Register Here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
