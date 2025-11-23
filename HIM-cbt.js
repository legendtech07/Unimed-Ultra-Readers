// Questions data for CBT
const cbtQuestions = [
    {
        question: "What is the primary focus of Health Information Science?",
        options: [
            "The study of how health data is collected, stored, and communicated",
            "The practice of medicine using technology",
            "The management of hospital finances",
            "The study of human anatomy through digital means"
        ],
        correctAnswer: 0,
        explanation: "Health Information Science (also known as health informatics) is the study of how health data is collected, stored and communicated. It focuses on the effective use of biomedical data, information, and knowledge to enhance scientific inquiry, problem-solving, and decision-making."
    },
    {
        question: "Which of the following best describes the DIKW pyramid?",
        options: [
            "A hierarchy showing the progression from data to wisdom",
            "A model for hospital management",
            "A framework for medical diagnosis",
            "A theory about information security"
        ],
        correctAnswer: 0,
        explanation: "The DIKW pyramid represents a hierarchy where raw data transforms into meaningful insights: Data → Information → Knowledge → Wisdom. It illustrates how raw facts (data) become meaningful when processed (information), then understood (knowledge), and finally applied with judgment (wisdom)."
    },
    {
        question: "Which attribute of health information ensures it is free from errors?",
        options: [
            "Accuracy",
            "Timeliness",
            "Completeness",
            "Confidentiality"
        ],
        correctAnswer: 0,
        explanation: "Accuracy is a crucial attribute of health information that ensures it is correct and free from errors. This is essential for proper diagnosis, treatment, and patient safety in healthcare settings."
    },
    {
        question: "What does the 'non-rivalrous' characteristic of information commodities mean?",
        options: [
            "One person's use does not diminish its availability to others",
            "It cannot be copied or reproduced",
            "It has no economic value",
            "It is only available to certain users"
        ],
        correctAnswer: 0,
        explanation: "Non-rivalrous means that one person's use of an information commodity does not reduce its availability to others. For example, multiple people can access the same digital eBook simultaneously without depleting its supply."
    },
    {
        question: "According to Shannon and Weaver's Theory of Information, what is 'noise'?",
        options: [
            "Any interference that distorts the original message during transmission",
            "The volume of data being transmitted",
            "The speed of information transfer",
            "The encryption method used for secure communication"
        ],
        correctAnswer: 0,
        explanation: "In Shannon and Weaver's model, 'noise' refers to any interference that can distort the original message during transmission. Understanding and mitigating noise is crucial for effective communication."
    },
    {
        question: "Which component of Brooke's Model of Information emphasizes the situational factors affecting interpretation?",
        options: [
            "Context",
            "Sender",
            "Receiver",
            "Message"
        ],
        correctAnswer: 0,
        explanation: "Brooke's Model highlights that communication is not just about transmission but also about understanding and meaning, which is shaped by context - the situational factors affecting how information is interpreted."
    },
    {
        question: "In Technology Acceptance Theory (TAM), what does 'Perceived Usefulness' refer to?",
        options: [
            "The degree to which a person believes using technology will enhance their job performance",
            "How easy a technology is to learn and use",
            "The cost-effectiveness of a technology",
            "The aesthetic appeal of a technology interface"
        ],
        correctAnswer: 0,
        explanation: "Perceived Usefulness (PU) in TAM refers to the degree to which a person believes that using a particular technology will enhance their job performance. If users perceive the technology as beneficial, they are more inclined to accept it."
    },
    {
        question: "What is the primary purpose of an Automated Health Information Management System (AHIMS)?",
        options: [
            "To streamline the collection, storage, management, and retrieval of health-related data",
            "To replace healthcare professionals with automated systems",
            "To reduce the cost of medical equipment",
            "To monitor patient vital signs in real-time"
        ],
        correctAnswer: 0,
        explanation: "An Automated Health Information Management System (AHIMS) is an integrated software solution designed to streamline the collection, storage, management, and retrieval of health-related data within healthcare organizations."
    },
    {
        question: "Which of the following is NOT a key attribute of health information?",
        options: [
            "Entertainment value",
            "Accuracy",
            "Timeliness",
            "Confidentiality"
        ],
        correctAnswer: 0,
        explanation: "Entertainment value is not an attribute of health information. Key attributes include accuracy, completeness, consistency, timeliness, relevance, confidentiality, interoperability, usability, security, and standardization."
    },
    {
        question: "What does the 'Interoperability' attribute of health information ensure?",
        options: [
            "Health information can be easily shared and understood across different systems",
            "Health information is always accurate",
            "Health information is available immediately",
            "Health information is protected from unauthorized access"
        ],
        correctAnswer: 0,
        explanation: "Interoperability ensures that health information can be easily shared and understood across different systems and platforms, facilitating seamless communication among healthcare providers."
    },
    {
        question: "Which model emphasizes the subjective interpretation of information based on individual and contextual factors?",
        options: [
            "Brooke's Model of Information",
            "Shannon and Weaver's Theory",
            "Technology Acceptance Model",
            "Theory of Reasoned Action"
        ],
        correctAnswer: 0,
        explanation: "Brooke's Model of Information emphasizes that information processing involves subjective interpretation based on individual and contextual factors, moving beyond linear models to incorporate complexities of human cognition."
    },
    {
        question: "In the DIKW hierarchy, what represents the highest level of understanding?",
        options: [
            "Wisdom",
            "Knowledge",
            "Information",
            "Data"
        ],
        correctAnswer: 0,
        explanation: "Wisdom is the highest level in the DIKW hierarchy, representing the ability to make sound judgments and decisions based on knowledge and experience, considering ethical implications and long-term consequences."
    },
    {
        question: "What is the main limitation of Shannon and Weaver's Theory of Information?",
        options: [
            "It doesn't account for the complexities of human communication",
            "It is too complicated to apply in real-world scenarios",
            "It focuses only on digital communication",
            "It doesn't consider the technical aspects of communication"
        ],
        correctAnswer: 0,
        explanation: "While Shannon and Weaver's model is powerful for understanding technical aspects of communication, it is often critiqued for being overly simplistic and not accounting for complexities of human communication like context, meaning, and emotional nuances."
    },
    {
        question: "Which theory explains how users come to accept and use technology?",
        options: [
            "Technology Acceptance Theory (TAM)",
            "Theory of Reasoned Action",
            "Information Perception Constraint Theory",
            "Shannon and Weaver's Theory"
        ],
        correctAnswer: 0,
        explanation: "Technology Acceptance Theory (TAM) is a widely recognized framework that explains how users come to accept and use technology, focusing on perceived usefulness and perceived ease of use."
    },
    {
        question: "What does HIPAA stand for in the context of health information?",
        options: [
            "Health Insurance Portability and Accountability Act",
            "Health Information Protection and Access Act",
            "Hospital Information Privacy and Accountability Act",
            "Health Informatics Practices and Applications Act"
        ],
        correctAnswer: 0,
        explanation: "HIPAA stands for Health Insurance Portability and Accountability Act, which is a US law that sets standards for protecting sensitive patient health information from being disclosed without the patient's consent or knowledge."
    },
    {
        question: "Which of the following is an example of clinical data?",
        options: [
            "Lab results",
            "Billing information",
            "Patient demographics",
            "Insurance claims"
        ],
        correctAnswer: 0,
        explanation: "Lab results are an example of clinical data, which includes details collected during medical encounters such as diagnoses, treatment plans, lab results, and imaging reports."
    },
    {
        question: "What is the primary goal of Health Information Exchange (HIE)?",
        options: [
            "To enable secure sharing of health information among providers",
            "To reduce the cost of healthcare services",
            "To replace paper-based medical records",
            "To train healthcare professionals on technology use"
        ],
        correctAnswer: 0,
        explanation: "Health Information Exchange (HIE) enables the secure sharing of health information among providers to improve care coordination, continuity of care, and patient outcomes."
    },
    {
        question: "Which component is specific to the Theory of Planned Behavior (TPB) but not the Theory of Reasoned Action (TRA)?",
        options: [
            "Perceived Behavioral Control",
            "Behavioral Intention",
            "Attitude",
            "Subjective Norms"
        ],
        correctAnswer: 0,
        explanation: "Perceived Behavioral Control is a component specific to the Theory of Planned Behavior (TPB) but not included in the original Theory of Reasoned Action (TRA). It refers to the perceived ease or difficulty of performing a behavior."
    },
    {
        question: "What does the 'timeliness' attribute of health information ensure?",
        options: [
            "Information is available when needed for prompt decision-making",
            "Information is always up-to-date",
            "Information is delivered quickly",
            "Information is relevant to current medical practices"
        ],
        correctAnswer: 0,
        explanation: "Timeliness ensures that health information is available when needed, allowing for prompt decision-making in patient care. This is crucial in emergency situations and for ongoing treatment plans."
    },
    {
        question: "Which of the following is a key benefit of Automated Health Information Management Systems?",
        options: [
            "Reduces administrative burdens by automating routine tasks",
            "Eliminates the need for healthcare professionals",
            "Guarantees 100% accuracy in all medical records",
            "Makes healthcare completely free for patients"
        ],
        correctAnswer: 0,
        explanation: "A key benefit of Automated Health Information Management Systems is that they reduce administrative burdens by automating routine tasks, allowing healthcare staff to focus more on patient care rather than paperwork."
    },
    {
        question: "What is the main difference between data and information?",
        options: [
            "Data is raw facts, while information is processed data with context",
            "Data is always digital, while information can be analog",
            "Data is more valuable than information",
            "Information is collected, while data is analyzed"
        ],
        correctAnswer: 0,
        explanation: "Data consists of raw facts and figures without context, while information is data that has been processed or organized to provide context and meaning. For example, '100' is data, while 'The temperature is 100°F' is information."
    },
    {
        question: "Which theory focuses on how constraints affect how individuals perceive and understand information?",
        options: [
            "Information Perception Constraint Theory",
            "Technology Acceptance Theory",
            "Theory of Reasoned Action",
            "Shannon and Weaver's Theory"
        ],
        correctAnswer: 0,
        explanation: "Information Perception Constraint Theory posits that various constraints (cognitive, social, technological, contextual) significantly affect how individuals perceive and understand information, potentially distorting or limiting interpretation."
    },
    {
        question: "What is the primary purpose of clinical decision support systems (CDSS)?",
        options: [
            "To provide healthcare professionals with evidence-based recommendations",
            "To automate patient billing processes",
            "To manage hospital inventory",
            "To schedule staff shifts"
        ],
        correctAnswer: 0,
        explanation: "Clinical Decision Support Systems (CDSS) are tools that provide healthcare professionals with evidence-based recommendations at the point of care, aiding in diagnosis, treatment planning, and patient management."
    },
    {
        question: "Which of the following is an example of public health data?",
        options: [
            "Disease surveillance reports",
            "Personal medical history",
            "Hospital billing records",
            "Clinical trial data"
        ],
        correctAnswer: 0,
        explanation: "Disease surveillance reports are an example of public health data, which includes statistics and information related to population health, disease outbreaks, and health trends that inform public health policies and practices."
    },
    {
        question: "What does the 'reproducibility' characteristic of information commodities mean?",
        options: [
            "Information can be replicated at little to no cost",
            "Information is always accurate when reproduced",
            "Information loses value when copied",
            "Information can only be used once"
        ],
        correctAnswer: 0,
        explanation: "Reproducibility means that information can be replicated at little to no cost. For example, a software program can be copied and distributed widely without the need for additional resources."
    },
    {
        question: "Which model includes the components: Information Source, Transmitter, Channel, Receiver, and Destination?",
        options: [
            "Shannon and Weaver's Theory of Information",
            "Brooke's Model of Information",
            "Technology Acceptance Model",
            "Theory of Reasoned Action"
        ],
        correctAnswer: 0,
        explanation: "Shannon and Weaver's Theory of Information includes these five components in a linear communication model: Information Source → Transmitter → Channel → Receiver → Destination, with the potential for noise interference."
    },
    {
        question: "What is the main focus of nursing informatics?",
        options: [
            "Using information science to improve nursing practice and patient care",
            "Managing nursing schedules and shifts",
            "Training nurses on medical equipment",
            "Documenting patient complaints"
        ],
        correctAnswer: 0,
        explanation: "Nursing informatics is a sub-discipline that focuses on the use of information science to improve nursing practice, patient care, and health outcomes through effective data management and technology use."
    },
    {
        question: "Which of the following is NOT a type of constraint in Information Perception Constraint Theory?",
        options: [
            "Financial constraints",
            "Cognitive constraints",
            "Social constraints",
            "Technological constraints"
        ],
        correctAnswer: 0,
        explanation: "While financial constraints might indirectly affect information perception, they are not explicitly listed as a type of constraint in Information Perception Constraint Theory. The main types are cognitive, social, technological, and contextual constraints."
    },
    {
        question: "What is the primary application of bioinformatics in healthcare?",
        options: [
            "Managing and analyzing biological data for genomic research",
            "Processing insurance claims",
            "Scheduling medical appointments",
            "Managing hospital finances"
        ],
        correctAnswer: 0,
        explanation: "Bioinformatics applies information science to manage and analyze biological data, facilitating advancements in personalized medicine and genomics through genomic research and analysis."
    },
    {
        question: "Which attribute of health information ensures it is protected from unauthorized access?",
        options: [
            "Security",
            "Accuracy",
            "Timeliness",
            "Relevance"
        ],
        correctAnswer: 0,
        explanation: "Security is the attribute that ensures health information is protected from unauthorized access and breaches through measures like data encryption, access controls, and compliance with regulations like HIPAA."
    },
    {
        question: "What does the 'standardization' attribute of health information ensure?",
        options: [
            "Health information is consistent and easily interpreted across settings",
            "Health information is always up-to-date",
            "Health information is free from errors",
            "Health information is available to all healthcare providers"
        ],
        correctAnswer: 0,
        explanation: "Standardization ensures that health information uses consistent formats and terminologies, making it easily interpreted across different healthcare settings and systems."
    },
    {
        question: "In the context of information commodities, what does 'value addition' refer to?",
        options: [
            "The value of information increases when processed or combined with other data",
            "The cost of producing information decreases over time",
            "Information becomes more valuable when kept secret",
            "The price of information commodities always increases"
        ],
        correctAnswer: 0,
        explanation: "Value addition refers to how the value of information often increases when it is processed, analyzed, or combined with other data. For instance, raw data becomes more valuable when transformed into actionable insights through analysis."
    },
    {
        question: "Which of the following is an example of administrative data?",
        options: [
            "Billing information",
            "Lab results",
            "Medical history",
            "Treatment plans"
        ],
        correctAnswer: 0,
        explanation: "Billing information is an example of administrative data, which includes information related to healthcare operations such as billing, insurance claims, and patient demographics."
    },
    {
        question: "What is the main purpose of data warehousing in health information systems?",
        options: [
            "Aggregating data from disparate sources for comprehensive analysis",
            "Storing paper medical records securely",
            "Backing up data in case of system failure",
            "Encrypting sensitive patient information"
        ],
        correctAnswer: 0,
        explanation: "Data warehousing involves aggregating data from disparate sources into a central repository for comprehensive analysis, enabling healthcare organizations to gain insights from integrated data sets."
    },
    {
        question: "Which theory emphasizes that behavioral intentions are the best predictors of actual behavior?",
        options: [
            "Theory of Reasoned Action",
            "Technology Acceptance Theory",
            "Information Perception Constraint Theory",
            "Shannon and Weaver's Theory"
        ],
        correctAnswer: 0,
        explanation: "The Theory of Reasoned Action (and its extension, the Theory of Planned Behavior) emphasizes that behavioral intentions are the best predictors of actual behavior, with intentions influenced by attitudes and subjective norms."
    },
    {
        question: "What is the primary benefit of interoperability in health information systems?",
        options: [
            "Seamless communication and data sharing between different systems",
            "Faster processing of individual patient records",
            "Reduced storage requirements for health data",
            "Automatic updating of medical knowledge"
        ],
        correctAnswer: 0,
        explanation: "Interoperability enables seamless communication and data sharing between different health information systems, ensuring that healthcare providers can access and understand patient information regardless of the system used."
    },
    {
        question: "Which component of Shannon and Weaver's model converts messages into signals?",
        options: [
            "Transmitter",
            "Receiver",
            "Channel",
            "Information Source"
        ],
        correctAnswer: 0,
        explanation: "In Shannon and Weaver's model, the Transmitter is the component that converts the message into signals suitable for transmission through the channel."
    },
    {
        question: "What is the main application of natural language processing (NLP) in health information science?",
        options: [
            "Understanding and analyzing human language in clinical notes",
            "Encrypting patient communications",
            "Translating medical terms between languages",
            "Generating automated responses to patient queries"
        ],
        correctAnswer: 0,
        explanation: "Natural Language Processing (NLP) techniques allow computers to understand and analyze human language in clinical notes and research articles, enabling extraction of meaningful information from unstructured text."
    },
    {
        question: "Which of the following is a key challenge in implementing Automated Health Information Management Systems?",
        options: [
            "User adoption and training",
            "Lack of available technology",
            "Too many options to choose from",
            "Decreased need for healthcare professionals"
        ],
        correctAnswer: 0,
        explanation: "User adoption is a key challenge in implementing Automated HIMS, as ensuring that staff are trained and comfortable with the new system is crucial for successful implementation and utilization."
    },
    {
        question: "What does the 'completeness' attribute of health information ensure?",
        options: [
            "All necessary data is included for a comprehensive view",
            "Information is always 100% accurate",
            "Data is stored in multiple locations",
            "Information is available in multiple languages"
        ],
        correctAnswer: 0,
        explanation: "Completeness ensures that all necessary data is included, providing a comprehensive view of a patient's health status and medical history, which is essential for accurate diagnosis and treatment."
    },
    {
        question: "Which theory/model focuses on the relationship between information science and medical disciplines?",
        options: [
            "The relationship of information science to other disciplines",
            "Technology Acceptance Theory",
            "Information Perception Constraint Theory",
            "DIKW Pyramid"
        ],
        correctAnswer: 0,
        explanation: "The relationship of information science to other disciplines in medical and allied health sciences explores how information science provides tools and methodologies that enhance quality of care, improve patient outcomes, and support research across healthcare fields."
    },
    {
        question: "What is the primary purpose of patient portals in health information systems?",
        options: [
            "Allowing patients to access their health information and communicate with providers",
            "Storing patient medical records securely",
            "Processing insurance claims automatically",
            "Scheduling staff shifts efficiently"
        ],
        correctAnswer: 0,
        explanation: "Patient portals are platforms that allow patients to access their health information, schedule appointments, and communicate with healthcare providers, fostering active participation in their care."
    },
    {
        question: "Which of the following is an example of health technology information?",
        options: [
            "Data from wearable devices",
            "Paper medical records",
            "Verbal patient histories",
            "Handwritten prescription notes"
        ],
        correctAnswer: 0,
        explanation: "Data from wearable devices is an example of health technology information, which includes data generated from health information technologies like electronic health records, health apps, and telemedicine platforms."
    },
    {
        question: "What is the main difference between a theory and a model in scientific inquiry?",
        options: [
            "A theory explains why things happen, while a model shows how things happen",
            "A theory is always correct, while a model is speculative",
            "A theory is mathematical, while a model is conceptual",
            "A theory is simple, while a model is complex"
        ],
        correctAnswer: 0,
        explanation: "The key difference is that a theory provides a well-substantiated explanation of why things happen, while a model offers a simplified representation to show how things happen or to visualize relationships."
    },
    {
        question: "Which component of Brooke's Model involves the interpretation of information?",
        options: [
            "Processing",
            "Input",
            "Output",
            "Context"
        ],
        correctAnswer: 0,
        explanation: "In Brooke's Model, the Processing component involves the interpretation and understanding of information based on individual and contextual factors, leading to Output (decisions or actions)."
    },
    {
        question: "What is the primary goal of data visualization in health information science?",
        options: [
            "Creating visual representations to facilitate understanding and decision-making",
            "Making health data more aesthetically pleasing",
            "Reducing the amount of data that needs to be stored",
            "Converting all data into images"
        ],
        correctAnswer: 0,
        explanation: "Data visualization creates visual representations of health data (through dashboards, charts, graphs, etc.) to facilitate easier understanding and decision-making for healthcare providers."
    },
    {
        question: "Which of the following is a key feature of data operations in Automated HIM systems?",
        options: [
            "Data encryption and access controls",
            "Manual data entry by healthcare professionals",
            "Paper-based record keeping",
            "Verbal communication of patient information"
        ],
        correctAnswer: 0,
        explanation: "Data encryption and access controls are key features of data operations in Automated HIM systems, ensuring the security and privacy of sensitive health information."
    },
    {
        question: "What does the 'relevance' attribute of health information ensure?",
        options: [
            "Information is pertinent to the patient's care and specific context",
            "Information is always the most recent available",
            "Information comes from reputable sources",
            "Information is complete in all aspects"
        ],
        correctAnswer: 0,
        explanation: "Relevance ensures that the information provided is pertinent to the patient's care and the specific context in which it is used, preventing information overload and focusing on what matters for decision-making."
    },
    {
        question: "Which theory/model is particularly useful for understanding how patients perceive health information?",
        options: [
            "Information Perception Constraint Theory",
            "Technology Acceptance Theory",
            "Shannon and Weaver's Theory",
            "Brooke's Model of Information"
        ],
        correctAnswer: 0,
        explanation: "Information Perception Constraint Theory is particularly useful in healthcare for understanding how patients perceive health information, considering constraints like cognitive load, health literacy, and contextual factors that affect interpretation."
    }
];

// Quiz state
let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;
let questions = [];

// DOM elements
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const currentQuestionElement = document.getElementById('current-question');
const totalQuestionsElement = document.getElementById('total-questions');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const quizContent = document.getElementById('quiz-content');
const resultsContainer = document.getElementById('results-container');
const scoreValue = document.getElementById('score-value');
const reviewBtn = document.getElementById('review-btn');
const restartBtn = document.getElementById('restart-btn');
const answerReview = document.getElementById('answer-review');

// Initialize quiz
function initQuiz() {
    // Select 10 random questions
    questions = getRandomQuestions(cbtQuestions, 10);
    userAnswers = new Array(questions.length).fill(null);
    
    // Update UI
    totalQuestionsElement.textContent = questions.length;
    currentQuestionElement.textContent = currentQuestionIndex + 1;
    
    // Display first question
    displayQuestion();
    
    // Set up event listeners
    prevBtn.addEventListener('click', goToPreviousQuestion);
    nextBtn.addEventListener('click', goToNextQuestion);
    submitBtn.addEventListener('click', submitQuiz);
    reviewBtn.addEventListener('click', showAnswerReview);
    restartBtn.addEventListener('click', restartQuiz);
}

// Get random questions from the pool
function getRandomQuestions(questionPool, count) {
    const shuffled = [...questionPool].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Display current question
function displayQuestion() {
    const question = questions[currentQuestionIndex];
    
    questionText.textContent = question.question;
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        if (userAnswers[currentQuestionIndex] === index) {
            optionElement.classList.add('selected');
        }
        optionElement.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
        optionElement.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optionElement);
    });
    
    // Update navigation buttons
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.style.display = currentQuestionIndex < questions.length - 1 ? 'block' : 'none';
    submitBtn.style.display = currentQuestionIndex === questions.length - 1 ? 'block' : 'none';
    
    // Update progress
    currentQuestionElement.textContent = currentQuestionIndex + 1;
}

// Select an option
function selectOption(optionIndex) {
    userAnswers[currentQuestionIndex] = optionIndex;
    displayQuestion(); // Refresh to show selection
}

// Navigate to previous question
function goToPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

// Navigate to next question
function goToNextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    }
}

// Submit quiz and show results
function submitQuiz() {
    // Calculate score
    score = 0;
    questions.forEach((question, index) => {
        if (userAnswers[index] === question.correctAnswer) {
            score++;
        }
    });
    
    // Show results
    quizContent.classList.add('hidden');
    resultsContainer.classList.remove('hidden');
    scoreValue.textContent = score;
}

// Show answer review
function showAnswerReview() {
    answerReview.innerHTML = '';
    
    questions.forEach((question, index) => {
        const reviewItem = document.createElement('div');
        reviewItem.className = 'review-item';
        
        const questionElement = document.createElement('div');
        questionElement.className = 'review-question';
        questionElement.textContent = `${index + 1}. ${question.question}`;
        reviewItem.appendChild(questionElement);
        
        const userAnswerElement = document.createElement('div');
        userAnswerElement.className = 'review-answer';
        const userAnswerIndex = userAnswers[index];
        const isCorrect = userAnswerIndex === question.correctAnswer;
        
        userAnswerElement.innerHTML = `
            <strong>Your answer:</strong> 
            <span style="color: ${isCorrect ? 'green' : 'red'}">
                ${userAnswerIndex !== null ? 
                  `${String.fromCharCode(65 + userAnswerIndex)}. ${question.options[userAnswerIndex]}` : 
                  'Not answered'}
            </span>
        `;
        reviewItem.appendChild(userAnswerElement);
        
        if (!isCorrect) {
            const correctAnswerElement = document.createElement('div');
            correctAnswerElement.className = 'review-answer';
            correctAnswerElement.innerHTML = `
                <strong>Correct answer:</strong> 
                <span style="color: green">
                    ${String.fromCharCode(65 + question.correctAnswer)}. ${question.options[question.correctAnswer]}
                </span>
            `;
            reviewItem.appendChild(correctAnswerElement);
        }
        
        const explanationElement = document.createElement('div');
        explanationElement.className = 'explanation';
        explanationElement.innerHTML = `
            <h4>Explanation:</h4>
            <p>${question.explanation}</p>
        `;
        reviewItem.appendChild(explanationElement);
        
        answerReview.appendChild(reviewItem);
    });
    
    answerReview.classList.remove('hidden');
    reviewBtn.style.display = 'none';
}

// Restart quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    userAnswers = [];
    score = 0;
    
    // Select new random questions
    questions = getRandomQuestions(cbtQuestions, 10);
    userAnswers = new Array(questions.length).fill(null);
    
    // Reset UI
    quizContent.classList.remove('hidden');
    resultsContainer.classList.add('hidden');
    answerReview.classList.add('hidden');
    reviewBtn.style.display = 'block';
    
    displayQuestion();
}

// Initialize quiz when page loads
document.addEventListener('DOMContentLoaded', initQuiz);