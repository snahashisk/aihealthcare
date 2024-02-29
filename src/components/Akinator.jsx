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
  if (!isOpen) return null;

  const questions = [
    {
      text: "Choose an option: Level 1 : 0",
      options: [
        { text: "I have Skin related issue.", nextQuestion: 1 },
        { text: "I have Teeth realated issue.", nextQuestion: 2 },
        { text: "I have scalp related issue.", nextQuestion: 11 },
        { text: "I have Nail related issue.", nextQuestion: 16 },
        { text: "I have Eye related issue.", nextQuestion: 16 },
      ],
    },
    {
      text: "Choose an option : 1",
      options: [
        { text: "Sub-option A", nextQuestion: 2 },
        { text: "Sub-option B", nextQuestion: 3 },
        { text: "Sub-option C", nextQuestion: 4 },
        { text: "Sub-option D", nextQuestion: 5 },
      ],
    },
    {
      text: "Choose an option: Level 1 : 2",
      options: [
        { text: "I have pain and discomfort in teeth.", nextQuestion: 3 },
        { text: "I have issue about oral hygine.", nextQuestion: 6 },
        { text: "I have issue about my tooth appearence.", nextQuestion: 7 },
        { text: "I have gum related issue.", nextQuestion: 8 },
      ],
    },
    {
      text: "Choose an option: Level 2 :: 3",
      options: [
        { text: "I have only Pain in my teeth", nextQuestion: 4 },
        { text: "I have Sensitive teeth.", nextQuestion: 5 },
      ],
    },
    {
      text: "Choose an option: Level 3 :: 4",
      options: [
        { text: "I have Sharp Pain in my teeth", nextQuestion: 9 },
        { text: "I have Throbbing Pain in my teeth.", nextQuestion: 10 },
      ],
    },
    {
      text: "Choose an option: Level 3 ::: 5",
      options: [
        { text: "I have issue from eating hot/cold food.", nextQuestion: 11 },
        { text: "I have issue from eating from sweet food.", nextQuestion: 12 },
      ],
    },
    {
      text: "Choose an option: Level 2 : 6",
      options: [
        { text: "I have bad breath.", nextQuestion: 13 },
        { text: "I have dry mouth.", nextQuestion: 14 },
      ],
    },

    {
      text: "Choose an option: Level 2 : 7 ",
      options: [
        { text: "I am facing discoloration of my teeth.", nextQuestion: 15 },
        { text: "I have cracks/chips on my teeth.", nextQuestion: 16 },
      ],
    },
    {
      text: "Choose an option: Level 2 : 8",
      options: [
        { text: "I have bleeding gums.", nextQuestion: 18 },
        { text: "I have swollen gums.", nextQuestion: 19 },
        { text: "I have receding gums.", nextQuestion: 20 },
      ],
    },
    {
      text: "Choose an option: Level 4 : 9",
      options: [
        {
          text: "I have sharp pain while eating sweet food.",
          diseaseName: "Tooth decay",
        },
        {
          text: "I have sharp pain in my upper teeth",
          diseaseName: "Sinus Infection",
        },
        {
          text: "I feel pain while chewing or biting.",
          diseaseName: "Barodontalgia",
        },
        {
          text: "I have fever and fatigue.",
          diseaseName: "Bacterial Endocarditis",
        },
        {
          text: "I have swelling in jaw and displacement of teeth.",
          diseaseName: "Odontoma",
        },
        {
          text: "I have difficulty in opening mouth.",
          diseaseName: "Sialadenitis",
        },
        {
          text: "I have jaw pain and swelling in gum area.",
          diseaseName: "Wisdom tooth impaction",
        },
      ],
    },
    {
      text: "Choose an option: Level 4 : 10",
      options: [
        {
          text: "I have grinding and clenching in my teeth.",
          diseaseName: "Bruxism",
        },
        {
          text: "I have cracked or fractured tooth.",
          diseaseName: "Tooth Fracture",
        },
        {
          text: "I have painful blisters on lips and gums with tingling sensations.",
          diseaseName: "Abscess",
        },
      ],
    },
    {
      text: "Choose an option: Level 4 :11",
      options: [
        {
          text: "I have pain triggered by hot/cold foods.",
          diseaseName: "Dentim Hypersensitivity",
        },
        {
          text: "I have sweeling in the gums and sensitivity to hot/cold food.",
          diseaseName: "Tooth Fracture",
        },
        {
          text: "I have translucensy in teeth and sensitivity to hot/cold food.",
          diseaseName: "Erosion",
        },
        {
          text: "I have Sensitivity to hot or cold foods/beverages and visible holes or pits in the teeth ",
          diseaseName: "Lingual Caries",
        },
        {
          text: "I have Severe toothach and sensitivity to hot and cold food.",
          diseaseName: "Periapical abscess",
        },
      ],
    },
    {
      text: "Choose an option: Level 4 : 12",
      options: [
        {
          text: "I have bleeding gums and bad breath.",
          diseaseName: "Gingivitis",
        },
        {
          text: "I feel Pain or discomfort triggered by sweet foods.",
          diseaseName: "Dentin Hypersensitivity",
        },
        {
          text: "I feel discomfort when brushing or flossing.",
          diseaseName: "Hypersensitivity",
        },
      ],
    },
    {
      text: "Choose an option: Level 4 : 13",
      options: [
        {
          text: "I have persistent bad breath, plaque buildup, swollen gum.",
          diseaseName: "Poor Oral Hygiene",
        },
        {
          text: "I have toothache, sensitivity to hot or cold, bad breath.",
          diseaseName: "Cavities and Tooth Decay",
        },
        {
          text: "I have white or yellowish coating on the tongue, along with bad breath.",
          diseaseName: "Tongue Coating",
        },
        {
          text: "I have Persistent foul odor from the mouth.",
          diseaseName: "Halitosis",
        },
        {
          text: "I have white patches on the gums or inside the mouth.",
          diseaseName: "Keratosis",
        },
        {
          text: "I have White patches or plaques on the gums, tongue, or inside of the cheeks.",
          diseaseName: "Leukoplakia",
        },
        {
          text: "I have enlargement of the tongue, speech difficulties and Difficulty swallowing or breathing.",
          diseaseName: "Macroglossia",
        },
        {
          text: "I have gum recession,Persistent bad breath.",
          diseaseName: "Periodontitis",
        },
      ],
    },
    {
      text: "Choose an option: Level 4 : 14",
      options: [
        {
          text: "I have White patches in the mouth, soreness, and discomfort.",
          diseaseName: "Oral Infections",
        },
        {
          text: "I have Dry eyes,Difficulty swallowing or speaking due to dryness.",
          diseaseName: "Sjogren's Syndrome",
        },
        {
          text: "I have persistent dryness or feeling of stickiness in the mouth, difficulty chewing, swallowing",
          diseaseName: "Xerostomia",
        },
      ],
    },
    {
      text: "Choose an option: Level 4 : 15",
      options: [
        {
          text: "I have White patches in the mouth, soreness, and discomfort.",
          diseaseName: "Oral Infections",
        },
        {
          text: "I have Dry eyes,Difficulty swallowing or speaking due to dryness.",
          diseaseName: "Sjogren's Syndrome",
        },
        {
          text: "I have persistent dryness or feeling of stickiness in the mouth, difficulty chewing, swallowing",
          diseaseName: "Xerostomia",
        },
      ],
    },
    {
      text: "Choose an option: Level 4 : 16",
      options: [
        {
          text: "My teeths are turning yellow.",
          diseaseName: "Bulimia teeth",
        },
        {
          text: "I have visible pits or holes in the affected teeth.",
          diseaseName: "Dark Spot of Teeth",
        },
        {
          text: "I have White spots on my teeths.",
          diseaseName: "Fluorosis",
        },
        {
          text: "I have Pink or red spots on my teeths.",
          diseaseName: "Internal Resorption",
        },
        {
          text: "I have discolored teeth, enamel pitting or ridges.",
          diseaseName: "Amelogenesis Imperfecta",
        },
        {
          text: "I have visible cavities or holes in the root surfaces,Discoloration of affected teeth.",
          diseaseName: "Root Caries",
        },
      ],
    },
    {
      text: "Choose an option: Level 4 : 17",
      options: [
        {
          text: "I have missing teeth,Gaps between teeth,Misalignment of remaining teeth .",
          diseaseName: "Hypodontia",
        },
        {
          text: "I have Crooked or misaligned front teeth, difficulty biting or chewing.",
          diseaseName: "Incisor Malocclusion",
        },
        {
          text: "I have Abnormally small teeth,Gaps between teeth,Aesthetically displeasing smile.",
          diseaseName: "Microdontia",
        },
        {
          text: "I have Extra teeth in the mouth,Crowding or misalignment of teeth",
          diseaseName: "Supernumerary Teeth",
        },
      ],
    },
    {
      text: "Choose an option: Level 4 : 18 ",
      options: [
        {
          text: "I have Persistent bad breath ,Gum inflammation and bleeding,Receding gums or pockets forming between teeth and gums.",
          diseaseName: "Pyorrhea",
        },
        {
          text: "I have Swollen gums,Bleeding gums.",
          diseaseName: "Inflammatory Gingival Hyperplasia",
        },
      ],
    },
    {
      text: "Choose an option: 19",
      options: [
        {
          text: "I have Severe gum pain,Bleeding gums,Formation of ulcers or lesions on the gums.",
          diseaseName: "Necrotizing Periodontal",
        },
        {
          text: "I have Painful gums,Gum swelling,Formation of ulcers on gums.",
          diseaseName: "Vincents Infection",
        },
      ],
    },
    {
      text: "Choose an option: Level 4 : 20",
      options: [
        {
          text: "I have Facial swelling,Ulceration of the gums,Foul-smelling.",
          diseaseName: "Noma",
        },
        {
          text: "I have Painful gums,Gum swelling,Formation of ulcers on gums.",
          diseaseName: "Vincents Infection",
        },
      ],
    },
  ];

  const handleAnswer = (selectedOption) => {
    setAnswers({ ...answers, [currentQuestion]: selectedOption });

    const currentQuestionObj = questions[currentQuestion];
    const selectedOptionObj = currentQuestionObj.options.find(
      (option) => option.text === selectedOption
    );

    if (selectedOptionObj?.diseaseName) {
      // If the selected option has a diseaseName, set it as the final result and end the questionnaire
      setFinalResult(selectedOptionObj.diseaseName);
      setCurrentQuestion(questions.length); // Move to the end to show results
    } else if (selectedOptionObj?.nextQuestion !== undefined) {
      // Otherwise, if there's a nextQuestion, navigate to it
      setCurrentQuestion(selectedOptionObj.nextQuestion);
    } else {
      // If no nextQuestion or diseaseName, end the questionnaire
      setCurrentQuestion(questions.length);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-smoke-light flex backdrop-blur-md duration-75">
      <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg h-4/5 overflow-y-scroll no-scrollbar">
        <div className="flex justify-between items-center pb-3">
          <p className="text-3xl font-bold text-teal-600">DISEASE PREDICTOR</p>
          <div className="cursor-pointer z-50" onClick={closeModal}>
            <svg
              className="fill-current text-black"
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
          <div>
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
          </div>
        ) : finalResult ? (
          <div>
            <p className="text-lg m-auto">
              Based on your answers, the possible condition could be:{" "}
              <strong>{finalResult}</strong>
            </p>
            <button
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            <p>Quiz completed! Here are your answers:</p>
            <ul className="list-none">
              {Object.entries(answers).map(([questionIndex, answer], index) => (
                <li key={index} className="mt-2">
                  Question {parseInt(questionIndex) + 1}: {answer}
                </li>
              ))}
            </ul>
            <button
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Akinator;
