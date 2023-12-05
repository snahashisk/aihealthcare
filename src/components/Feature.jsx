import React from "react";
import image1 from "../img/dis-1.jpg";
import image2 from "../img/dis-2.jpg";
import image3 from "../img/dis-3.jpg";
import image4 from "../img/dis-4.jpg";
import image5 from "../img/dis-5.jpg";
import { useNavigate } from "react-router-dom";

const Feature = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="h-full px-40 py-16 bg-teal-700 flex flex-col items-center">
      <div className="text-center text-white">
        <h2 className="text-4xl font-semibold text-teal-100">
          Our Provided Support
        </h2>
        <p className="mt-6 text-md">
          Our app expertly predicts diseases affecting the scalp, nails, skin,
          eyes, and teeth, utilizing advanced AI algorithms to provide accurate,
          early diagnosis for effective health management.
        </p>
      </div>
      <div className="mt-16 flex gap-6 justify-center">
        <div className="w-1/5 bg-white text-center rounded-md overflow-hidden">
          <img src={image1} alt="MyImage" className="mb-4 shadow-lg" />
          <h4 className="text-lg font-bold text-teal-700">NAIL DISEASE</h4>
          <p className="mb-4">30 Disease</p>
        </div>
        <div className="w-1/5 bg-white text-center rounded-md overflow-hidden">
          <img src={image2} alt="MyImage" className="mb-4 shadow-lg" />
          <h4 className="text-lg font-bold text-teal-700">SCALP DISEASE</h4>
          <p className="mb-4">43 Disease</p>
        </div>
        <div className="w-1/5 bg-white text-center rounded-md overflow-hidden">
          <img src={image3} alt="MyImage" className="mb-4 shadow-lg" />
          <h4 className="text-lg font-bold text-teal-700">SKIN DISEASE</h4>
          <p className="mb-4">57 Disease</p>
        </div>
        <div className="w-1/5 bg-white text-center rounded-md overflow-hidden">
          <img src={image4} alt="MyImage" className="mb-4 shadow-lg" />
          <h4 className="text-lg font-bold text-teal-700">EYE DISEASE</h4>
          <p className="mb-4">28 Disease</p>
        </div>
        <div className="w-1/5 bg-white text-center rounded-md overflow-hidden">
          <img src={image5} alt="MyImage" className="mb-4 shadow-lg" />
          <h4 className="text-lg font-bold text-teal-700">TEETH DISEASE</h4>
          <p className="mb-4">42 Disease</p>
        </div>
      </div>
      <button
        className="mt-16 px-8 py-2 rounded-md bg-teal-500 text-lg text-white"
        onClick={handleLoginClick}
      >
        Login For More
      </button>
    </div>
  );
};

export default Feature;
