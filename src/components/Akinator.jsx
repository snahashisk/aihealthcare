import questions from "../static/question";
import allConditions from "../static/allConditions";
import React, { useState, useEffect, useCallback } from "react";
import * as tmImage from "@teachablemachine/image";
import { useNotifications } from "../contexts/NotificationContext";

const teethUrl = "https://teachablemachine.withgoogle.com/models/r9aXQWWco/";
const eyeUrl = "https://teachablemachine.withgoogle.com/models/bVIEtrVob/";
const nailUrl = "https://teachablemachine.withgoogle.com/models/-zYzYe-f-/";
const scalpUrl = "https://teachablemachine.withgoogle.com/models/0H-m9sBYq/";
const skinUrl = "https://teachablemachine.withgoogle.com/models/Q4nTRviR_/";

const Akinator = ({
  isOpen,
  closeModal,
  answers,
  setAnswers,
  currentQuestion,
  setCurrentQuestion,
  finalResult,
  setFinalResult,
}) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [model, setModel] = useState(null);
  const [models, setModels] = useState({
    teethModel: null,
    eyeModel: null,
    nailModel: null,
    scalpModel: null,
    skinModel: null,
  });
  const [questionHistory, setQuestionHistory] = useState([]);
  const { addNotification } = useNotifications();

  const loadModels = useCallback(async () => {
    const loadModel = async (url, modelName) => {
      console.log(`Starting download for ${modelName} model`);
      const model = await tmImage.load(
        url + "model.json",
        url + "metadata.json"
      );
      return model;
    };

    const teethModel = await loadModel(teethUrl, "Teeth");
    const eyeModel = await loadModel(eyeUrl, "Eye");
    const nailModel = await loadModel(nailUrl, "Nail");
    const scalpModel = await loadModel(scalpUrl, "Scalp");
    const skinModel = await loadModel(skinUrl, "Skin");
    addNotification("All models are downloaded. You are ready to go.");
    setModels({ teethModel, eyeModel, nailModel, scalpModel, skinModel });
  }, [addNotification]);

  useEffect(() => {
    if (isOpen && !models.teethModel) {
      loadModels();
    }
  }, [isOpen, loadModels, models.teethModel]);

  if (!isOpen) return null;

  const predictImage = async () => {
    if (!model || !imageSrc) {
      console.log("No model or image to predict");
      return;
    }
    const img = new Image();
    img.src = imageSrc;
    img.onload = async () => {
      const predictions = await model.predict(img);
      const highestPrediction = predictions.reduce((prev, current) => {
        return prev.probability > current.probability ? prev : current;
      });
      setPrediction(highestPrediction.className);
    };
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
        setPrediction(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnswer = (selectedOption) => {
    setAnswers({ ...answers, [currentQuestion]: selectedOption });

    const currentQuestionObj = questions[currentQuestion];
    const selectedOptionObj = currentQuestionObj.options.find(
      (option) => option.text === selectedOption
    );

    if (selectedOption === "I have Teeth related issue.") {
      setModel(models.teethModel);
      console.log("teeth selected");
    } else if (selectedOption === "I have Eye related issue.") {
      setModel(models.eyeModel);
      console.log("eye selected");
    } else if (selectedOption === "I have Scalp related issue.") {
      setModel(models.scalpModel);
      console.log("scalp selected");
    } else if (selectedOption === "I have Nail related issue.") {
      setModel(models.nailModel);
      console.log("nail selected");
    } else if (selectedOption === "I have Skin related issue.") {
      setModel(models.skinModel);
      console.log("skin selected");
    }

    setQuestionHistory([...questionHistory, currentQuestion]);

    if (selectedOptionObj?.diseaseName) {
      setFinalResult(selectedOptionObj.diseaseName);
      setCurrentQuestion(questions.length);
    } else if (selectedOptionObj?.nextQuestion !== undefined) {
      setCurrentQuestion(selectedOptionObj.nextQuestion);
    } else {
      setCurrentQuestion(questions.length);
    }
  };

  const handleBack = () => {
    if (questionHistory.length > 0) {
      const lastQuestion = questionHistory[questionHistory.length - 1];
      setQuestionHistory(questionHistory.slice(0, -1));
      setCurrentQuestion(lastQuestion);
    }
  };

  const handleCloseModal = () => {
    closeModal();
    setPrediction(null);
    setImageSrc(null);
    setModel(null);
    setQuestionHistory([]);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-smoke-light flex backdrop-blur-md duration-75">
      <div className="relative bg-white w-full max-w-md m-auto flex-col flex rounded-lg h-4/5 overflow-y-scroll no-scrollbar">
        <div className="flex justify-between items-center pb-3 bg-teal-500 px-6 py-3">
          <p className="text-2xl font-semibold text-white">DISEASE PREDICTOR</p>
          <div className="cursor-pointer z-50" onClick={handleCloseModal}>
            <svg
              className="fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path d="M14.59 0l-5.59 5.59-5.59-5.59-2.41 2.41 5.59 5.59-5.59 5.59 2.41 2.41 5.59-5.59 5.59 5.59 2.41-2.41-5.59-5.59 5.59-5.59-2.41-2.41z" />
            </svg>
          </div>
        </div>
        {currentQuestion < questions.length ? (
          <div className="p-6">
            <p className="mb-4">{questions[currentQuestion].text}</p>
            <ul className="list-none">
              {questions[currentQuestion].options.map((option, index) => (
                <li
                  key={index}
                  className="bg-gray-100 cursor-pointer p-2 rounded mt-4 font-medium hover:bg-teal-500 hover:text-white"
                  onClick={() => handleAnswer(option.text)}
                >
                  {option.text}
                </li>
              ))}
            </ul>
            {questionHistory.length > 0 && (
              <button
                onClick={handleBack}
                className="px-4 py-2 mt-4 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none"
              >
                Back
              </button>
            )}
          </div>
        ) : finalResult ? (
          <div className="p-6">
            <p className="text-lg m-auto">
              Based on your answers, the possible condition could be:{" "}
              <strong>{finalResult}</strong>
            </p>

            {allConditions.includes(finalResult.toLowerCase()) ? (
              <>
                <p className="my-4">
                  Please upload a photo of your affected area.
                </p>
                <input
                  type="file"
                  accept="image/jpg, image/jpeg"
                  onChange={handleFileChange}
                  className="w-full mr-4 py-2 px-4 rounded-md border-0 text-sm font-semibold bg-violet-50 text-violet-700 hover:file:bg-violet-100"
                />
                <button
                  onClick={predictImage}
                  className="px-4 py-2 mt-4 w-full bg-green-600 text-white rounded-md hover:bg-green-600 focus:outline-none"
                >
                  Predict
                </button>
              </>
            ) : (
              <p className="my-4">
                You don't need to upload a photo, upper mentioned disease is the
                final prediction.
              </p>
            )}

            {prediction && (
              <div className="mt-4">
                <p className="text-lg">
                  Prediction for diagnosis is:{" "}
                  <span className="font-semibold text-teal-600">
                    {prediction}
                  </span>
                </p>
                <p className="mt-4 font-medium">
                  {finalResult.toLowerCase() === prediction.toLowerCase()
                    ? "Our text based and image based evaluation gave the same result."
                    : "Our text based and image based evaluation gave different result. Please retake the test."}
                </p>
              </div>
            )}
          </div>
        ) : (
          <div>
            <p className="text-lg m-auto">No more questions available.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Akinator;
