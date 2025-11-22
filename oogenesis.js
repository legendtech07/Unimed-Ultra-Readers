// Quiz State Management
let quizState = {
    mode: null,
    questions: [],
    currentQuestions: [],
    currentQuestionIndex: 0,
    userAnswers: [],
    score: 0,
    startTime: null,
    timerInterval: null
};

// DOM Elements
const elements = {
    startScreen: document.getElementById('start-screen'),
    quizScreen: document.getElementById('quiz-screen'),
    resultsScreen: document.getElementById('results-screen'),
    quizTitle: document.getElementById('quiz-title'),
    modeDisplay: document.getElementById('mode-display'),
    progress: document.getElementById('progress'),
    timer: document.getElementById('timer'),
    modeDescription: document.getElementById('mode-description'),
    startBtn: document.getElementById('start-btn'),
    questionNumber: document.getElementById('question-number'),
    questionText: document.getElementById('question-text'),
    cbtOptions: document.getElementById('cbt-options'),
    fillGapContainer: document.getElementById('fill-gap-container'),
    fillAnswer: document.getElementById('fill-answer'),
    prevBtn: document.getElementById('prev-btn'),
    nextBtn: document.getElementById('next-btn'),
    submitBtn: document.getElementById('submit-btn'),
    scorePercent: document.getElementById('score-percent'),
    scoreText: document.getElementById('score-text'),
    answersReview: document.getElementById('answers-review'),
    restartBtn: document.getElementById('restart-btn'),
    changeModeBtn: document.getElementById('change-mode-btn')
};

// Initialize Quiz
function initQuiz() {
    const urlParams = new URLSearchParams(window.location.search);
    quizState.mode = urlParams.get('mode');
    
    if (!['cbt', 'fill'].includes(quizState.mode)) {
        window.location.href = 'index.html';
        return;
    }
    
    setupQuizMode();
    setupEventListeners();
}

// Setup Quiz Mode
function setupQuizMode() {
    const modeConfig = {
        cbt: {
            title: 'Computer Based Test',
            description: 'Answer 10 multiple choice questions about embryology.',
            questions: cbtQuestions
        },
        fill: {
            title: 'Fill in the Gap',
            description: 'Complete 10 fill-in-the-blank sentences about embryology.',
            questions: fillGapQuestions
        }
    };
    
    const config = modeConfig[quizState.mode];
    elements.quizTitle.textContent = config.title;
    elements.modeDisplay.textContent = `Mode: ${config.title}`;
    elements.modeDescription.textContent = config.description;
    quizState.questions = config.questions;
}

// Event Listeners
function setupEventListeners() {
    elements.startBtn.addEventListener('click', startQuiz);
    elements.prevBtn.addEventListener('click', previousQuestion);
    elements.nextBtn.addEventListener('click', nextQuestion);
    elements.submitBtn.addEventListener('click', submitQuiz);
    elements.restartBtn.addEventListener('click', restartQuiz);
    elements.changeModeBtn.addEventListener('click', () => {
        window.location.href = 'oogenesis-main.html';
    });
    
    elements.fillAnswer.addEventListener('input', saveFillAnswer);
}

// Start Quiz
function startQuiz() {
    // Select 10 random questions
    quizState.currentQuestions = getRandomQuestions(quizState.questions, 10);
    quizState.userAnswers = new Array(quizState.currentQuestions.length).fill(null);
    
    // Start timer
    quizState.startTime = new Date();
    startTimer();
    
    // Show quiz screen
    showScreen('quiz-screen');
    displayQuestion(0);
}

// Get Random Questions
function getRandomQuestions(questions, count) {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Timer Functions
function startTimer() {
    updateTimer();
    quizState.timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    if (!quizState.startTime) return;
    
    const now = new Date();
    const diff = Math.floor((now - quizState.startTime) / 1000);
    const minutes = Math.floor(diff / 60);
    const seconds = diff % 60;
    
    elements.timer.textContent = `Time: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Display Question
function displayQuestion(index) {
    quizState.currentQuestionIndex = index;
    const question = quizState.currentQuestions[index];
    
    // Update progress
    elements.progress.textContent = `Question: ${index + 1}/${quizState.currentQuestions.length}`;
    elements.questionNumber.textContent = `Question ${index + 1}`;
    
    // Show/hide appropriate containers
    if (quizState.mode === 'cbt') {
        elements.cbtOptions.style.display = 'block';
        elements.fillGapContainer.style.display = 'none';
        displayCBTOptions(question);
    } else {
        elements.cbtOptions.style.display = 'none';
        elements.fillGapContainer.style.display = 'block';
        displayFillGap(question);
    }
    
    // Update navigation buttons
    elements.prevBtn.style.display = index > 0 ? 'block' : 'none';
    elements.nextBtn.style.display = index < quizState.currentQuestions.length - 1 ? 'block' : 'none';
    elements.submitBtn.style.display = index === quizState.currentQuestions.length - 1 ? 'block' : 'none';
    
    // Restore user answer
    restoreUserAnswer();
}

// Display CBT Options
function displayCBTOptions(question) {
    elements.questionText.innerHTML = question.question;
    elements.cbtOptions.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectOption(index));
        elements.cbtOptions.appendChild(optionElement);
    });
}

// Display Fill Gap
function displayFillGap(question) {
    elements.questionText.innerHTML = question.question;
    elements.fillAnswer.value = '';
}

// Select Option (CBT)
function selectOption(optionIndex) {
    const options = elements.cbtOptions.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected'));
    options[optionIndex].classList.add('selected');
    
    quizState.userAnswers[quizState.currentQuestionIndex] = optionIndex;
}

// Save Fill Answer
function saveFillAnswer() {
    quizState.userAnswers[quizState.currentQuestionIndex] = elements.fillAnswer.value.trim();
}

// Restore User Answer
function restoreUserAnswer() {
    const currentAnswer = quizState.userAnswers[quizState.currentQuestionIndex];
    
    if (quizState.mode === 'cbt') {
        const options = elements.cbtOptions.querySelectorAll('.option');
        options.forEach(option => option.classList.remove('selected'));
        if (currentAnswer !== null) {
            options[currentAnswer].classList.add('selected');
        }
    } else {
        elements.fillAnswer.value = currentAnswer || '';
    }
}

// Navigation
function previousQuestion() {
    if (quizState.currentQuestionIndex > 0) {
        displayQuestion(quizState.currentQuestionIndex - 1);
    }
}

function nextQuestion() {
    if (quizState.currentQuestionIndex < quizState.currentQuestions.length - 1) {
        displayQuestion(quizState.currentQuestionIndex + 1);
    }
}

// Submit Quiz
function submitQuiz() {
    clearInterval(quizState.timerInterval);
    calculateScore();
    showResults();
}

// Calculate Score
function calculateScore() {
    quizState.score = 0;
    
    quizState.currentQuestions.forEach((question, index) => {
        const userAnswer = quizState.userAnswers[index];
        
        if (quizState.mode === 'cbt') {
            if (userAnswer === question.correctAnswer) {
                quizState.score++;
            }
        } else {
            if (userAnswer && userAnswer.toLowerCase() === question.answer.toLowerCase()) {
                quizState.score++;
            }
        }
    });
}

// Show Results
function showResults() {
    showScreen('results-screen');
    
    const percentage = (quizState.score / quizState.currentQuestions.length) * 100;
    elements.scorePercent.textContent = `${percentage.toFixed(0)}%`;
    elements.scoreText.textContent = `${quizState.score} out of ${quizState.currentQuestions.length}`;
    
    // Update score circle
    const scoreCircle = document.querySelector('.score-circle');
    scoreCircle.style.background = `conic-gradient(var(--success) ${percentage}%, var(--light) ${percentage}%)`;
    
    // Display answers review
    displayAnswersReview();
}

// Display Answers Review
function displayAnswersReview() {
    elements.answersReview.innerHTML = '';
    
    quizState.currentQuestions.forEach((question, index) => {
        const userAnswer = quizState.userAnswers[index];
        const isCorrect = quizState.mode === 'cbt' 
            ? userAnswer === question.correctAnswer
            : userAnswer && userAnswer.toLowerCase() === question.answer.toLowerCase();
        
        const reviewElement = document.createElement('div');
        reviewElement.className = `answer-review ${isCorrect ? 'correct' : 'incorrect'}`;
        
        let answerHtml = `
            <div class="review-question">${question.question}</div>
            <div class="review-answer"><strong>Your answer:</strong> ${getAnswerText(question, userAnswer)}</div>
        `;
        
        if (!isCorrect) {
            answerHtml += `
                <div class="review-answer review-correct">
                    <strong>Correct answer:</strong> ${getCorrectAnswerText(question)}
                </div>
            `;
        }
        
        reviewElement.innerHTML = answerHtml;
        elements.answersReview.appendChild(reviewElement);
    });
}

// Get Answer Text
function getAnswerText(question, userAnswer) {
    if (quizState.mode === 'cbt') {
        return userAnswer !== null ? question.options[userAnswer] : 'No answer';
    } else {
        return userAnswer || 'No answer';
    }
}

// Get Correct Answer Text
function getCorrectAnswerText(question) {
    if (quizState.mode === 'cbt') {
        return question.options[question.correctAnswer];
    } else {
        return question.answer;
    }
}

// Restart Quiz
function restartQuiz() {
    quizState.currentQuestionIndex = 0;
    quizState.userAnswers = new Array(quizState.currentQuestions.length).fill(null);
    quizState.score = 0;
    
    // Get new random questions
    quizState.currentQuestions = getRandomQuestions(quizState.questions, 10);
    
    // Restart timer
    quizState.startTime = new Date();
    startTimer();
    
    showScreen('quiz-screen');
    displayQuestion(0);
}

// Show Screen
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initQuiz);
