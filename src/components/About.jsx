import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStaffSnake,
  faKitMedical,
  faHandHoldingMedical,
  faFileWaveform,
  faFilePrescription,
} from "@fortawesome/free-solid-svg-icons";
import docImage from "../img/doc-1.png";

const About = () => {
  return (
    <div className="h-full px-40 py-16">
      <div className="text-center">
        <h2 className="text-4xl font-semibold text-teal-600">
          Our Best Features
        </h2>
        <p className="mt-6 text-md">
          AI in healthcare has several noteworthy features. It excels in
          analyzing large datasets quickly, aiding in diagnostics, personalizing
          treatment plans, and streamlining administrative tasks, ultimately
          enhancing efficiency and improving patient outcomes.
        </p>
      </div>
      <div className="flex mt-8 gap-4">
        <div className="w-1/5 text-center flex flex-col gap-2 items-center">
          <FontAwesomeIcon
            icon={faStaffSnake}
            className="text-4xl bg-teal-400 rounded-full w-1/3 py-4 text-white"
          />
          <h3 className="text-lg font-bold mt-4">DIAGNOSE</h3>
          <p className="text-sm">
            Get the fastest diagnosis of you health issue by providing us image
            input from your camera.
          </p>
        </div>

        <div className="w-1/5 text-center flex flex-col gap-2 items-center">
          <FontAwesomeIcon
            icon={faKitMedical}
            className="text-4xl bg-teal-400 rounded-full w-1/3 py-4 text-white"
          />
          <h3 className="text-lg font-bold mt-4">INSTANT RESULT</h3>
          <p className="text-sm">
            An AI healthcare website with instant results could provide rapid
            and accurate information.
          </p>
        </div>

        <div className="w-1/5 text-center flex flex-col gap-2 items-center">
          <FontAwesomeIcon
            icon={faHandHoldingMedical}
            className="text-4xl bg-teal-400 rounded-full w-1/3 py-4 text-white"
          />
          <h3 className="text-lg font-bold mt-4">EXPLAINABLE AI</h3>
          <p className="text-sm">
            The goal of such a website is to empower users with valuable health
            information.
          </p>
        </div>

        <div className="w-1/5 text-center flex flex-col gap-2 items-center">
          <FontAwesomeIcon
            icon={faFileWaveform}
            className="text-4xl bg-teal-400 rounded-full w-1/3 py-4 text-white"
          />
          <h3 className="text-lg font-bold mt-4">PREDICTIVE ANALYSIS</h3>
          <p className="text-sm">
            A user inputs their health data, the AI system analyses this
            information to predict potential future health outcomes.
          </p>
        </div>

        <div className="w-1/5 text-center flex flex-col gap-2 items-center">
          <FontAwesomeIcon
            icon={faFilePrescription}
            className="text-4xl bg-teal-400 rounded-full w-1/3 py-4 text-white"
          />
          <h3 className="text-lg font-bold mt-4">TELEMEDICINE</h3>
          <p className="text-sm">
            Potential heathcare center details will be provided to help you to
            achieve cure.
          </p>
        </div>
      </div>
      <div className="bg-red mt-8 flex">
        <div className="w-1/2 p-10 rounded-md overflow-hidden">
          <img src={docImage} alt="MyImage" className="rounded-md" />
        </div>
        <div className="p-10 w-1/2 flex flex-col gap-4 items-start">
          <h3 className="text-2xl font-bold">ABOUT US</h3>
          <p>
            Welcome to our AI Healthcare Hub, where cutting-edge technology
            meets compassionate care. We harness the power of artificial
            intelligence to revolutionize healthcare, ensuring personalized
            solutions and improved patient outcomes. Join us on the forefront of
            innovation, where your well-being is our priority.
          </p>
          <button className="px-8 py-2 bg-teal-400 rounded-md text-white text-lg">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
