// Questions data for fill in the gap
const fillQuestions = [
    {
        question: "Health Information Science is the study of how health ______ is collected, stored and communicated.",
        answer: "data",
        explanation: "Health Information Science focuses on the collection, storage, and communication of health data, which forms the foundation for healthcare decision-making and research."
    },
    {
        question: "The DIKW pyramid represents the progression from data to information, knowledge, and finally ______.",
        answer: "wisdom",
        explanation: "The DIKW pyramid illustrates how raw data becomes meaningful information, then knowledge, and ultimately wisdom - the highest level of understanding that enables sound judgment."
    },
    {
        question: "______ is a key attribute of health information that ensures it is correct and free from errors.",
        answer: "Accuracy",
        explanation: "Accuracy is crucial in health information to ensure proper diagnosis, treatment, and patient safety. Inaccurate information can lead to serious medical errors."
    },
    {
        question: "Information commodities are characterized by intangibility, non-rivalrous use, and ______.",
        answer: "reproducibility",
        explanation: "Reproducibility means information can be replicated at little to no cost, unlike physical goods which require resources for each copy."
    },
    {
        question: "In Shannon and Weaver's model, ______ refers to any interference that distorts the original message during transmission.",
        answer: "noise",
        explanation: "Noise in communication can be physical (static), semantic (language barriers), or psychological (prejudices), and it can distort the intended message."
    },
    {
        question: "Brooke's Model of Information emphasizes the importance of ______ in how information is interpreted.",
        answer: "context",
        explanation: "Context includes situational factors, cultural background, and individual experiences that shape how we interpret and understand information."
    },
    {
        question: "In Technology Acceptance Theory, ______ refers to the degree to which a person believes using technology will enhance their job performance.",
        answer: "Perceived Usefulness",
        explanation: "Perceived Usefulness is a key factor in technology adoption - if users don't see how a technology will help them, they're less likely to use it."
    },
    {
        question: "An Automated Health Information Management System streamlines the collection, storage, management, and ______ of health-related data.",
        answer: "retrieval",
        explanation: "Efficient retrieval of health information is crucial for timely patient care, research, and administrative functions in healthcare organizations."
    },
    {
        question: "______ ensures that health information can be easily shared and understood across different systems.",
        answer: "Interoperability",
        explanation: "Interoperability allows different health information systems to communicate effectively, enabling seamless care coordination across healthcare providers."
    },
    {
        question: "The ______ attribute of health information ensures it is protected from unauthorized access.",
        answer: "security",
        explanation: "Security measures like encryption, access controls, and audit trails protect sensitive health information from breaches and unauthorized access."
    },
    {
        question: "______ data includes information like medical history, medications, allergies, and immunizations.",
        answer: "Personal Health",
        explanation: "Personal Health data forms the core of an individual's health record and is essential for providing personalized, continuous care."
    },
    {
        question: "In the DIKW hierarchy, ______ is understanding derived from information.",
        answer: "knowledge",
        explanation: "Knowledge represents the ability to understand relationships and patterns in information, enabling informed decision-making in healthcare."
    },
    {
        question: "The ______ Act sets standards for protecting sensitive patient health information in the US.",
        answer: "HIPAA",
        explanation: "HIPAA (Health Insurance Portability and Accountability Act) establishes privacy and security rules for protecting health information."
    },
    {
        question: "______ data includes details collected during medical encounters, such as diagnoses and lab results.",
        answer: "Clinical",
        explanation: "Clinical data provides the evidence base for medical decision-making, treatment planning, and outcome measurement."
    },
    {
        question: "Information Perception Constraint Theory examines how ______ affect how individuals perceive information.",
        answer: "constraints",
        explanation: "Constraints can be cognitive (memory limitations), social (cultural norms), technological (device capabilities), or contextual (environmental factors)."
    },
    {
        question: "______ informatics focuses on using information science to improve nursing practice and patient care.",
        answer: "Nursing",
        explanation: "Nursing informatics integrates nursing science with information management to enhance patient care delivery and outcomes."
    },
    {
        question: "A ______ is a simplified representation used to explain, visualize, or predict specific phenomena.",
        answer: "model",
        explanation: "Models help us understand complex systems by focusing on key elements and relationships, making them easier to study and manipulate."
    },
    {
        question: "______ data includes statistics related to population health, disease outbreaks, and health trends.",
        answer: "Public Health",
        explanation: "Public health data enables monitoring of population health status, identifying health trends, and guiding public health interventions."
    },
    {
        question: "The ______ component of Shannon and Weaver's model converts signals back into the message.",
        answer: "receiver",
        explanation: "The receiver decodes the transmitted signals, reversing the encoding process done by the transmitter to reconstruct the original message."
    },
    {
        question: "______ refers to the extent to which a person believes that using technology will be free of effort.",
        answer: "Perceived Ease of Use",
        explanation: "Perceived Ease of Use significantly influences technology adoption - users prefer systems that are intuitive and require minimal training."
    },
    {
        question: "Health Information ______ enables the electronic exchange of health information among providers.",
        answer: "Exchange",
        explanation: "Health Information Exchange (HIE) improves care coordination by allowing different healthcare providers to securely share patient information."
    },
    {
        question: "______ constraints in Information Perception Theory refer to mental limitations like memory capacity.",
        answer: "Cognitive",
        explanation: "Cognitive constraints include limitations in attention, memory, and processing capacity that affect how much information we can handle at once."
    },
    {
        question: "______ data includes information related to healthcare operations, such as billing and insurance claims.",
        answer: "Administrative",
        explanation: "Administrative data supports the business functions of healthcare organizations, including billing, scheduling, and resource management."
    },
    {
        question: "The ______ attribute of health information ensures all necessary data is included.",
        answer: "completeness",
        explanation: "Complete health information provides a comprehensive view of a patient's status, reducing the risk of errors from missing data."
    },
    {
        question: "______ involves analyzing health data to extract meaningful insights for improving patient care.",
        answer: "Data Analysis",
        explanation: "Data analysis transforms raw health data into actionable insights that can improve clinical decision-making and healthcare outcomes."
    },
    {
        question: "In Brooke's Model, ______ involves the interpretation and understanding of information.",
        answer: "Processing",
        explanation: "Processing is where meaning is constructed from information, influenced by individual knowledge, experiences, and contextual factors."
    },
    {
        question: "______ ensures that health information is available when needed for prompt decision-making.",
        answer: "Timeliness",
        explanation: "Timely access to health information is critical in emergency situations and for ongoing treatment management in healthcare."
    },
    {
        question: "The ______ theory explains how users come to accept and use technology.",
        answer: "Technology Acceptance",
        explanation: "Technology Acceptance Theory (TAM) helps understand and predict user adoption of new technologies based on perceived usefulness and ease of use."
    },
    {
        question: "______ data is collected for scientific studies aimed at improving health outcomes.",
        answer: "Research",
        explanation: "Research data drives evidence-based medicine, enabling the development of new treatments and improvements in healthcare practices."
    },
    {
        question: "The ______ attribute ensures that health information is pertinent to the patient's care.",
        answer: "relevance",
        explanation: "Relevant information focuses on what matters for the current clinical situation, preventing information overload and supporting efficient decision-making."
    }
];

// Quiz state
let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;
let questions = [];

// DOM elements
const questionText = document.getElementById('question-text');
const fillInputContainer = document.getElementById('fill-input-container');
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
    questions = getRandomQuestions(fillQuestions, 10);
    userAnswers = new Array(questions.length).fill('');
    
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
    fillInputContainer.innerHTML = '';
    
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'fill-input';
    input.value = userAnswers[currentQuestionIndex];
    input.placeholder = 'Type your answer here...';
    input.addEventListener('input', (e) => {
        userAnswers[currentQuestionIndex] = e.target.value.trim();
    });
    
    fillInputContainer.appendChild(input);
    
    // Update navigation buttons
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.style.display = currentQuestionIndex < questions.length - 1 ? 'block' : 'none';
    submitBtn.style.display = currentQuestionIndex === questions.length - 1 ? 'block' : 'none';
    
    // Update progress
    currentQuestionElement.textContent = currentQuestionIndex + 1;
    
    // Focus on input
    input.focus();
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
        // Case-insensitive comparison, allowing for minor variations
        const userAnswer = userAnswers[index].toLowerCase().trim();
        const correctAnswer = question.answer.toLowerCase().trim();
        
        // Simple matching - in a real application, you might want more sophisticated matching
        if (userAnswer === correctAnswer) {
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
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer.toLowerCase().trim() === question.answer.toLowerCase().trim();
        
        userAnswerElement.innerHTML = `
            <strong>Your answer:</strong> 
            <span style="color: ${isCorrect ? 'green' : 'red'}">
                ${userAnswer || 'Not answered'}
            </span>
        `;
        reviewItem.appendChild(userAnswerElement);
        
        if (!isCorrect) {
            const correctAnswerElement = document.createElement('div');
            correctAnswerElement.className = 'review-answer';
            correctAnswerElement.innerHTML = `
                <strong>Correct answer:</strong> 
                <span style="color: green">
                    ${question.answer}
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
    questions = getRandomQuestions(fillQuestions, 10);
    userAnswers = new Array(questions.length).fill('');
    
    // Reset UI
    quizContent.classList.remove('hidden');
    resultsContainer.classList.add('hidden');
    answerReview.classList.add('hidden');
    reviewBtn.style.display = 'block';
    
    displayQuestion();
}

// Initialize quiz when page loads
document.addEventListener('DOMContentLoaded', initQuiz);