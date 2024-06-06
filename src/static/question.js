const questions = [
  {
    text: "Choose an option: Level 1 : 0",
    options: [
      { text: "I have Skin related issue.", nextQuestion: 88 },
      { text: "I have Teeth related issue.", nextQuestion: 2 },
      { text: "I have Scalp related issue.", nextQuestion: 21 },
      { text: "I have Nail related issue.", nextQuestion: 68 },
      { text: "I have Eye related issue.", nextQuestion: 36 },
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
      { text: "I have sharp Pain in my teeth", nextQuestion: 9 },
      { text: "I have throbbing Pain in my teeth.", nextQuestion: 10 },
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
        text: "I have sensitivity to hot or cold foods/beverages and visible holes or pits in the teeth ",
        diseaseName: "Lingual Caries",
      },
      {
        text: "I have severe toothach and sensitivity to hot and cold food.",
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
        text: "I have persistent foul odor from the mouth.",
        diseaseName: "Halitosis",
      },
      {
        text: "I have white patches on the gums or inside the mouth.",
        diseaseName: "Keratosis",
      },
      {
        text: "I have white patches or plaques on the gums, tongue, or inside of the cheeks.",
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
        text: "I have white patches in the mouth, soreness, and discomfort.",
        diseaseName: "Oral Infections",
      },
      {
        text: "I have dry eyes,Difficulty swallowing or speaking due to dryness.",
        diseaseName: "Sjogren_s Syndrome",
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
        text: "I have white patches in the mouth, soreness, and discomfort.",
        diseaseName: "Oral Infections",
      },
      {
        text: "I have dry eyes,Difficulty swallowing or speaking due to dryness.",
        diseaseName: "Sjogren_s Syndrome",
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
        text: "I have white spots on my teeths.",
        diseaseName: "Fluorosis",
      },
      {
        text: "I have pink or red spots on my teeths.",
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
        text: "I have crooked or misaligned front teeth, difficulty biting or chewing.",
        diseaseName: "Incisor Malocclusion",
      },
      {
        text: "I have abnormally small teeth,Gaps between teeth,Aesthetically displeasing smile.",
        diseaseName: "Microdontia",
      },
      {
        text: "I have extra teeth in the mouth,Crowding or misalignment of teeth",
        diseaseName: "Supernumerary Teeth",
      },
    ],
  },
  {
    text: "Choose an option: Level 4 : 18 ",
    options: [
      {
        text: "I have bad breath, gum inflammation and bleeding,Receding gums or pockets forming between teeth and gums.",
        diseaseName: "Pyorrhea",
      },
      {
        text: "I have swollen gums, bleeding gums.",
        diseaseName: "Inflammatory Gingival Hyperplasia",
      },
    ],
  },
  {
    text: "Choose an option: 19",
    options: [
      {
        text: "I have severe gum pain, bleeding gums, formation of ulcers on the gums.",
        diseaseName: "Necrotizing Periodontal",
      },
      {
        text: "I have painful gums, gum swelling, formation of ulcers on gums.",
        diseaseName: "Vincents Infection",
      },
    ],
  },
  {
    text: "Choose an option: Level 4 : 20",
    options: [
      {
        text: "I have facial swelling, ulceration of the gums, foul-smelling.",
        diseaseName: "Noma",
      },
      {
        text: "I have painful gums, gum swelling, formation of ulcers on gums.",
        diseaseName: "Vincents Infection",
      },
    ],
  },
  {
    text: "Choose an option: Level 2 : 21",
    options: [
      { text: "I have hair loss related issue.", nextQuestion: 22 },
      { text: "I have pain in scalp.", nextQuestion: 28 },
      { text: "I have itching and burning related issue.", nextQuestion: 33 },
    ],
  },
  {
    text: "Choose an option: Level 2 : 22",
    options: [
      { text: "I have flaky itchy scalp.", nextQuestion: 23 },
      { text: "I have scaly patches.", nextQuestion: 24 },
      { text: "I have hair loss related issue.", nextQuestion: 25 },
      { text: "I have alopecia related issue.", nextQuestion: 26 },
      { text: "I have inflammation of hair follicles.", nextQuestion: 27 },
    ],
  },
  {
    text: "Choose an option: Level 4 : 23",
    options: [
      {
        text: "I have skin flakes on scalp, eye brow, shoulder.",
        diseaseName: "Dandruff",
      },
      {
        text: "I have excessive scalp scaling, thick adherent silver-white plaques.",
        diseaseName: "Pityriasis Amiantacea",
      },
      {
        text: "I have red-or skin-colored welts",
        diseaseName: "Scalp Hives",
      },
      {
        text: "I have flaky scalp, redness, and stubborn dandruff.",
        diseaseName: "Seborrheic Dermatitis",
      },
      {
        text: "I have scales that flake off when they are scratched.",
        diseaseName: "Eczematous Dermatitis",
      },
    ],
  },
  {
    text: "Choose an option: Level 4 : 24",
    options: [
      {
        text: "I have persistent red patches covered with silvery scales.",
        diseaseName: "Scalp Psoriasis",
      },
      {
        text: "I have hairless plaque on the scalp or face.",
        diseaseName: "Nevus Sebaceus of Jadassohn",
      },
      {
        text: "I have fungal infection on the face, presents with red, scaly patches.",
        diseaseName: "Tinea Faciei",
      },
    ],
  },
  {
    text: "Choose an option: Level 4 : 25",
    options: [
      {
        text: "I have circular, scaly patches on the scalp.",
        diseaseName: "Tinea Capitis",
      },
      {
        text: "I have scalp bumps, crusty sores and persistent redness.",
        diseaseName: "Folliculitis Decalvans",
      },
      {
        text: "I have scaling, and inflammation in sweat glands.",
        diseaseName: "Follicular Degeneration Syndrome",
      },
      {
        text: "I have excessive hair shedding, irregular periods.",
        diseaseName: "Polycystic Ovary Syndrome",
      },
      {
        text: "I have inflammatory scalp condition causing painful nodules.",
        diseaseName: "Dissecting Cellulitis",
      },
      {
        text: "I have scarring hair loss with smooth, white patches.",
        diseaseName: "Psuedopelade of brocq",
      },
      {
        text: "I have progressive hair loss starting from the center of the scalp.",
        diseaseName: "Centrifugal Cicatricial Alopecia",
      },
    ],
  },
  {
    text: "Choose an option: Level 4 : 26",
    options: [
      {
        text: "I have complete loss of body hair, including scalp, eyebrows, and eyelashes.",
        diseaseName: "Alopecia Universalis",
      },
      {
        text: "I have gradual hair loss starting at the crown.",
        diseaseName: "Central Centrifugal Cicatricial Alopecia",
      },
      {
        text: "I have patchy hair loss characterized by round bald spots.",
        diseaseName: "Alopecia Areata",
      },
      {
        text: "I have progressive hair loss with scarring on the scalp.",
        diseaseName: "Idiopathic Scarring Alopecia",
      },
      {
        text: "I have hair loss, scalp redness, and thinning.",
        diseaseName: "Radiation-induced Alopecia",
      },
      {
        text: "I have progressive hairline recession and eyebrow loss.",
        diseaseName: "Frontal Fibrosing Alopecia",
      },
      {
        text: "I have patchy hair loss in a triangular pattern on the scalp.",
        diseaseName: "Temporal Triangular Alopecia",
      },
      {
        text: "I have hair loss with a distinctive moth-eaten pattern.",
        diseaseName: "Syphilitic Alopecia",
      },
    ],
  },
  {
    text: "Choose an option: 27",
    options: [
      {
        text: "I have red bumps, itching, and hair loss.",
        diseaseName: "Folliculitis",
      },
      {
        text: "I have red bumps on the scalp with small, pus-filled sores.",
        diseaseName: "Folliculitis Necrotica",
      },
      {
        text: "I have pustules and hair loss on the scalp.",
        diseaseName: "Traction Folliculitis Decalvans",
      },
      {
        text: "I have scaly patches and hair loss with red or purple bumps on the scalp.",
        diseaseName: "Lichen Planopilaris",
      },
      {
        text: "I have pimple-like bumps on the back of the head.",
        diseaseName: "Scalp Folliculitis Keloidalis",
      },
      {
        text: "I have painful bumps on the back the neck with thick, raised Scars.",
        diseaseName: "Acne Keloidalis Nuchae",
      },
    ],
  },
  {
    text: "Choose an option: Level 2 : 28",
    options: [
      { text: "I have color changing or staining issues.", nextQuestion: 29 },
      {
        text: "I have nodule, lumps or cyst related issue.",
        nextQuestion: 30,
      },
      { text: "I have cosmetic concerns.", nextQuestion: 31 },
      { text: "I have infection on scalp.", nextQuestion: 32 },
    ],
  },
  {
    text: "Choose an option: Level 4 : 29",
    options: [
      {
        text: "I have irregular moles, changes in color, itching, bleeding:.",
        diseaseName: "Scalp Melanoma",
      },
      {
        text: "I have colored sweat, abnormal pigmentation, odor.",
        diseaseName: "Chromhidrosis",
      },
      {
        text: "I have facial skin indentation, linear atrophy, hair loss.",
        diseaseName: "Linear Scleroderma",
      },
    ],
  },
  {
    text: "Choose an option: Level 4 : 30",
    options: [
      {
        text: "I have facial rash, itching, pustules, redness.",
        diseaseName: "Tinea Barbae",
      },
      {
        text: "I have scalp thickening, furrows, ridges.",
        diseaseName: "Cutis Verticis Gyrata",
      },
      {
        text: "I have hairless, yellow-orange plaque on scalp.",
        diseaseName: "Nevus Sebaceus",
      },
      {
        text: "I have scalp boils, painful lumps, recurring abscesses.",
        diseaseName: "Hidradenitis Suppurativa",
      },
      {
        text: "I have scalp bump, firm to touch, slow growth.",
        diseaseName: "Leiomyoma Cutis",
      },
      {
        text: "I have small, painless, mobile lumps on the skin.",
        diseaseName: "Pilar Cysts",
      },
      {
        text: "I have missing skin at birth, shallow ulcers, scalp defects.",
        diseaseName: "Aplasia Cutis Congenita",
      },
      {
        text: "I have painless lump on scalp, may contain hair, skin, or teeth fragments.",
        diseaseName: "Dermoid Cyst",
      },
    ],
  },
  {
    text: "Choose an option: Level 4 : 31",
    options: [
      {
        text: "I have itchy scalp, painful lumps, yellow discharge.",
        diseaseName: "Scalp Actinomycosis",
      },
      {
        text: "I have pore-clogging hair condition, tiny dark bumps on skin.",
        diseaseName: "Trichostasis Spínulosa",
      },
      {
        text: "I have scalp growth, fatty tissue, benign, small, soft, painless.",
        diseaseName: "Nevus Lipomatosus Cutaneous Superficialis",
      },
      {
        text: "I have excessive skin projection, rigid texture.",
        diseaseName: "Cutaneous Horns",
      },
      {
        text: "I have multiple hair follicles emerge from a single pore.",
        diseaseName: "Pili Multigemini",
      },
      {
        text: "I have scalp patchiness, hair loss, atrophy.",
        diseaseName: "Pseudopelade of Civatte",
      },
      {
        text: "I have localized hair discoloration (white or gray) lacks of pigmentation.",
        diseaseName: "Poliosis",
      },
    ],
  },
  {
    text: "Choose an option: Level 4 : 32",
    options: [
      {
        text: "I have itchy scalp with small, tiny white eggs attached to hair shafts.",
        diseaseName: "Pediculosis Capitis",
      },
      {
        text: "I have itchy skin, red bumps, and small crawling sensations.",
        diseaseName: "Parasitic Infestations",
      },
    ],
  },
  {
    text: "Choose an option: Level 2 : 33",
    options: [
      { text: "I have itching and burning sensation..", nextQuestion: 34 },
      { text: "I have dry scalp and lack of moisture.", nextQuestion: 35 },
    ],
  },
  {
    text: "Choose an option: Level 4 : 34",
    options: [
      {
        text: "I have hair loss, itching, and raised plaques on the scalp.",
        diseaseName: "Scalp Amyloidosis",
      },
      {
        text: "I have persistent scalp pain, swelling, and recurring abscesses.",
        diseaseName: "Dissecting Cellulitis",
      },
      {
        text: "I have persistent scalp discomfort, itching, or burning sensation.",
        diseaseName: "Scalp Dysesthesia",
      },
      {
        text: "I have inflammatory scalp condition with painful, recurring boils and abscesses.",
        diseaseName: "Dissecting Cellulitis",
      },
    ],
  },
  {
    text: "Choose an option: Level 4 : 35",
    options: [
      {
        text: "I have itchy, inflamed scalp with red patches and flakes.",
        diseaseName: "Scalp Eczematous Dermatitis",
      },
      {
        text: "I have hair loss, red or purple follicular bumps, and scarring.",
        diseaseName: "Lichen Planopilaris",
      },
    ],
  },
  {
    text: "Choose an option: Level 2 : 36",
    options: [
      { text: "I have vision related issue.", nextQuestion: 37 },
      { text: "I have discomfort or pain in eye.", nextQuestion: 42 },
      { text: "I have changes in appearence in eye.", nextQuestion: 47 },
      { text: "I have inflammation in eye.", nextQuestion: 52 },
      { text: "I have functional issue in eye.", nextQuestion: 57 },
      { text: "I have abnormal growth in eye.", nextQuestion: 63 },
    ],
  },
  {
    text: "Choose an option: Level 2 : 37",
    options: [
      { text: "I have difficulty in focusing.", nextQuestion: 38 },
      { text: "I have sudden changes in vision.", nextQuestion: 39 },
      { text: "I have partial vision loss.", nextQuestion: 40 },
      { text: "I have complete vision loss.", nextQuestion: 41 },
    ],
  },
  {
    text: "Choose an option: 38",
    options: [
      {
        text: "I have blurred vision, eye strain, headaches, difficulty focusing on close objects.",
        diseaseName: "Hyperopia",
      },
      {
        text: "I have blurred vision, eye strain, squinting, headaches, difficulty seeing distant objects.",
        diseaseName: "Myopia",
      },
      {
        text: "I have blurred near vision, eye strain, difficulty focusing, needing brighter light for reading.",
        diseaseName: "Presbyopia",
      },
      {
        text: "I have blurry vision, eyestrain, headaches, distorted images, difficulty driving or reading, light sensitivity.",
        diseaseName: "Astigmatism",
      },
      {
        text: "I have blurred vision, difficulty reading, color vision changes, eye pain, seeing flashing lights.",
        diseaseName: "Ocular Chloroquine",
      },
      {
        text: "I have blurred central vision, difficulty seeing fine details, distorted lines, dimness.",
        diseaseName: "Dry AMD",
      },
      {
        text: "I have blurred vision, dry eyes, nausea, vomiting, dizziness, headaches, bone pain near the eyes.",
        diseaseName: "Ocular Hypervitaminosis A",
      },
    ],
  },
  {
    text: "Choose an option: 39",
    options: [
      {
        text: "I have Reduced vision, poor depth perception, squinting, headaches, eye strain.",
        diseaseName: "Amblyopia",
      },
      {
        text: "I have Sudden Vision distortion, straight lines appearing wavy, blind spots.",
        diseaseName: "Wet AMD",
      },
      {
        text: "I have vision blur, floaters, difficulty seeing at night, dark spots, color changes.",
        diseaseName: "Non-Proliferative Diabetic Retinopathy",
      },
      {
        text: "I have blurred vision, distorted images, dark spots, difficulty reading, diabetic condition.",
        diseaseName: "Diabetic Macular Edema",
      },
      {
        text: "I have sudden Vision changes, flashes of light, sudden floaters, curtain-like shadow, reduced peripheral vision.",
        diseaseName: "Rhegmatogenous Retinal Detachment",
      },
      {
        text: "I have sudden Vision Changes, eye pain, color desaturation, impaired vision, flashing lights, blind spot..",
        diseaseName: "Optic Neuritis",
      },
    ],
  },
  {
    text: "Choose an option: 40",
    options: [
      {
        text: "I have vision loss, headaches, confusion, dizziness, fatigue, nausea, weakness.",
        diseaseName: "Ocular Hypoperfusion Syndrome",
      },
      {
        text: "I have vision loss, seizures, vomiting, lethargy, behavioral changes, confusion, headaches.",
        diseaseName: "Ocular Ornithine Transcarbamylase Deficiency",
      },
      {
        text: "I have vision loss, floaters, blurred vision, dark areas, impaired color vision, vision fluctuations.",
        diseaseName: "Proliferative Diabetic Retinpathy",
      },
      {
        text: "I have sudden vision loss, painles.",
        diseaseName: "Retinal Artery Occlusion",
      },
    ],
  },
  {
    text: "Choose an option: 41",
    options: [
      {
        text: "I have complete Vision Loss, eye pain, redness, swelling, blurred vision, discharge.",
        diseaseName: "Ocular Terbinafine",
      },
      {
        text: "I have complete Vision changes, eye pain, redness, blurred vision, swelling, sensitivity.",
        diseaseName: "Ocular Imatinib",
      },
      {
        text: "I have Complete Vision loss, blurred vision, distorted images, peripheral vision problems.",
        diseaseName: "Retinoschisis",
      },
    ],
  },
  {
    text: "Choose an option: Level 2 : 42",
    options: [
      { text: "I have sharp pain in eye.", nextQuestion: 43 },
      { text: "I have throbbing pain in eye.", nextQuestion: 44 },
      { text: "I have foreign body sensation in eye.", nextQuestion: 45 },
      { text: "I have burning sensation in eye.", nextQuestion: 46 },
    ],
  },
  {
    text: "Choose an option: 43",
    options: [
      {
        text: "I have Eye pain, blurred vision, headaches, nausea, halos, redness, decreased vision clarity.",
        diseaseName: "Ocular Hypertension",
      },
      {
        text: "I have Sharp Pain, Dry eyes, poor tear production, sensitivity to light, blurred vision, discomfort.",
        diseaseName: "Ocular Alacrima",
      },
      {
        text: "I have sharp Eye pain, Vision loss, redness, reduced pupil size, blurred vision, floaters.",
        diseaseName: "Ocular Ischemic Syndrome",
      },
    ],
  },
  {
    text: "Choose an option: 44",
    options: [
      {
        text: "I have throbbing Pain, Burning sensation, redness, blurred vision, sensitivity to light, gritty feeling.",
        diseaseName: "Non-Sjögren's Dry Eye",
      },
      {
        text: "I have blurred vision, Throbbing pain, redness, tearing. sensitivity to light, headaches, nausea.",
        diseaseName: "Ocular Toxin",
      },
    ],
  },
  {
    text: "Choose an option: 45",
    options: [
      {
        text: "I have eye pain, redness, watering, sensitivity to light, blurred hion, foreign body sensation.",
        diseaseName: "Corneal Abrasion",
      },
      {
        text: "I have dry eyes, Dry mouth, Sensation of grittiness or foreign body in the eyes.",
        diseaseName: "Sjögren's Syndrome",
      },
    ],
  },
  {
    text: "Choose an option: 46",
    options: [
      {
        text: "I have stinging or burning sensation, excessive tearing, redness, blurry vision, discomfort.",
        diseaseName: "Evaporative Dry Eye",
      },
      {
        text: "I have discomfort, burning sensation, stinging, gritty feeling. fluctuating vision, excessive tearing.",
        diseaseName: "Aqueous-deficient Dry Eye",
      },
      {
        text: "I have redness, dryness, burning, itching, sensitivity to light, blurred vision, tearing.",
        diseaseName: "Ocular Rosacea",
      },
    ],
  },
  {
    text: "Choose an option: Level 2 : 47",
    options: [
      { text: "I have bloodshed eyes.", nextQuestion: 48 },
      { text: "I have eyelid swelling.", nextQuestion: 49 },
      { text: "I have bulging eye.", nextQuestion: 50 },
      { text: "I have changes in skin appearance.", nextQuestion: 51 },
    ],
  },
  {
    text: "Choose an option: Bloodshed eyes 48",
    options: [
      {
        text: "I have blood in eye, Vision changes, eye pain, swelling, bruising. tearing.",
        diseaseName: "Ocular Trauma",
      },
      {
        text: "I have eye redness, mild discomfort, tearing, inflammation, tenderness, no vision changes.",
        diseaseName: "Episcleritis",
      },
      {
        text: "I have redness, itching, discharge, blurred vision, sensitivity to light, eye pain.",
        diseaseName: "Ocular Fungal Infections",
      },
      {
        text: "I have blackened or bloody discharge, blurred vision, facial swelling, fever, headache.",
        diseaseName: "Ocular Mucormycosis",
      },
    ],
  },
  {
    text: "Choose an option: Eyelid swelling 49",
    options: [
      {
        text: "I have eyelid redness & Swelling, itching, burning sensation, crusty eyelashes.",
        diseaseName: "Blepharitis",
      },
      {
        text: "I have drooping eyelid, reduced eye movement, blurred vision, difficulty closing eye.",
        diseaseName: "Ptosis",
      },
      {
        text: "I have eyelid lump, swelling, tenderness, redness, blurred vision, discomfort, discharge, irritation.",
        diseaseName: "Chalazion",
      },
      {
        text: "I have eyelid swelling, discomfort, redness, vision changes, migratory worm visible, inflammation, pain.",
        diseaseName: "Ocular Dirofilariasis",
      },
      {
        text: "I have hair loss around Eyes, scarring of eyelids, vision loss.",
        diseaseName: "Ocular Cicatricial Alopecia",
      },
    ],
  },
  {
    text: "Choose an option: bulging eyes 50",
    options: [
      {
        text: "I have bulging eyes, blurred vision, headaches, nausea, vomiting, vision changes.",
        diseaseName: "Papilledema",
      },
      {
        text: "I have white pupil, crossed eyes, eye pain, redness, vision changes, bulging eye, swelling.",
        diseaseName: "Retinoblastoma",
      },
    ],
  },
  {
    text: "Choose an option: bulging eyes 51",
    options: [
      {
        text: "I have eye pain, redness, blurred vision, discharge, tearing.",
        diseaseName: "Fungal Keratitis",
      },
      {
        text: "I have loss of central vision, difficulty reading, color perception changes, light sensitivity.",
        diseaseName: "Stargardt Disease",
      },
      {
        text: "I have distorted vision, blind spots, decreased visual ability.",
        diseaseName: "Angioid Streaks",
      },
      {
        text: "I have vision changes, dry eyes, floaters, double vision, eye redness, pain.",
        diseaseName: "Ocular Amyloidosis",
      },
      {
        text: "I have yellowing of eyes, pale stools, dark urine, fatigue, abdominal pain.",
        diseaseName: "Ocular Icterus",
      },
      {
        text: "I have pale skin, light-sensitive eyes, reduced vision.",
        diseaseName: "Ocular Cutaneous Albinism",
      },
      {
        text: "I have darkened sclera, cloudy cornea, eye inflammation, reduced vision, discomfort.",
        diseaseName: "Ocular Alkaptonuria",
      },
      {
        text: "I have eyelid drooping, loss of eyelashes, blurred vision.",
        diseaseName: "Ocular Leprosy",
      },
    ],
  },
  {
    text: "Choose an option: Level 2 : 52",
    options: [
      { text: "I have itching in my eyes.", nextQuestion: 53 },
      { text: "I have discharge from eyes.", nextQuestion: 54 },
      { text: "I have vision disturbance.", nextQuestion: 55 },
      { text: "I have discomfort in eye.", nextQuestion: 56 },
    ],
  },
  {
    text: "Choose an option: 53",
    options: [
      {
        text: "I have eye redness, itchiness, tearing, discharge, gritty feeling, light sensitivity, swollen eyelids.",
        diseaseName: "Viral Conjunctivitis",
      },
      {
        text: "I have itchy, watery eyes, redness, swelling, sensitivity to light gritty sensation.",
        diseaseName: "Allergic Conjunctivitis",
      },
      {
        text: "I have Vision loss, eye pain, itchiness, redness, floaters, tearing, blurred vision, inflammation.",
        diseaseName: "Ocular Tuberculosis",
      },
      {
        text: "I have vision loss, itching, eye inflammation, blurred vision, redness, floaters, light sensitivity, headaches.",
        diseaseName: "Ocular Syphilis",
      },
      {
        text: "I have persistent redness, itching, burning sensation, vision changes, discomfort, irritation.",
        diseaseName: "Ocular Cicatricial Conjuntivitis",
      },
      {
        text: "I have eye pain, redness, blurred vision, itching, tearing. sensitivity to light, discomfort.",
        diseaseName: "Ocular Pemphigus",
      },
      {
        text: "I have eye pain, redness, rash, blisters, fever, flu-like symptoms. mucous membrane involvement.",
        diseaseName: "Ocular Sulfonamide-Induced Stevens-Johnson Syndrome",
      },
    ],
  },
  {
    text: "Choose an option: 54",
    options: [
      {
        text: "I have eye redness, discharge, itching, tearing, sensitivity to light, blurred vision.",
        diseaseName: "Bacterial Conjunctivitis",
      },
      {
        text: "I have eye redness, blurred vision, pain, discharge, light sensitivity.",
        diseaseName: "Bacterial Keratitis",
      },
    ],
  },
  {
    text: "Choose an option: 55",
    options: [
      {
        text: "I have eye pain, redness, blurred vision, headaches, nasal congestion, fatigue, weight loss.",
        diseaseName: "Ocular Churg-Strauss Syndrome",
      },
      {
        text: "I have eye pain, redness, blurred vision, sensitivity to light, foreign body sensation.",
        diseaseName: "Ocular Acanthamoeba Keratitis",
      },
      {
        text: "I have vision loss, eye pain, redness, sensitivity to light, inflammation.",
        diseaseName: "Ocular Sympathetic Ophthalmia",
      },
    ],
  },
  {
    text: "Choose an option: 56",
    options: [
      {
        text: "I have eye pain, redness, blurred vision, sensitivity to light, inflammation.",
        diseaseName: "Peripheral Ulcerative Keratitis",
      },
      {
        text: "I have blurred vision, eye pain, redness, sensitivity to light, inflammation.",
        diseaseName: "Toxic Keratopathy",
      },
      {
        text: "I have eye pain, blurred vision, redness, sensitivity to light, floaters, inflammation, decreased vision.",
        diseaseName: "Ocular Sarcoidosis",
      },
      {
        text: "I have eye inflammation, blurred vision, vision loss, eye pain, double vision, headaches.",
        diseaseName: "Ocular Whipple's Disease",
      },
      {
        text: "I have eye pain, redness, blurred vision,foreign body sensation, discomfort, inflammation.",
        diseaseName: "Ocular Rosenthal Syndrome",
      },
    ],
  },
  {
    text: "Choose an option: Level 2 : 57",
    options: [
      { text: "I have light sensitivity.", nextQuestion: 58 },
      { text: "I have double vision.", nextQuestion: 59 },
      { text: "I have night blindness.", nextQuestion: 60 },
      { text: "I have difficulty in seeing colors.", nextQuestion: 61 },
      { text: "I have abnormal movement in eyes.", nextQuestion: 62 },
    ],
  },
  {
    text: "Choose an option: 58",
    options: [
      {
        text: "I have dry eyes, blurred vision, light sensitivity, eye redness, foreign body sensation.",
        diseaseName: "Ocular Churg-Strauss Syndrome",
      },
      {
        text: "I have blurred vision, glare, halos, eye discomfort, decreased vision, photophobia.",
        diseaseName: "Fuch's Dystrophy",
      },
      {
        text: "I have blurred vision, distorted sight, sensitivity to light, halos.",
        diseaseName: "Keratoconus",
      },
      {
        text: "I have eye pain, redness, blurred vision, discharge, sensitivity to light, discomfort.",
        diseaseName: "Corneal Ulcer",
      },
      {
        text: "I have eye pain, redness, blurred vision, discharge, sensitivity to light, discomfort.",
        diseaseName: "Corneal Ulcer",
      },
      {
        text: "I have decreased vision, light sensitivity, blurry vision.",
        diseaseName: "Aniridia",
      },
      {
        text: "I have eye pain, redness, blurred vision, sensitivity to light,  headaches.",
        diseaseName: "Iritis",
      },
      {
        text: "I have blurry vision, eye discomfort, headache, nausea, visual disturbances.",
        diseaseName: "Ocular Hypotony",
      },
      {
        text: "I have photophobia, blurred vision, eye pain, excessive tearing, white crystal deposits.",
        diseaseName: "Ocular Cystinosis",
      },
      {
        text: "I have eye pain, blurred vision, redness, swelling, bruising, sensitivity to light.",
        diseaseName: "Ocular Contusion",
      },
    ],
  },
  {
    text: "Choose an option: 59",
    options: [
      {
        text: "I have misaligned eyes, double vision, eye strain, trouble focusing, depth perception issues.",
        diseaseName: "Strabismus",
      },
      {
        text: "I have drooping eyelid, double vision, difficulty moving eye, pupil abnormalities, headaches.",
        diseaseName: "Ocular Motor Nerve Palsies",
      },
      {
        text: "I have drooping eyelids, double vision, difficulty swallowing. weakness in eye muscles.",
        diseaseName: "Ocular Myasthenia Gravis",
      },
    ],
  },
  {
    text: "Choose an option: 60",
    options: [
      {
        text: "I have night blindness, tunnel vision, decreased peripheral vision, difficulty with color perception.",
        diseaseName: "Retinitis Pigmentosa",
      },
      {
        text: "I have night blindness, crystalline deposits in cornea, decreased visual acuity, peripheral vision loss.",
        diseaseName: "Bietti's Crystalline Dystrophy",
      },
    ],
  },
  {
    text: "Choose an option: 61",
    options: [
      {
        text: "I have difficulty distinguishing certain colors, confusion with similar hues, limited color perception.",
        diseaseName: "Color Blindness",
      },
      {
        text: "I have central vision loss, distorted vision, difficulty reading. colors appear washed out..",
        diseaseName: "Cystoid Macular Edema",
      },
    ],
  },
  {
    text: "Choose an option: 62",
    options: [
      {
        text: "I have involuntary horizontal eye movements, jerking in the eyes, impaired vision, dizziness.",
        diseaseName: "Horizontal Nystagmus",
      },
      {
        text: "I have rapid involuntary eye movements, vertigo, nausea, difficulty focusing, imbalance, dizziness.",
        diseaseName: "Vertical Nystagmus",
      },
      {
        text: "I have involuntary eye movements, jerky vision, dizziness, nausea, difficulty focusing, imbalance.",
        diseaseName: "Rotary Nystagmus",
      },
      {
        text: "I have unsteady eye movements, difficulty focusing, blurry vision, impaired depth perception, dizziness.",
        diseaseName: "Ocular Ataxia",
      },
      {
        text: "I have vision loss, bird-like movements, seizures, confusion, vomiting, coma risk, behavioral changes.",
        diseaseName: "Ocular Albinism",
      },
      {
        text: "I have wide-set eyes, broad nasal bridge, separated by abnormal distance between eye.",
        diseaseName: "Ocular Hypertelorism",
      },
    ],
  },
  {
    text: "Choose an option: Level 2 : 63",
    options: [
      { text: "I have bad vision and light sensitivity.", nextQuestion: 64 },
      { text: "I have pain and vision loss.", nextQuestion: 65 },
      { text: "I have floaters related issue.", nextQuestion: 66 },
      { text: "I have tumors related issue.", nextQuestion: 67 },
    ],
  },
  {
    text: "Choose an option: 64",
    options: [
      {
        text: "I have Cloudy vision, difficulty seeing at night, faded colors, increased glare sensitivity..",
        diseaseName: "Nuclear Cataracts",
      },
      {
        text: "I have eye redness, irritation, blurred vision, dryness, discomfort.",
        diseaseName: "Pterygium",
      },
      {
        text: "I have cloudy vision, difficulty seeing in bright light, glare sensitivity, color changes..",
        diseaseName: "Cortical Cataract",
      },
      {
        text: "I have blurry vision, difficulty reading, glare, decreased color perception, nearsightedness progression.",
        diseaseName: "Posterior Subcapsular Cataract",
      },
      {
        text: "I have Vision changes, glare, halos, photosensitivity, blurred vision, dry eyes.",
        diseaseName: "Ocular Amiodarone Toxicity",
      },
    ],
  },
  {
    text: "Choose an option: 65",
    options: [
      {
        text: "I have Gradual vision loss, tunnel vision, eye pain, halos, optic nerve damage.",
        diseaseName: "Open-Angle Glaucoma",
      },
      {
        text: "I have Vision blurring, halos, eye pain, pigment on cornea",
        diseaseName: "Ocular Pigment Dispersion Syndrome",
      },
      {
        text: "I have sudden eye pain, blurred vision, halos, nausea, vomiting, headache, redness, vision loss.",
        diseaseName: "Angle-Closure Glaucoma",
      },
    ],
  },
  {
    text: "Choose an option: 66",
    options: [
      {
        text: "I have eye discoloration, changes in vision, blurred vision, floaters, eye pain, swelling.",
        diseaseName: "Ocular Melanoma",
      },
      {
        text: "I have cherry-red spot on retina, seizures.",
        diseaseName: "Tay-Sachs Disease",
      },
      {
        text: "I have vision changes, blurred spots, eye discomfort, dark spots, impaired sight, abnormal vessels.",
        diseaseName: "Ocular Histoplasmosis Syndrome",
      },
      {
        text: "I have vision loss, distorted vision, blind spots, blurry vision, eye inflammation, photopsia.",
        diseaseName: "Macular Serpiginous Choroiditis",
      },
      {
        text: "I have blurry vision, floaters, flashes, sudden vision loss, darkening, reduced visual field.",
        diseaseName: "Vitreous Hemorrhage",
      },
      {
        text: "I have eye pain, vision loss, inflammation, redness, blurred vision, headache, fever, fatigue, weight los.",
        diseaseName: "Ocular Polyarteritis Nodosa",
      },
      {
        text: "I have eye pain, vision changes, floaters, redness, inflammation, blurred vision, photophobia, strabismus.",
        diseaseName: "Ocular Toxocariasis",
      },
      {
        text: "I have eye pain, blurred vision, redness, swelling, floaters, light sensitivity, decreased vision, double vision..",
        diseaseName: "Ocular Lymphoma",
      },
    ],
  },
  {
    text: "Choose an option: 67",
    options: [
      {
        text: "I have redness, irritation, blurred vision, foreign body sensation, excessive tearing, eye discomfort",
        diseaseName: "Conjunctival Tumor",
      },
      {
        text: "I have eye redness, irritation, blurred vision, tearing, sensitivity to light, eye surface scarring.",
        diseaseName: "Ocular Cicatricial Pemphigoid",
      },
      {
        text: "I have vision changes, eye tumors, pigmented spots, skeletal abnormalities, dental issues, soft tissue tumors.",
        diseaseName: "Ocular Cicatricial Pemphigoid",
      },
      {
        text: "I have vision changes, eye pain, bulging, redness, double vision, headaches, eyelid drooping, multiple eye tumors.",
        diseaseName: "Ocular Carcinoid Tumor",
      },
      {
        text: "I have Abnormal eye growth, vision changes, pain, redness, swelling, disfigurement, blindness risk, lump around eye.",
        diseaseName: "Ocular Teratoma",
      },
      {
        text: "I have Eye pain, vision changes, bulging, redness, swelling. blurred vision, tearing, discomfort, sensitivity, lumps.",
        diseaseName: "Ocular Mucoepidermoid Carcinoma",
      },
      {
        text: "I haveEye redness, blurred vision, floaters, decreased vision, visual disturbances, lumps around the eyes..",
        diseaseName: "Ocular Capillary Hemangioma",
      },
    ],
  },
  {
    text: "Choose an option: Level 2 : 68",
    options: [
      { text: "I have changes in nail appearance.", nextQuestion: 69 },
      { text: "I have discomfort or pain in nail.", nextQuestion: 73 },
      { text: "I have infection in nail.", nextQuestion: 76 },
      { text: "I have abnormal growth in nail.", nextQuestion: 79 },
      { text: "I have other nail disorder.", nextQuestion: 84 },
    ],
  },
  {
    text: "Choose an option: Level 2 : 69",
    options: [
      { text: "I have discoloration in nail.", nextQuestion: 70 },
      { text: "I have texture changes in nail.", nextQuestion: 71 },
      { text: "I have shape abnormalities in nail.", nextQuestion: 72 },
    ],
  },
  {
    text: "Choose an option: 70",
    options: [
      {
        text: "I have discoloration of nails (yellow color).",
        diseaseName: "Chromonychia",
      },
      {
        text: "I have triad of yellow lines nails",
        diseaseName: "Yellow Nail Syndrome",
      },
      {
        text: "I have white discoloration of nails.",
        diseaseName: "True leukonychia",
      },
      {
        text: "I have white spots on nails often due to trauma.",
        diseaseName: "Apparent leukonychia",
      },
      {
        text: "I have tiny white spots or dots on nails due to minor trauma.",
        diseaseName: "Punctate leukonychia",
      },
      {
        text: "I have horizontal white bands across the nails.",
        diseaseName: "Transverse leukonychia",
      },
      {
        text: "I have whitening of the nails.",
        diseaseName: "White nails",
      },
      {
        text: "I have nails that appear mostly white with a narrow band of pink at the tip.",
        diseaseName: "Terry's nails",
      },
      {
        text: "I have double white bands on nails.",
        diseaseName: "Muehrcke's nails",
      },
      {
        text: "I have dark pigmentation of the nail.",
        diseaseName: "Melanonychia",
      },
      {
        text: "I have brown or black longitudinal bands on the nail.",
        diseaseName: "Melanonychia striata",
      },
      {
        text: "I have dark streaks running lengthwise along the nail.",
        diseaseName: "Longitudinal Melanonychia",
      },
      {
        text: "I have dark pigmentation or a streak in the nail bed.",
        diseaseName: "Subungual melanoma",
      },
    ],
  },
  {
    text: "Choose an option: 71",
    options: [
      {
        text: "I have splitting or peeling of the nail plate layers.",
        diseaseName: "Onychoschizia",
      },
      {
        text: "I have ridges running lengthwise along the nail",
        diseaseName: "Longitudinal Grooves",
      },
      {
        text: "I have nails prone to breaking, splitting, or cracking easily.",
        diseaseName: "Brittle Nails",
      },
      {
        text: "I have brittle hair and nails.",
        diseaseName: "Trichothiodystrophy",
      },
      {
        text: "I have thinning, roughening, and discoloration of all 20 nails.",
        diseaseName: "Twenty-Nail Dystrophy",
      },
      {
        text: "I have wart-like papules and nail abnormalities.",
        diseaseName: "Darier Disease",
      },
      {
        text: "I have Thickening of the nails.",
        diseaseName: "Pachyonychia",
      },
      {
        text: "I have thickened nails and other skin abnormalities.",
        diseaseName: "Pachyonychia Congenita",
      },
      {
        text: "I have rough, sandpaper-like texture of the nail surface.",
        diseaseName: "Trachyonychia",
      },
      {
        text: "I have fragile skin and mucous membranes, leading to blistering.",
        diseaseName: "Epidermolysis Bullosa",
      },
      {
        text: "I have splitting and ridging of the nail in the midline",
        diseaseName: "Median Nail Dystrophy",
      },
      {
        text: "I have brittle nails prone to splitting and breaking, often due to external trauma.",
        diseaseName: "Onychorrhexis",
      },
    ],
  },
  {
    text: "Choose an option: 72",
    options: [
      {
        text: "I have enlargement of the fingertips and nails.",
        diseaseName: "Clubbing",
      },
      {
        text: "I have spoon-shaped nails,",
        diseaseName: "Koilonychia",
      },
      {
        text: "I have small depressions or indentations in the nail surface.",
        diseaseName: "Pitting",
      },
    ],
  },
  {
    text: "Choose an option: Level 2 : 73",
    options: [
      { text: "I have pain in nail.", nextQuestion: 74 },
      { text: "I have swelling around nail.", nextQuestion: 75 },
    ],
  },
  {
    text: "Choose an option: 74",
    options: [
      {
        text: "I have inflammatory reaction of the nail unit due to exposure to allergens",
        diseaseName: "Allergic Contact Dermatitis",
      },
      {
        text: "I have tumor arising from the glomus body,",
        diseaseName: "Glomus Tumor",
      },
      {
        text: "I have nail changes due to allergic responses, such as swelling or redness.",
        diseaseName: "Allergic Reactions",
      },
    ],
  },
  {
    text: "Choose an option: 75",
    options: [
      {
        text: "I have inflammatory condition of small blood vessels",
        diseaseName: "Pernio",
      },
      {
        text: "I have nail changes due to physical trauma, such as crushing or smashing,",
        diseaseName: "Traumatic Injury",
      },
    ],
  },
  {
    text: "Choose an option: Level 2 : 76",
    options: [
      { text: "I have fungual nail infection.", nextQuestion: 77 },
      { text: "I have bacterial nail infection.", nextQuestion: 78 },
    ],
  },
  {
    text: "Choose an option: 77",
    options: [
      {
        text: "I have infection of the nail, leading to discoloration, thickening, and brittleness",
        diseaseName: "Onychomycosis",
      },
      {
        text: "I have discoloration of the nail due to external factors, such as chemicals or dyes.",
        diseaseName: "Exogenous Nail Dyschromia",
      },
    ],
  },
  {
    text: "Choose an option: 78",
    options: [
      {
        text: "I have pustules and scaling on my nails.",
        diseaseName: "Parakeratosis Pustulosa",
      },
      {
        text: "I have inflammatory disorder affecting the fingers and toes, including the nails.",
        diseaseName: "Hallopeau",
      },
      {
        text: "I have pustules on the fingers, toes and nails.",
        diseaseName: "Hallopeau",
      },
      {
        text: "I have acute infection of the nail fold.",
        diseaseName: "Acute Paronychia",
      },
      {
        text: "I have inflammation of the nail fold.",
        diseaseName: "Paronychia",
      },
      {
        text: "I have long-standing inflammation of the nail fold.",
        diseaseName: "Chronic Paronychia",
      },
      {
        text: "I have skin affected around the nails.",
        diseaseName: "Candida Infections",
      },
    ],
  },
  {
    text: "Choose an option: Level 2 : 79",
    options: [
      { text: "I have nail growing issue.", nextQuestion: 80 },
      { text: "I have outgrowth of tissue.", nextQuestion: 81 },
      { text: "I have indentations across the nail.", nextQuestion: 82 },
      { text: "I have abnormal growth in nail..", nextQuestion: 83 },
    ],
  },
  {
    text: "Choose an option: 80",
    options: [
      {
        text: "I have Nail edge grew into surrounding skin, causing pain and inflammation.",
        diseaseName: "Ingrown Nai",
      },
      {
        text: "I have bone growth underneath the nail causing pain and deformity.",
        diseaseName: "Subungual Exostosis",
      },
    ],
  },
  {
    text: "Choose an option: 81",
    options: [
      {
        text: "I have overgrowth of tissue on the surface of the nail.",
        diseaseName: "Dorsal Pterygium",
      },
      {
        text: "I have overgrowth of tissue on the surface of the nail.",
        diseaseName: "Dorsal Pterygium",
      },
      {
        text: "I have Inflammatory skin condition affecting the nails.",
        diseaseName: "Lichen Planus",
      },
    ],
  },
  {
    text: "Choose an option: 82",
    options: [
      {
        text: "I have transverse depressions or ridges across the nail plate.",
        diseaseName: "Beau's Lines",
      },
      {
        text: "I have Abnormally large nails.",
        diseaseName: "Macronychia",
      },
      {
        text: "I have Abnormally short nails.",
        diseaseName: "Brachyonychia",
      },
      {
        text: "I have short, broad, and curved nails.",
        diseaseName: "Shrimp Nai",
      },
      {
        text: "I have  Absence of nails, either congenital or acquired.",
        diseaseName: "Anonychia",
      },
      {
        text: "I have abnormally small nails.",
        diseaseName: "Micronychia",
      },
      {
        text: "I have abnormal development of the nails of the index fingers.",
        diseaseName: "Congenital Onychodysplasia",
      },
      {
        text: "I have thickening of the nail, resulting in a claw-like appearance.",
        diseaseName: "Onychogryphosis",
      },
      {
        text: "I have excessive curvature of the lateral edges of the nail plate.",
        diseaseName: "Pincer Nail",
      },
      {
        text: "I have curvature of the nail plate resembling a hook or claw.",
        diseaseName: "Hook Nail",
      },
    ],
  },
  {
    text: "Choose an option: 83",
    options: [
      {
        text: "I have Abnormal alignment of the toenails, often causing pain or discomfort.",
        diseaseName: "Great Toenails",
      },
      {
        text: "I have red, friable nodule in the nail region.",
        diseaseName: "Pyogenic Granuloma",
      },
      {
        text: "I have  tumor arising from the nail matrix.",
        diseaseName: "Onychomatricoma",
      },
      {
        text: "I have  Cyst-like structure in the nail bed.",
        diseaseName: "Myxoid Pseudocyst",
      },
      {
        text: "I have  Cyst-like structure in the nail bed.",
        diseaseName: "Myxoid Pseudocyst",
      },
      {
        text: "I have growths affecting the nails, .",
        diseaseName: "Malignant Tumors",
      },
    ],
  },
  {
    text: "Choose an option: Level 2 : 84",
    options: [
      { text: "I have psoriasis of the nail.", nextQuestion: 85 },
      {
        text: "I have separation of the nail from nail bed.",
        nextQuestion: 86,
      },
      {
        text: "I have nail disorder due to risk activity.",
        nextQuestion: 87,
      },
    ],
  },
  {
    text: "Choose an option: 85",
    options: [
      {
        text: "I have inflammatory skin condition that commonly affects the nails, causing pitting, ridging, and discoloration.",
        diseaseName: "Psoriasis",
      },
      {
        text: "I have Dark bands or stripes on the nails, which can be benign or indicative of melanoma.",
        diseaseName: "Pigmented Bands",
      },
      {
        text: "I have Transverse white lines across the nails, often indicative of systemic illness or toxin exposure.",
        diseaseName: "Mees Lines",
      },
    ],
  },
  {
    text: "Choose an option: 86",
    options: [
      {
        text: "I have  Separation of the nail plate from the nail bed, often caused by trauma.",
        diseaseName: "Onycholysis",
      },
      {
        text: "I have shedding or loss of the entire nail plate usually due to severe systemic illness or drug reactions.",
        diseaseName: "Onychomadesis",
      },
      {
        text: "I have Shedding or loss of part of the nail plate",
        diseaseName: "Onychoptosis",
      },
    ],
  },
  {
    text: "Choose an option: 87",
    options: [
      {
        text: "I have nail deformity caused by repetitive trauma, often from habitual rubbing or picking.",
        diseaseName: "Habit Tic Deformity",
      },
      {
        text: "I have Nail biting habit, leading to damage and deformity of the nails.",
        diseaseName: "Onychophagia",
      },
      {
        text: "I have wasting away of the nails",
        diseaseName: "Onychatrophy",
      },
    ],
  },
  {
    text: "Choose an option: Level 2 : 88",
    options: [
      { text: "I have itching related issue in skin.", nextQuestion: 89 },
      { text: "I have pain on my skin.", nextQuestion: 98 },
      { text: "I have appearance change of my skin.", nextQuestion: 101 },
      { text: "I have ulcers related issue.", nextQuestion: 105 },
    ],
  },
  {
    text: "Choose an option: Level 2 : 89",
    options: [
      { text: "I have redness on my skin.", nextQuestion: 90 },
      { text: "I have rash on my skin.", nextQuestion: 93 },
    ],
  },
  {
    text: "Choose an option: Level 2 : 90",
    options: [
      { text: "I have inflammation on my skin.", nextQuestion: 91 },
      { text: "I have burning sensation on skin.", nextQuestion: 92 },
    ],
  },
  {
    text: "Choose an option: 91",
    options: [
      {
        text: "I have excessive growth of skin and enlarged facial Features.",
        diseaseName: "Acromegaly",
      },
      {
        text: "I have cold-Induced Inflammation and lesions on Extremities.",
        diseaseName: "Chilblains",
      },
      {
        text: "I have dilated blood vessels and frequent bleeding",
        diseaseName: "Angioectasias",
      },
      {
        text: "I have small, white spots.",
        diseaseName: "Idiopathic Guttate Hypomelanosis",
      },
      {
        text: "I have Net-Like Pattern on my skin.",
        diseaseName: "Livedo Reticularis",
      },
      {
        text: "I have dry skin, scaling, itching.",
        diseaseName: "Xerosis",
      },
      {
        text: "I have Ring-Shaped Lesion.",
        diseaseName: "Erythema Annulare Centrifugum",
      },
      {
        text: "I have lesions, Mucous Membrane secretion.",
        diseaseName: "Erythema Multiforme",
      },
      {
        text: "I have painful, red nodules on skin.",
        diseaseName: "Erythema Nodosum",
      },
      {
        text: "I have reddish-orange scaling, symmetrically distributed",
        diseaseName: "Pityriasis Rubra Pilaris",
      },
      {
        text: "I have Rash After Sun Exposure and Lesions",
        diseaseName: "Polymorphic Light Eruption",
      },
      {
        text: "I have rash After Sun Exposure, Itching",
        diseaseName: "Polymorphous Light Eruption",
      },
    ],
  },
  {
    text: "Choose an option: 92",
    options: [
      {
        text: "I have problem after Prolonged Exposure to Heat.",
        diseaseName: "Erythema Ab Igne",
      },
      {
        text: "I have Burning Pain, Increased Skin Temperature.",
        diseaseName: "Erythromelalgia",
      },
      {
        text: "I have Pink to Red Stretch Marks on skin",
        diseaseName: "Striae Rubrae",
      },
      {
        text: "I have Rough, Scaly Lesions.",
        diseaseName: "Solar Keratoses",
      },
      {
        text: "I have Central Red Lesion, Radiating Blood Vessels.",
        diseaseName: "Spider Naevus",
      },
      {
        text: "I have Flat, Brown Spots, Associated with Sun Exposure.",
        diseaseName: "Solar Lentigines",
      },
    ],
  },
  {
    text: "Choose an option: Level 2 : 93",
    options: [
      { text: "I have blister related issue..", nextQuestion: 94 },
      { text: "I have dryness of my skin.", nextQuestion: 95 },
      { text: "I have scaling related issue.", nextQuestion: 96 },
      { text: "I have swelling related issue.", nextQuestion: 97 },
    ],
  },
  {
    text: "Choose an option: 94",
    options: [
      {
        text: "I have Blister Formation, Itching and Burning Sensation.",
        diseaseName: "Adult Linear IgA Bullous Dermatosis",
      },
      {
        text: "I have Large Blisters,  Itching.",
        diseaseName: "Bullous Pemphigoid",
      },
      {
        text: "I have Itchy Rash on my skin.",
        diseaseName: "Cutaneous Larva Migrans",
      },
      {
        text: "I have Persistent and intense itching with symmetrically grouped skin lesions.",
        diseaseName: "Dermatitis Herpetiformis",
      },
      {
        text: "I have Symmetrically distributed reddish-brown papules on the skin.",
        diseaseName: "Gianotti-Crosti Syndrome",
      },
      {
        text: "I have Presence of painful erosions and ulcers in the oral cavity.",
        diseaseName: "Pemphigus Vulgaris",
      },
    ],
  },
  {
    text: "Choose an option: 95",
    options: [
      {
        text: "I have Painful, Central Ulceration, Tender Nodules on Ear.",
        diseaseName: "Adult Linear IgA Bullous Dermatosis",
      },
      {
        text: "I have warty Lesions with Dark Pigmentation .",
        diseaseName: "Chromoblastomycosis",
      },
      {
        text: "I have Increased Sensitivity, Flaky Skin with Itching.",
        diseaseName: "Xerosis",
      },
    ],
  },
  {
    text: "Choose an option: 96",
    options: [
      {
        text: "I have Tense fluid-filled blisters, mucosal involvement, itching.",
        diseaseName: "Adult Linear IgA Bullous Dermatosis",
      },
      {
        text: "I Small brownish blister, mild itching.",
        diseaseName: "Amyloidosis-Macular",
      },
      {
        text: "I have small papules, darkened pigmentation, itching, fungal infection manifestation..",
        diseaseName: "Cladosporiosis",
      },
      {
        text: "I have pigmented patches, fine scaling, fungal infection.",
        diseaseName: "Pityriasis Versicolor",
      },
      {
        text: "I have circular or oval-shaped  lesions, crusting and scaling, variable itching.",
        diseaseName: "Discoid Eczema",
      },
      {
        text: "I have scaling, alopecic patches, black dot ringworm, itching, fungal infection.",
        diseaseName: "Tinea Capitis",
      },
    ],
  },
  {
    text: "Choose an option: 97",
    options: [
      {
        text: "I have dark, velvety patches, Obesity.",
        diseaseName: "Acanthosis Nigricans",
      },
      {
        text: "I have Dark, raised, thickened lesions on my hands and feet.",
        diseaseName: "Acrokerato-elastoidosis",
      },
      {
        text: "I have Red papules or vesicles, Fungal infection between toes.",
        diseaseName: "Athlete's Foot (Tinea Pedis)",
      },
      {
        text: "I have fine scaling, pigmented patches, fungal infection..",
        diseaseName: "Pityriasis Versicolor",
      },
      {
        text: "I have circular or oval-shaped  lesions, crusting and scaling, variable itching.",
        diseaseName: "Discoid Eczema",
      },
      {
        text: "I have scaling, alopecic patches, black dot, itching, fungal infection.",
        diseaseName: "Tinea Capitis",
      },
    ],
  },
  {
    text: "Choose an option: Level 2 : 98",
    options: [
      { text: "I have discomfort in my skin.", nextQuestion: 99 },
      { text: "I have tenderness on my skin.", nextQuestion: 100 },
    ],
  },
  {
    text: "Choose an option: 99",
    options: [
      {
        text: "I have prickly heat with red papules in hot conditions, sweating.",
        diseaseName: "Heat Rash (Miliaria)",
      },
      {
        text: "I have burning pain, increased skin temperature.",
        diseaseName: "Erythromelalgia",
      },
      {
        text: "I have raised wheals, variable sizes, allergic reaction.",
        diseaseName: "Hives (Urticaria)",
      },
      {
        text: "I have Red, itchy bumps, variable rash patterns.",
        diseaseName: "Insect Bite Reactions",
      },
      {
        text: "I have Painful nodules on ear helix, single lesion.",
        diseaseName: "Chondrodermatitis Nodularis Helicis",
      },
      {
        text: "I have fungal infection, especially between toes, itchy, redness and scaling.",
        diseaseName: "Athlete's Foot (Tinea Pedis)",
      },
      {
        text: "I have fungal infection, especially between toes, itchy, redness and scaling.",
        diseaseName: "Athlete's Foot (Tinea Pedis)",
      },
      {
        text: "I have thick, silvery-white scales, joint pain, itching, nail changes.",
        diseaseName: "Psoriasis",
      },
    ],
  },
  {
    text: "Choose an option: 100",
    options: [
      {
        text: "I have Painful Nodules, Abscesses, and Scarring in Skin Folds.",
        diseaseName: "Hidradenitis Suppurativa",
      },
      {
        text: "I have Raised, Overgrown Scars with Continuous Growth.",
        diseaseName: "Keloids",
      },
      {
        text: "I have Superficial Blisters with Crusting and Scaling.",
        diseaseName: "Pemphigus Foliaceus ",
      },
      {
        text: "I have Slow-Growing Ulcer with Rolled Border.",
        diseaseName: "Rodent Ulcer",
      },
    ],
  },
  {
    text: "Choose an option: Level 2 : 101",
    options: [
      { text: "I have color changing issue.", nextQuestion: 102 },
      { text: "I have texture changes in my skin.", nextQuestion: 103 },
      { text: "I have growth related issue in my skin.", nextQuestion: 104 },
    ],
  },
  {
    text: "Choose an option: 102",
    options: [
      {
        text: "I have painful purplish lesions, kidney disease.",
        diseaseName: "Calciphylaxis",
      },
      {
        text: "I have Pigmented face lesion.",
        diseaseName: "Hutchinson's Melanotic Freckle",
      },
      {
        text: "I have Warty nodules, fungal infection.",
        diseaseName: "Chromoblastomycosis",
      },
      {
        text: "I have cauliflower-like skin lesions, chronic fungal infection, discoloration.",
        diseaseName: "Chromomycosis",
      },
      {
        text: "I have brownish-blue pigmented facial lesion in cheekbone area.",
        diseaseName: "Naevus Fusco-caeruleus Zygomaticus",
      },
      {
        text: "I have linear snake-like lesions, itchy, raised bumps.",
        diseaseName: "Sand-worm Eruption",
      },
      {
        text: "I have rough, scaly patches due to sun exposure , variable color.",
        diseaseName: "Solar Keratoses",
      },
      {
        text: "I have light to dark brown flat spots on skin..",
        diseaseName: "Cafe-au-Lait Macules",
      },
    ],
  },
  {
    text: "Choose an option: 103",
    options: [
      {
        text: "I have multiple, small, firm papules on hands and feet.",
        diseaseName: "Acrockerato-elastoidosis",
      },
      {
        text: "I have dark, velvety patches on the skin. Skin thickening and hyperpigmentation.",
        diseaseName: "Acanthosis Nigricans",
      },
      {
        text: "I have butterfly rash, photosensitivity, joint pain, requires medical management.",
        diseaseName: "Cutaneous Lupus Erythematosus:",
      },
      {
        text: "I have Small, translucent cysts on fingers or toes located near the nail.",
        diseaseName: "Digital Myxoid Cysts",
      },
      {
        text: "I have coin-shaped, red, and scaly patches on the skin.",
        diseaseName: "Discoid Eczema",
      },
      {
        text: "I have small, firm, dome-shaped papule on the face.",
        diseaseName: "Fibrous Papule of the Face",
      },
      {
        text: "I have Ring-shaped, flesh-colored, or red bumps on the skin.",
        diseaseName: "Granuloma Annulare",
      },
    ],
  },
  {
    text: "Choose an option: 104",
    options: [
      {
        text: "I have abnormal Skin Growth and Enlarged Features.",
        diseaseName: "Acromegaly",
      },
      {
        text: "I have abnormal Sweating in Palms",
        diseaseName: "Palmar Hyperhidrosis",
      },
      {
        text: "I have skin nodules, loss of sensation..",
        diseaseName: "Hansen's Disease (Leprosy):",
      },
      {
        text: "I have common moles, skin growths.",
        diseaseName: "Melanocytic Naevi",
      },
    ],
  },
  {
    text: "Choose an option: Level 2 : 105",
    options: [
      { text: "I have scabbing related issue.", nextQuestion: 106 },
      { text: "I have weeping fluid related issue.", nextQuestion: 103 },
      { text: "I have crusting related issue.", nextQuestion: 104 },
    ],
  },
  {
    text: "Choose an option: 106",
    options: [
      {
        text: "I have severe acne, abscesses, interconnected nodules, and scarring.",
        diseaseName: "Acne Conglobata",
      },
      {
        text: "I have solitary, firm, keratotic nodule on fingers or toes.",
        diseaseName: "Palmar Hyperhidrosis",
      },
      {
        text: "I have small macules, amyloid deposits in skin, often on eyelids.",
        diseaseName: "Amyloidosis- Macular",
      },
      {
        text: "I have lichenoid papules, amyloid deposits.",
        diseaseName: "Amyloidosis-Lichenoid",
      },
    ],
  },
  {
    text: "Choose an option: 107",
    options: [
      {
        text: "I have translucent cysts on fingers or toes, near nails or joints.",
        diseaseName: "Digital Myxoid Cysts",
      },
      {
        text: "I have vesicular rash on hands, feet, mouth, mild fever.",
        diseaseName: "Hand, Foot, and Mouth Disease",
      },
      {
        text: "I have contagious skin infection, honey-colored crusts, pustules, itching.",
        diseaseName: "Impetigo",
      },
      {
        text: "I have open sores on legs, slow healing, possible infection, pain.",
        diseaseName: "Leg Ulcers",
      },
    ],
  },
  {
    text: "Choose an option: 108",
    options: [
      {
        text: "I have cracking at corners of the mouth.",
        diseaseName: "Angular Cheilitis",
      },
      {
        text: "I have painful, shallow sores in the mouth.",
        diseaseName: "Aphthous Ulcers",
      },
      {
        text: "I have persistent red, scaly patches..",
        diseaseName: "Cutaneous B-Cell Lymphoma",
      },
      {
        text: "I have fungal infection characterized by red rash, itching, and soreness.",
        diseaseName: "Candidiasis",
      },
      {
        text: "I have warts and skin lesions caused by HPV infection, with various morphologies..",
        diseaseName: "Human Papillomavirus",
      },
    ],
  },
];

export default questions;
