import React, { useState, useEffect, useRef } from "react";
import Webcam from "react-webcam";

const CamModal = ({ isOpen, closeModal }) => {
  const webcamRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);

  const videoConstraints = {
    facingMode: "user",
  };

  useEffect(() => {
    if (!isOpen) {
      setImageSrc(null); // Reset the image source when the modal is closed
    }
  }, [isOpen]);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);
  }, [webcamRef, setImageSrc]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => setImageSrc(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      } transition-opacity duration-300 ease-in-out z-50`}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative bg-white p-8 rounded-lg shadow-lg z-50 w-1/2 h-2/3">
        <h2 className="text-xl font-semibold mb-4">Webcam Feed</h2>

        {isOpen && !imageSrc && (
          <div className="w-full h-2/3 border border-gray-300 rounded-md">
            <Webcam
              ref={webcamRef}
              audio={false}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
              className="w-full h-full"
            />
          </div>
        )}

        {imageSrc && (
          <img
            src={imageSrc}
            alt="Captured"
            className="w-full h-2/3 border border-gray-300 rounded-md"
          />
        )}

        <div className="flex justify-around items-center mt-4">
          {!imageSrc && (
            <button
              onClick={capture}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Capture Image
            </button>
          )}

          <input
            type="file"
            accept="image/jpg, image/jpeg"
            onChange={handleFileChange}
            className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
          />

          <button
            onClick={() => {
              closeModal();
            }}
            className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 focus:outline-none"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CamModal;
