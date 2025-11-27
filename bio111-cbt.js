// Quiz questions database
const quizQuestions = [
    {
        id: 1,
        question: "What percentage of total cell mass does water account for?",
        options: ["30%", "50%", "70% or more", "90%"],
        correctAnswer: 2,
        explanation: "Water accounts for 70% or more of total cell mass, making it the most abundant molecule in cells."
    },
    {
        id: 2,
        question: "Which of the following is NOT one of the four classes of organic molecules in cells?",
        options: ["Carbohydrates", "Lipids", "Proteins", "Enzymes"],
        correctAnswer: 3,
        explanation: "Enzymes are a type of protein, not a separate class of macromolecules. The four classes are carbohydrates, lipids, proteins, and nucleic acids."
    },
    {
        id: 3,
        question: "What is a polymer?",
        options: [
            "A small molecule that cannot be broken down further",
            "A long molecule built by linking together similar subunits called monomers",
            "A type of protein that catalyzes chemical reactions",
            "A molecule that stores genetic information"
        ],
        correctAnswer: 1,
        explanation: "A polymer is a long molecule built by linking together a large number of small, similar chemical subunits called monomers."
    },
    {
        id: 4,
        question: "Which reaction builds polymers by removing a water molecule?",
        options: ["Hydrolysis", "Dehydration synthesis", "Oxidation", "Reduction"],
        correctAnswer: 1,
        explanation: "Dehydration synthesis (or condensation) builds polymers by removing a water molecule to form a covalent bond between monomers."
    },
    {
        id: 5,
        question: "What is the empirical formula for carbohydrates?",
        options: ["C6H12O6", "CH4", "(CH2O)n", "C2H4O2"],
        correctAnswer: 2,
        explanation: "Carbohydrates contain carbon, hydrogen, and oxygen in the molar ratio 1:2:1, giving them the empirical formula (CH2O)n."
    },
    {
        id: 6,
        question: "Which six-carbon sugar is especially important as a principal source of cellular energy?",
        options: ["Fructose", "Galactose", "Glucose", "Sucrose"],
        correctAnswer: 2,
        explanation: "Glucose (C6H12O6) is especially important in cells as it provides the principal source of cellular energy."
    },
    {
        id: 7,
        question: "What type of bond links monosaccharides together?",
        options: ["Peptide bond", "Glycosidic bond", "Phosphodiester bond", "Ester bond"],
        correctAnswer: 1,
        explanation: "Monosaccharides are joined together by dehydration reactions, forming glycosidic bonds between their carbon atoms."
    },
    {
        id: 8,
        question: "Which polysaccharide is used by plants to store energy?",
        options: ["Cellulose", "Chitin", "Glycogen", "Starch"],
        correctAnswer: 3,
        explanation: "Starch is a polysaccharide used by plants to store energy. It consists entirely of glucose molecules linked in long chains."
    },
    {
        id: 9,
        question: "What is the main characteristic of lipids?",
        options: [
            "They are soluble in water",
            "They are insoluble in water",
            "They always contain phosphate groups",
            "They are always solid at room temperature"
        ],
        correctAnswer: 1,
        explanation: "Lipids have one main characteristic: they are insoluble in water. This property distinguishes them from other macromolecules."
    },
    {
        id: 10,
        question: "What is a triglyceride composed of?",
        options: [
            "Glycerol and two fatty acids",
            "Glycerol and three fatty acids",
            "Glycerol, two fatty acids, and a phosphate group",
            "Three glycerol molecules"
        ],
        correctAnswer: 1,
        explanation: "A triglyceride (or triacylglycerol) consists of a glycerol molecule with three fatty acids attached, one to each carbon of the glycerol backbone."
    },
    {
        id: 11,
        question: "Why are polyunsaturated fats usually liquid at room temperature?",
        options: [
            "They have shorter carbon chains",
            "They contain phosphate groups",
            "Their fatty acid chains bend at double bonds, preventing close alignment",
            "They have higher molecular weights"
        ],
        correctAnswer: 2,
        explanation: "Polyunsaturated fats have low melting points because their fatty acid chains bend at the double bonds, preventing the fat molecules from aligning closely with one another."
    },
    {
        id: 12,
        question: "Which molecules form the core of all biological membranes?",
        options: ["Triglycerides", "Phospholipids", "Steroids", "Waxes"],
        correctAnswer: 1,
        explanation: "Phospholipids are among the most important molecules of the cell, as they form the core of all biological membranes."
    },
    {
        id: 13,
        question: "Which type of lipid is composed of four carbon rings?",
        options: ["Phospholipids", "Triglycerides", "Terpenes", "Steroids"],
        correctAnswer: 3,
        explanation: "Steroids are composed of four carbon rings. Cholesterol, testosterone, and estrogen are examples of steroids."
    },
    {
        id: 14,
        question: "What are the two main varieties of nucleic acids?",
        options: ["DNA and ATP", "RNA and ATP", "DNA and RNA", "mRNA and tRNA"],
        correctAnswer: 2,
        explanation: "There are two main varieties of nucleic acids: deoxyribonucleic acid (DNA) and ribonucleic acid (RNA)."
    },
    {
        id: 15,
        question: "Which nucleic acid stores genetic information?",
        options: ["DNA", "RNA", "mRNA", "tRNA"],
        correctAnswer: 0,
        explanation: "Genetic information is stored in DNA. RNA is made as a transcribed copy of portions of DNA."
    },
    {
        id: 16,
        question: "What type of RNA carries information from DNA to the ribosomes?",
        options: ["rRNA", "tRNA", "mRNA", "snRNA"],
        correctAnswer: 2,
        explanation: "Messenger RNA (mRNA) carries information from DNA to the ribosomes, where it serves as a template for protein synthesis."
    },
    {
        id: 17,
        question: "Which of the following is NOT a difference between DNA and RNA?",
        options: [
            "DNA uses thymine, RNA uses uracil",
            "DNA is double-stranded, RNA is single-stranded",
            "DNA uses deoxyribose, RNA uses ribose",
            "DNA contains purines, RNA contains pyrimidines"
        ],
        correctAnswer: 3,
        explanation: "Both DNA and RNA contain purines (adenine and guanine) and pyrimidines. The differences are in the sugar (deoxyribose vs. ribose), base (thymine vs. uracil), and structure (double-stranded vs. single-stranded)."
    },
    {
        id: 18,
        question: "What are the three components of a nucleotide?",
        options: [
            "Amino group, carboxyl group, R group",
            "Glycerol, fatty acids, phosphate group",
            "Sugar, phosphate group, nitrogenous base",
            "Sugar, amino acid, nitrogenous base"
        ],
        correctAnswer: 2,
        explanation: "Each nucleotide consists of three components: a five-carbon sugar (ribose or deoxyribose), a phosphate group, and an organic nitrogen-containing base."
    },
    {
        id: 19,
        question: "Which molecule is known as the 'energy currency' of the cell?",
        options: ["DNA", "RNA", "ATP", "NAD+"],
        correctAnswer: 2,
        explanation: "Adenosine triphosphate (ATP) is the energy currency of the cell, used to drive energetically unfavorable chemical reactions."
    },
    {
        id: 20,
        question: "What is the primary responsibility of proteins in the cell?",
        options: [
            "Store genetic information",
            "Store energy",
            "Execute tasks directed by genetic information",
            "Form barriers between cell compartments"
        ],
        correctAnswer: 2,
        explanation: "While nucleic acids carry the genetic information of the cell, the primary responsibility of proteins is to execute the tasks directed by that information."
    },
    {
        id: 21,
        question: "How many different amino acids are used to build proteins?",
        options: ["10", "20", "30", "64"],
        correctAnswer: 1,
        explanation: "Proteins are all polymers of 20 different amino acids, arranged in specific orders that determine the protein's structure and function."
    },
    {
        id: 22,
        question: "What type of bond links amino acids together in proteins?",
        options: ["Glycosidic bond", "Peptide bond", "Phosphodiester bond", "Ester bond"],
        correctAnswer: 1,
        explanation: "A peptide bond forms when the amino group of one amino acid joins to the carboxyl group of another, creating a covalent bond that links amino acids in proteins."
    },
    {
        id: 23,
        question: "Which of the following is NOT a function of proteins?",
        options: ["Enzyme catalysis", "Energy storage", "Cell signaling", "Structural support"],
        correctAnswer: 1,
        explanation: "While lipids and carbohydrates are primarily used for energy storage, proteins have diverse functions including enzyme catalysis, defense, transport, support, motion, regulation, and storage of ions (not energy)."
    },
    {
        id: 24,
        question: "What determines a protein's structure and function?",
        options: [
            "The number of amino acids",
            "The specific order of amino acids",
            "The presence of sulfur atoms",
            "The overall size of the protein"
        ],
        correctAnswer: 1,
        explanation: "The specific order of amino acids in a protein determines its structure and function. This sequence is encoded in the DNA."
    },
    {
        id: 25,
        question: "Which of these is a fibrous protein that provides structural support?",
        options: ["Hemoglobin", "Insulin", "Collagen", "Amylase"],
        correctAnswer: 2,
        explanation: "Collagen is a fibrous protein that forms the matrix of skin, ligaments, tendons, and bones, providing structural support."
    },
    {
        id: 26,
        question: "What happens in a dehydration reaction?",
        options: [
            "Water is added to break a bond",
            "Water is removed to form a bond",
            "Hydrogen is removed from both monomers",
            "Oxygen is added to both monomers"
        ],
        correctAnswer: 1,
        explanation: "In a dehydration reaction (also called condensation), a water molecule is removed to form a covalent bond between two monomers."
    },
    {
        id: 27,
        question: "Which process breaks down polymers into monomers?",
        options: ["Dehydration synthesis", "Condensation", "Hydrolysis", "Polymerization"],
        correctAnswer: 2,
        explanation: "Hydrolysis breaks down polymers into their constituent monomers by adding a water molecule, which breaks the covalent bond between subunits."
    },
    {
        id: 28,
        question: "What is the difference between saturated and unsaturated fats?",
        options: [
            "Saturated fats have double bonds, unsaturated do not",
            "Unsaturated fats have double bonds, saturated do not",
            "Saturated fats are liquid at room temperature",
            "Unsaturated fats are always solid at room temperature"
        ],
        correctAnswer: 1,
        explanation: "Saturated fats have no double bonds between carbon atoms (they are 'saturated' with hydrogen), while unsaturated fats have one or more double bonds."
    },
    {
        id: 29,
        question: "Which of the following is a purine base?",
        options: ["Cytosine", "Thymine", "Uracil", "Adenine"],
        correctAnswer: 3,
        explanation: "Purines are large, double-ring molecules found in both DNA and RNA. Adenine and guanine are purines, while cytosine, thymine, and uracil are pyrimidines."
    },
    {
        id: 30,
        question: "What is the function of transfer RNA (tRNA)?",
        options: [
            "Carries genetic information from DNA to ribosomes",
            "Forms part of the ribosome structure",
            "Brings amino acids to the ribosome during protein synthesis",
            "Catalyzes chemical reactions in the cell"
        ],
        correctAnswer: 2,
        explanation: "Transfer RNA (tRNA) brings amino acids to the ribosome during protein synthesis, matching them to the codons on the mRNA."
    },
    {
        id: 31,
        question: "Which element is found in proteins but not in carbohydrates or lipids?",
        options: ["Carbon", "Hydrogen", "Oxygen", "Nitrogen"],
        correctAnswer: 3,
        explanation: "Proteins contain nitrogen in their amino groups, which is not typically found in carbohydrates and lipids (except for some specialized lipids like phospholipids)."
    },
    {
        id: 32,
        question: "What is the role of cholesterol in cell membranes?",
        options: [
            "It provides energy for the cell",
            "It stores genetic information",
            "It helps maintain membrane fluidity",
            "It catalyzes chemical reactions"
        ],
        correctAnswer: 2,
        explanation: "Cholesterol is a steroid found in animal cell membranes that helps maintain membrane fluidity and stability."
    },
    {
        id: 33,
        question: "Which of these is a disaccharide?",
        options: ["Glucose", "Fructose", "Sucrose", "Starch"],
        correctAnswer: 2,
        explanation: "Sucrose (table sugar) is a disaccharide composed of glucose and fructose. Starch is a polysaccharide, while glucose and fructose are monosaccharides."
    },
    {
        id: 34,
        question: "What is the primary structure of a protein?",
        options: [
            "The 3D folding of the polypeptide chain",
            "The sequence of amino acids",
            "The association of multiple polypeptide chains",
            "The local folding patterns like alpha helices"
        ],
        correctAnswer: 1,
        explanation: "The primary structure of a protein is its unique sequence of amino acids, which determines all higher levels of structure."
    },
    {
        id: 35,
        question: "Which nucleic acid base is found in RNA but not in DNA?",
        options: ["Adenine", "Guanine", "Cytosine", "Uracil"],
        correctAnswer: 3,
        explanation: "Uracil is found in RNA but not in DNA, where it is replaced by thymine. Adenine, guanine, and cytosine are found in both DNA and RNA."
    },
    {
        id: 36,
        question: "What is the function of enzymes?",
        options: [
            "Store genetic information",
            "Provide structural support",
            "Catalyze biochemical reactions",
            "Store energy for the cell"
        ],
        correctAnswer: 2,
        explanation: "Enzymes are biological catalysts that facilitate specific chemical reactions in the cell, speeding up reactions without being consumed."
    },
    {
        id: 37,
        question: "Which of these is a function of carbohydrates?",
        options: [
            "Long-term energy storage",
            "Forming cell membranes",
            "Carrying genetic information",
            "Catalyzing reactions"
        ],
        correctAnswer: 0,
        explanation: "Carbohydrates function as both short-term energy storage (glucose) and long-term energy storage (starch in plants, glycogen in animals), as well as structural elements."
    },
    {
        id: 38,
        question: "What is cellulose?",
        options: [
            "An energy storage polysaccharide in animals",
            "A structural polysaccharide in plants",
            "A type of lipid in cell membranes",
            "A protein in connective tissue"
        ],
        correctAnswer: 1,
        explanation: "Cellulose is a polysaccharide that serves as a structural building material in plants, forming the cell walls."
    },
    {
        id: 39,
        question: "Which of these is a function of lipids?",
        options: [
            "Catalyzing metabolic reactions",
            "Storing genetic information",
            "Forming chemical barriers (membranes)",
            "Transporting oxygen in blood"
        ],
        correctAnswer: 2,
        explanation: "Lipids form the core of all biological membranes, creating chemical barriers that separate the cell from its environment and compartmentalize the cell interior."
    },
    {
        id: 40,
        question: "What is the role of NAD+ and FAD in cells?",
        options: [
            "They store genetic information",
            "They are structural components of membranes",
            "They function as electron carriers",
            "They catalyze dehydration reactions"
        ],
        correctAnswer: 2,
        explanation: "NAD+ (nicotinamide adenine dinucleotide) and FAD (flavin adenine dinucleotide) function as electron carriers in a variety of cellular processes, particularly in energy metabolism."
    },
    {
        id: 41,
        question: "Which of these is a characteristic of RNA?",
        options: [
            "It is always double-stranded",
            "It contains the sugar deoxyribose",
            "It uses thymine as a nitrogenous base",
            "It is involved in protein synthesis"
        ],
        correctAnswer: 3,
        explanation: "RNA is involved in protein synthesis through its various forms (mRNA, tRNA, rRNA). It is typically single-stranded, contains ribose, and uses uracil instead of thymine."
    },
    {
        id: 42,
        question: "What determines the chemical properties of an amino acid?",
        options: [
            "The amino group",
            "The carboxyl group",
            "The R group (side chain)",
            "The peptide bonds"
        ],
        correctAnswer: 2,
        explanation: "Each amino acid has unique chemical properties determined by the nature of the side group (R group) covalently bonded to the central carbon atom."
    },
    {
        id: 43,
        question: "Which of these is a function of proteins in blood?",
        options: [
            "Storing energy as fat",
            "Transporting oxygen (hemoglobin)",
            "Storing genetic information",
            "Forming cell membranes"
        ],
        correctAnswer: 1,
        explanation: "Hemoglobin is a protein in red blood cells that transports oxygen throughout the body."
    },
    {
        id: 44,
        question: "What is the difference between oligosaccharides and polysaccharides?",
        options: [
            "Oligosaccharides contain nitrogen, polysaccharides do not",
            "Oligosaccharides are used for structure, polysaccharides for energy",
            "Oligosaccharides have few sugar units, polysaccharides have many",
            "Oligosaccharides are insoluble, polysaccharides are soluble"
        ],
        correctAnswer: 2,
        explanation: "Oligosaccharides contain only a few monosaccharide units (typically 3-10), while polysaccharides contain many units (hundreds or thousands)."
    },
    {
        id: 45,
        question: "Which of these is NOT a component of a phospholipid?",
        options: ["Glycerol", "Fatty acids", "Phosphate group", "Nitrogenous base"],
        correctAnswer: 3,
        explanation: "Phospholipids consist of glycerol, two fatty acids, and a phosphate group (often with an additional organic molecule). Nitrogenous bases are found in nucleic acids, not phospholipids."
    },
    {
            id: 46,
        question: "What is the function of waxes in plants and animals?",
        options: [
            "Energy storage",
            "Membrane formation",
            "Protective coatings",
            "Cell signaling"
        ],
        correctAnswer: 2,
        explanation: "Plants use waxes for a thin protective covering of stems and leaves to prevent water loss. Animals also employ waxes for protective purposes, such as earwax in humans."
    },
    {
        id: 47,
        question: "Which of these is a function of nucleic acids?",
        options: [
            "Catalyzing metabolic reactions",
            "Storing and transmitting genetic information",
            "Providing structural support",
            "Storing energy long-term"
        ],
        correctAnswer: 1,
        explanation: "Nucleic acids are the principal informational molecules of the cell, storing and transmitting genetic information."
    },
    {
        id: 48,
        question: "What type of macromolecule is hemoglobin?",
        options: ["Carbohydrate", "Lipid", "Protein", "Nucleic acid"],
        correctAnswer: 2,
        explanation: "Hemoglobin is a protein that transports oxygen in the blood. It is composed of four polypeptide chains, each with a heme group that binds oxygen."
    },
    {
        id: 49,
        question: "Which of these is a function of the cytoskeleton?",
        options: [
            "Storing genetic information",
            "Providing structural support and enabling cell movement",
            "Catalyzing metabolic reactions",
            "Storing energy as triglycerides"
        ],
        correctAnswer: 1,
        explanation: "The cytoskeleton, made of proteins like actin and microtubules, provides structural support to the cell and enables cell movement and intracellular transport."
    },
    {
        id: 50,
        question: "What is the relationship between DNA and RNA?",
        options: [
            "DNA is a polymer of RNA monomers",
            "RNA is a polymer of DNA monomers",
            "RNA is a transcript (copy) of DNA",
            "DNA and RNA have no direct relationship"
        ],
        correctAnswer: 2,
        explanation: "RNA is made as a transcribed copy of portions of DNA. This RNA then directs protein synthesis during gene expression."
    }
];

// Quiz state variables
let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let quizTimer;
let timeLeft = 600; // 10 minutes in seconds

// DOM elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const startBtn = document.getElementById('start-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const retryBtn = document.getElementById('retry-btn');
const homeBtn = document.getElementById('home-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const currentQuestionElement = document.getElementById('current-question');
const timeLeftElement = document.getElementById('time-left');
const scoreElement = document.getElementById('score');
const percentageElement = document.getElementById('percentage');
const answersReview = document.getElementById('answers-review');

// Event listeners
startBtn.addEventListener('click', startQuiz);
prevBtn.addEventListener('click', showPreviousQuestion);
nextBtn.addEventListener('click', showNextQuestion);
submitBtn.addEventListener('click', showResults);
retryBtn.addEventListener('click', retryQuiz);
homeBtn.addEventListener('click', goHome);

// Initialize the quiz
function initQuiz() {
    // Select 10 random questions from the pool
    currentQuestions = getRandomQuestions(10);
    currentQuestionIndex = 0;
    userAnswers = new Array(currentQuestions.length).fill(null);
    
    // Reset UI
    updateProgress();
    displayQuestion();
    updateNavigationButtons();
    
    // Start timer
    startTimer();
}

// Get random questions from the pool
function getRandomQuestions(count) {
    const shuffled = [...quizQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Start the quiz
function startQuiz() {
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    initQuiz();
}

// Display the current question
function displayQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    questionText.textContent = question.question;
    
    // Clear previous options
    optionsContainer.innerHTML = '';
    
    // Create new options
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('button');
        optionElement.className = 'option';
        if (userAnswers[currentQuestionIndex] === index) {
            optionElement.classList.add('selected');
        }
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optionElement);
    });
    
    // Update progress indicator
    updateProgress();
}

// Select an option
function selectOption(optionIndex) {
    userAnswers[currentQuestionIndex] = optionIndex;
    
    // Update UI to show selected option
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        if (index === optionIndex) {
            option.classList.add('selected');
        } else {
            option.classList.remove('selected');
        }
    });
    
    // Enable navigation buttons if needed
    updateNavigationButtons();
}

// Update progress indicator
function updateProgress() {
    currentQuestionElement.textContent = currentQuestionIndex + 1;
}

// Update navigation buttons state
function updateNavigationButtons() {
    prevBtn.disabled = currentQuestionIndex === 0;
    
    if (currentQuestionIndex === currentQuestions.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-block';
    } else {
        nextBtn.style.display = 'inline-block';
        submitBtn.style.display = 'none';
    }
}

// Show previous question
function showPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
        updateNavigationButtons();
    }
}

// Show next question
function showNextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
        updateNavigationButtons();
    }
}

// Start the quiz timer
function startTimer() {
    timeLeft = 600; // 10 minutes
    updateTimerDisplay();
    
    quizTimer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(quizTimer);
            showResults();
        }
    }, 1000);
}

// Update timer display
function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timeLeftElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Show quiz results
function showResults() {
    clearInterval(quizTimer);
    
    // Calculate score
    let score = 0;
    currentQuestions.forEach((question, index) => {
        if (userAnswers[index] === question.correctAnswer) {
            score++;
        }
    });
    
    // Update score display
    const percentage = Math.round((score / currentQuestions.length) * 100);
    scoreElement.textContent = score;
    percentageElement.textContent = `${percentage}%`;
    
    // Display review of answers
    displayAnswersReview();
    
    // Switch to results screen
    quizScreen.classList.remove('active');
    resultsScreen.classList.add('active');
}

// Display review of answers
function displayAnswersReview() {
    answersReview.innerHTML = '';
    
    currentQuestions.forEach((question, index) => {
        const userAnswerIndex = userAnswers[index];
        const isCorrect = userAnswerIndex === question.correctAnswer;
        
        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${isCorrect ? 'correct' : 'incorrect'}`;
        
        const questionElement = document.createElement('div');
        questionElement.className = 'review-question';
        questionElement.textContent = `${index + 1}. ${question.question}`;
        
        const userAnswerElement = document.createElement('div');
        userAnswerElement.className = 'review-answer';
        userAnswerElement.textContent = `Your answer: ${userAnswerIndex !== null ? question.options[userAnswerIndex] : 'Not answered'}`;
        
        const correctAnswerElement = document.createElement('div');
        correctAnswerElement.className = 'review-answer';
        correctAnswerElement.textContent = `Correct answer: ${question.options[question.correctAnswer]}`;
        
        const explanationElement = document.createElement('div');
        explanationElement.className = 'review-explanation';
        explanationElement.textContent = question.explanation;
        
        reviewItem.appendChild(questionElement);
        reviewItem.appendChild(userAnswerElement);
        reviewItem.appendChild(correctAnswerElement);
        reviewItem.appendChild(explanationElement);
        
        answersReview.appendChild(reviewItem);
    });
}

// Retry the quiz with new random questions
function retryQuiz() {
    resultsScreen.classList.remove('active');
    startScreen.classList.add('active');
}

// Go back to home page
function goHome() {
    window.location.href = 'bio111.html';
}