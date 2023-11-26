import React from "react";
import homeimage from "../img/homepage-1.png";

const Homepage = () => {
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
            WE PROVIDE BEST HEALTHCARE
          </h1>
          <p className="w-2/5 mt-10 text-white text-base mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            ullam quis accusantium itaque dolorem fuga perferendis eaque aperiam
            neque a? At sint similique eos sapiente optio modi cum ad delectus.
          </p>
          <button className="px-8 py-2 bg-white rounded-md text-teal-600 text-lg">
            Register Now
          </button>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
