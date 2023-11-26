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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, rem.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, perferendis! Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Sequi, quis.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem minima,
            labore quidem debitis ab eveniet.
          </p>
        </div>

        <div className="w-1/5 text-center flex flex-col gap-2 items-center">
          <FontAwesomeIcon
            icon={faKitMedical}
            className="text-4xl bg-teal-400 rounded-full w-1/3 py-4 text-white"
          />
          <h3 className="text-lg font-bold mt-4">INSTANT RESULT</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde optio
            nemo distinctio earum nam cumque.
          </p>
        </div>

        <div className="w-1/5 text-center flex flex-col gap-2 items-center">
          <FontAwesomeIcon
            icon={faHandHoldingMedical}
            className="text-4xl bg-teal-400 rounded-full w-1/3 py-4 text-white"
          />
          <h3 className="text-lg font-bold mt-4">EXPLAINABLE AI</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            molestias ad ex aspernatur atque fugiat.
          </p>
        </div>

        <div className="w-1/5 text-center flex flex-col gap-2 items-center">
          <FontAwesomeIcon
            icon={faFileWaveform}
            className="text-4xl bg-teal-400 rounded-full w-1/3 py-4 text-white"
          />
          <h3 className="text-lg font-bold mt-4">PREDICTIVE ANALYSIS</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
            quisquam doloremque unde atque, ipsum error?
          </p>
        </div>

        <div className="w-1/5 text-center flex flex-col gap-2 items-center">
          <FontAwesomeIcon
            icon={faFilePrescription}
            className="text-4xl bg-teal-400 rounded-full w-1/3 py-4 text-white"
          />
          <h3 className="text-lg font-bold mt-4">TELEMEDICINE</h3>
          <p className="text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
            minus nihil deserunt earum fugiat laudantium.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            iusto rerum itaque ab a ea alias obcaecati mollitia et voluptatum.
            Iusto obcaecati nesciunt eius magnam consectetur temporibus illum.
            Recusandae atque quibusdam animi eveniet officiis odio modi
            provident ut non dolor.
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
