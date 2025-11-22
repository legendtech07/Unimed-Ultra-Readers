// Fill-in-the-Gap Questions
const fillQuestions = [
    {
        statement: "A health record is a document that captures everything important about a patient's __________ journey.",
        answer: "medical",
        explanation: "Health records document the patient's medical journey, including illnesses, treatments, and outcomes of care."
    },
    {
        statement: "The __________ section of a health record contains personal data like name, date of birth, and address.",
        answer: "identification",
        explanation: "The identification and demographic section contains personal data that uniquely identifies the patient."
    },
    {
        statement: "A good health record must have __________ identification to ensure information belongs to the correct person.",
        answer: "clear",
        explanation: "Clear identification prevents errors in treatment by ensuring information is associated with the correct patient."
    },
    {
        statement: "Health records used for individual patient care are considered __________ use.",
        answer: "personal",
        explanation: "Personal use refers to health records directly tied to an individual patient for their care."
    },
    {
        statement: "Health records provide value to __________ by serving as practical tools for teaching medical students.",
        answer: "educators",
        explanation: "Educators use health records as practical teaching tools with real-life examples of medical conditions."
    },
    {
        statement: "__________ is the specialized field that ensures accurate and secure collection of patient health information.",
        answer: "Health Information Management",
        explanation: "Health Information Management (HIM) combines healthcare, technology, and management to handle patient health information."
    },
    {
        statement: "Clinical __________ involves assigning standardized codes to diagnoses and procedures.",
        answer: "coding",
        explanation: "Clinical coding uses classification systems like ICD to support billing, insurance claims, and data analysis."
    },
    {
        statement: "The __________ principle of HIM practice requires protecting patient information from unauthorized access.",
        answer: "confidentiality",
        explanation: "Confidentiality ensures patient information is private and shared only with authorized personnel."
    },
    {
        statement: "In Nigeria, HIM practice is regulated by the __________.",
        answer: "Health Records Officers' Registration Board of Nigeria",
        explanation: "HRORBN is the Federal Government agency established to control and regulate HIM practice in Nigeria."
    },
    {
        statement: "The __________ Papyrus is among the oldest known medical documents from ancient Egypt.",
        answer: "Ebers",
        explanation: "The Ebers Papyrus, dating to 1500 B.C., lists prescriptions and treatments from ancient Egypt."
    },
    {
        statement: "__________ is often referred to as the 'Father of Medicine'.",
        answer: "Hippocrates",
        explanation: "Hippocrates developed ethical and practical frameworks for healthcare that persist to this day."
    },
    {
        statement: "In the __________ numbering system, a patient receives a new number each time they visit the hospital.",
        answer: "serial",
        explanation: "Serial numbering assigns a new number for each patient visit or admission."
    },
    {
        statement: "The __________ numbering system maintains all patient records under one permanent number.",
        answer: "unit",
        explanation: "Unit numbering uses one number per patient forever, with all records filed together."
    },
    {
        statement: "__________ filing uses a six-digit number divided into primary, secondary, and tertiary digits.",
        answer: "Terminal digit",
        explanation: "Terminal digit filing organizes records by the last two digits (primary), then middle two (secondary), then first two (tertiary)."
    },
    {
        statement: "The __________ serves as an alphabetical key reference to numerically filed patient records.",
        answer: "Master Patient Index",
        explanation: "The MPI is a comprehensive repository that helps locate patient records alphabetically."
    },
    {
        statement: "In Nigeria, adult patient records are typically retained for __________ years after the last treatment.",
        answer: "10",
        explanation: "Nigerian guidelines often require retaining adult patient records for 10 years after the last treatment."
    },
    {
        statement: "__________ involves cutting paper-based records into small, unreadable fragments.",
        answer: "Shredding",
        explanation: "Shredding ensures patient information cannot be reconstructed after destruction."
    },
    {
        statement: "__________ is the process of capturing documents on photographic film at a reduced size.",
        answer: "Microfilming",
        explanation: "Microfilming archives records in a space-efficient format for long-term preservation."
    },
    {
        statement: "The __________ section of health records includes medical history, diagnoses, and treatment details.",
        answer: "clinical",
        explanation: "The clinical section is the most comprehensive part, documenting the patient's medical care."
    },
    {
        statement: "__________ retrievability means health records must be easily accessible when needed.",
        answer: "Prompt",
        explanation: "Prompt retrievability ensures records are available for emergency care, follow-up, or administrative purposes."
    },
    {
        statement: "Health records used for tracking disease outbreaks are an example of __________ use.",
        answer: "impersonal",
        explanation: "Impersonal use involves broader purposes like research or public health surveillance with identifiers removed."
    },
    {
        statement: "Health records provide value to __________ by offering reliable data for case studies.",
        answer: "researchers",
        explanation: "Researchers use health records for scientific studies on diseases, treatments, and outcomes."
    },
    {
        statement: "HIM professionals ensure __________ by controlling access to health records.",
        answer: "security",
        explanation: "Access and security management ensures only authorized personnel can view patient information."
    },
    {
        statement: "The __________ principle requires HIM professionals to stay current with knowledge and skills.",
        answer: "professional competence",
        explanation: "Professional competence involves continuing education to maintain and update HIM knowledge."
    },
    {
        statement: "According to HIM ethics, professionals should place __________ before material gain.",
        answer: "service",
        explanation: "The code of ethics emphasizes service before material gain and patient welfare above all."
    },
    {
        statement: "During the __________ period, monasteries became centers for healing with rudimentary records.",
        answer: "medieval",
        explanation: "After Rome's fall, religious institutions maintained healthcare and basic record-keeping during the Medieval period."
    },
    {
        statement: "The 19th century saw the __________ of medical records management.",
        answer: "professionalization",
        explanation: "The 19th century marked the professionalization of medical records with standardized data collection."
    },
    {
        statement: "__________ digit filing organizes records by the middle pairs of digits in a six-digit number.",
        answer: "Middle",
        explanation: "Middle digit filing uses the middle pair as primary digits, with left and right pairs as secondary and tertiary."
    },
    {
        statement: "The MPI helps reduce __________ of records by ensuring existing records are updated.",
        answer: "duplication",
        explanation: "The MPI prevents creating multiple records for the same patient by identifying repeat visits."
    },
    {
        statement: "__________ involves the controlled burning of paper-based health records.",
        answer: "Incineration",
        explanation: "Incineration guarantees total destruction of physical records through high-temperature burning."
    }
];

// Quiz State
let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;
let quizCompleted = false;

// DOM Elements
const quizContent = document.getElementById('quiz-content');
const currentQuestionElement = document.getElementById('current-question');
const totalQuestionsElement = document.getElementById('total-questions');
const scoreElement = document.getElementById('score');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');

// Initialize Quiz
function initQuiz() {
    // Select 10 random questions
    const selectedQuestions = [];
    const questionIndices = new Set();
    
    while (questionIndices.size < 10) {
        const randomIndex = Math.floor(Math.random() * fillQuestions.length);
        questionIndices.add(randomIndex);
    }
    
    questionIndices.forEach(index => {
        selectedQuestions.push(fillQuestions[index]);
    });
    
    // Update global questions array
    window.quizQuestions = selectedQuestions;
    
    // Initialize user answers array
    userAnswers = new Array(selectedQuestions.length).fill('');
    
    // Update UI
    totalQuestionsElement.textContent = selectedQuestions.length;
    currentQuestionElement.textContent = currentQuestionIndex + 1;
    scoreElement.textContent = score;
    
    // Display first question
    displayQuestion(currentQuestionIndex);
    
    // Set up event listeners
    prevBtn.addEventListener('click', goToPreviousQuestion);
    nextBtn.addEventListener('click', goToNextQuestion);
    submitBtn.addEventListener('click', submitQuiz);
}

// Display Question
function displayQuestion(index) {
    const question = window.quizQuestions[index];
    
    // Split the statement to find where to place the input
    const statementParts = question.statement.split('__________');
    
    quizContent.innerHTML = `
        <div class="question-container">
            <div class="question-number">Question ${index + 1}</div>
            <div class="question-text">
                ${statementParts[0]}
                <input type="text" class="fill-input" id="fill-answer" value="${userAnswers[index]}" placeholder="Your answer">
                ${statementParts[1]}
            </div>
            <div class="hint">Hint: The answer is a single word or short phrase</div>
        </div>
    `;
    
    // Add event listener to input
    const inputElement = document.getElementById('fill-answer');
    inputElement.addEventListener('input', (e) => {
        userAnswers[index] = e.target.value.trim();
        updateNavigationButtons();
    });
    
    // Focus on input
    inputElement.focus();
    
    // Update navigation buttons
    updateNavigationButtons();
}

// Update Navigation Buttons
function updateNavigationButtons() {
    prevBtn.disabled = currentQuestionIndex === 0;
    
    if (currentQuestionIndex < window.quizQuestions.length - 1) {
        nextBtn.disabled = userAnswers[currentQuestionIndex] === '';
        submitBtn.style.display = 'none';
        nextBtn.style.display = 'inline-block';
    } else {
        nextBtn.disabled = true;
        nextBtn.style.display = 'none';
        submitBtn.style.display = userAnswers[currentQuestionIndex] !== '' ? 'inline-block' : 'none';
    }
}

// Go to Previous Question
function goToPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        currentQuestionElement.textContent = currentQuestionIndex + 1;
        displayQuestion(currentQuestionIndex);
    }
}

// Go to Next Question
function goToNextQuestion() {
    if (currentQuestionIndex < window.quizQuestions.length - 1) {
        currentQuestionIndex++;
        currentQuestionElement.textContent = currentQuestionIndex + 1;
        displayQuestion(currentQuestionIndex);
    }
}

// Submit Quiz
function submitQuiz() {
    quizCompleted = true;
    
    // Calculate score (case-insensitive comparison)
    score = 0;
    window.quizQuestions.forEach((question, index) => {
        if (userAnswers[index].toLowerCase() === question.answer.toLowerCase()) {
            score++;
        }
    });
    
    // Display results
    displayResults();
}

// Display Results
function displayResults() {
    let resultsHTML = `
        <div class="results-container">
            <div class="results-header">
                <h2>Quiz Results</h2>
            </div>
            <div class="score ${getScoreClass(score)}">
                Your Score: ${score}/${window.quizQuestions.length}
            </div>
            <div class="review-section">
                <h3>Review Your Answers</h3>
    `;
    
    window.quizQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer.toLowerCase() === question.answer.toLowerCase();
        const statementParts = question.statement.split('__________');
        
        resultsHTML += `
            <div class="review-item">
                <div class="review-question">
                    ${index + 1}. ${statementParts[0]}
                    <span style="font-weight: bold; color: ${isCorrect ? 'green' : 'red'}">"${userAnswer || 'Not answered'}"</span>
                    ${statementParts[1]}
                </div>
                ${!isCorrect ? `
                    <div class="review-answer correct">
                        Correct answer: <strong>${question.answer}</strong>
                    </div>
                ` : ''}
                <div class="review-explanation">
                    <strong>Explanation:</strong> ${question.explanation}
                </div>
            </div>
        `;
    });
    
    resultsHTML += `
            </div>
        </div>
    `;
    
    quizContent.innerHTML = resultsHTML;
    
    // Hide navigation buttons
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    submitBtn.style.display = 'none';
}

// Get Score Class for Styling
function getScoreClass(score) {
    const percentage = (score / window.quizQuestions.length) * 100;
    
    if (percentage >= 80) return 'excellent';
    if (percentage >= 60) return 'good';
    if (percentage >= 40) return 'average';
    return 'poor';
}

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', initQuiz);