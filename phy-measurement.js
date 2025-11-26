// Quiz application state
const quizState = {
    currentTest: 1,
    currentQuestion: 0,
    userAnswers: [],
    startTime: null,
    timerInterval: null,
    timeElapsed: 0,
    testScores: JSON.parse(localStorage.getItem('testScores')) || {}
};

// DOM Elements
const sections = {
    home: document.getElementById('home'),
    quiz: document.getElementById('quiz'),
    results: document.getElementById('results')
};

const homeElements = {
    testCards: document.querySelectorAll('.test-card'),
    progressCards: document.querySelector('.progress-cards')
};

const quizElements = {
    testTitle: document.getElementById('test-title'),
    questionCounter: document.getElementById('question-counter'),
    timer: document.getElementById('timer'),
    questionText: document.getElementById('question-text'),
    options: document.querySelector('.options'),
    prevBtn: document.getElementById('prev-btn'),
    nextBtn: document.getElementById('next-btn'),
    submitBtn: document.getElementById('submit-btn')
};

const resultsElements = {
    scorePercent: document.getElementById('score-percent'),
    scoreText: document.getElementById('score-text'),
    correctAnswers: document.getElementById('correct-answers'),
    incorrectAnswers: document.getElementById('incorrect-answers'),
    timeTaken: document.getElementById('time-taken'),
    questionsReview: document.querySelector('.questions-review'),
    retryBtn: document.getElementById('retry-btn'),
    newTestBtn: document.getElementById('new-test-btn'),
    homeBtn: document.getElementById('home-btn')
};

// Initialize the application
function init() {
    setupEventListeners();
    updateProgressSummary();
    showSection('home');
}

// Set up event listeners
function setupEventListeners() {
    // Test selection
    homeElements.testCards.forEach(card => {
        const startBtn = card.querySelector('.start-btn');
        startBtn.addEventListener('click', () => {
            const testNumber = parseInt(card.getAttribute('data-test'));
            startTest(testNumber);
        });
    });

    // Quiz navigation
    quizElements.prevBtn.addEventListener('click', goToPreviousQuestion);
    quizElements.nextBtn.addEventListener('click', goToNextQuestion);
    quizElements.submitBtn.addEventListener('click', submitTest);

    // Results actions
    resultsElements.retryBtn.addEventListener('click', retryTest);
    resultsElements.newTestBtn.addEventListener('click', () => showSection('home'));
    resultsElements.homeBtn.addEventListener('click', () => showSection('home'));
}

// Show a specific section and hide others
function showSection(sectionName) {
    Object.keys(sections).forEach(key => {
        sections[key].classList.remove('active');
    });
    sections[sectionName].classList.add('active');
}

// Start a test
function startTest(testNumber) {
    quizState.currentTest = testNumber;
    quizState.currentQuestion = 0;
    quizState.userAnswers = new Array(10).fill(null);
    quizState.startTime = new Date();
    quizState.timeElapsed = 0;
    
    // Set test title
    const testTitles = [
        "Physics Fundamentals & SI Units",
        "Length, Mass & Time",
        "Density & Atomic Mass",
        "Dimensional Analysis",
        "Unit Conversion & Estimation"
    ];
    quizElements.testTitle.textContent = `Test ${testNumber}: ${testTitles[testNumber-1]}`;
    
    // Start timer
    startTimer();
    
    // Load first question
    loadQuestion();
    
    // Show quiz section
    showSection('quiz');
}

// Start the quiz timer
function startTimer() {
    // Clear any existing timer
    if (quizState.timerInterval) {
        clearInterval(quizState.timerInterval);
    }
    
    // Update timer every second
    quizState.timerInterval = setInterval(() => {
        quizState.timeElapsed++;
        const minutes = Math.floor(quizState.timeElapsed / 60);
        const seconds = quizState.timeElapsed % 60;
        quizElements.timer.textContent = `Time: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
}

// Load the current question
function loadQuestion() {
    const questions = allQuestions.filter(q => q.test === quizState.currentTest);
    const question = questions[quizState.currentQuestion];
    
    // Update question counter
    quizElements.questionCounter.textContent = `Question ${quizState.currentQuestion + 1} of 10`;
    
    // Set question text
    quizElements.questionText.textContent = question.question;
    
    // Clear and populate options
    quizElements.options.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        if (quizState.userAnswers[quizState.currentQuestion] === index) {
            optionElement.classList.add('selected');
        }
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectOption(index));
        quizElements.options.appendChild(optionElement);
    });
    
    // Update navigation buttons
    quizElements.prevBtn.disabled = quizState.currentQuestion === 0;
    quizElements.nextBtn.disabled = quizState.currentQuestion === 9;
    quizElements.submitBtn.style.display = quizState.currentQuestion === 9 ? 'block' : 'none';
}

// Select an option for the current question
function selectOption(optionIndex) {
    quizState.userAnswers[quizState.currentQuestion] = optionIndex;
    
    // Update UI to show selected option
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        if (index === optionIndex) {
            option.classList.add('selected');
        } else {
            option.classList.remove('selected');
        }
    });
}

// Go to the previous question
function goToPreviousQuestion() {
    if (quizState.currentQuestion > 0) {
        quizState.currentQuestion--;
        loadQuestion();
    }
}

// Go to the next question
function goToNextQuestion() {
    if (quizState.currentQuestion < 9) {
        quizState.currentQuestion++;
        loadQuestion();
    }
}

// Submit the test and show results
function submitTest() {
    // Clear timer
    clearInterval(quizState.timerInterval);
    
    // Calculate score
    const questions = allQuestions.filter(q => q.test === quizState.currentTest);
    let correctCount = 0;
    
    questions.forEach((question, index) => {
        if (quizState.userAnswers[index] === question.correct) {
            correctCount++;
        }
    });
    
    const score = (correctCount / 10) * 100;
    
    // Save score
    if (!quizState.testScores[quizState.currentTest]) {
        quizState.testScores[quizState.currentTest] = [];
    }
    quizState.testScores[quizState.currentTest].push({
        score: score,
        date: new Date().toISOString(),
        time: quizState.timeElapsed
    });
    
    // Limit to last 5 attempts per test
    if (quizState.testScores[quizState.currentTest].length > 5) {
        quizState.testScores[quizState.currentTest].shift();
    }
    
    // Save to localStorage
    localStorage.setItem('testScores', JSON.stringify(quizState.testScores));
    
    // Display results
    displayResults(score, correctCount, questions);
    
    // Show results section
    showSection('results');
}

// Display test results
function displayResults(score, correctCount, questions) {
    // Update score display
    resultsElements.scorePercent.textContent = `${Math.round(score)}%`;
    resultsElements.scoreText.textContent = `${correctCount}/10`;
    
    // Update results details
    resultsElements.correctAnswers.textContent = correctCount;
    resultsElements.incorrectAnswers.textContent = 10 - correctCount;
    
    // Format time taken
    const minutes = Math.floor(quizState.timeElapsed / 60);
    const seconds = quizState.timeElapsed % 60;
    resultsElements.timeTaken.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    // Create question review
    resultsElements.questionsReview.innerHTML = '';
    questions.forEach((question, index) => {
        const isCorrect = quizState.userAnswers[index] === question.correct;
        const reviewItem = document.createElement('div');
        reviewItem.className = `question-review ${isCorrect ? 'correct' : 'incorrect'}`;
        
        const questionText = document.createElement('div');
        questionText.className = 'review-question';
        questionText.textContent = `${index + 1}. ${question.question}`;
        
        const userAnswer = document.createElement('div');
        userAnswer.className = 'review-answer';
        userAnswer.textContent = `Your answer: ${question.options[quizState.userAnswers[index]] || 'Not answered'}`;
        
        const correctAnswer = document.createElement('div');
        correctAnswer.className = 'review-correct';
        correctAnswer.textContent = `Correct answer: ${question.options[question.correct]}`;
        
        const explanation = document.createElement('div');
        explanation.className = 'review-explanation';
        explanation.textContent = question.explanation;
        
        reviewItem.appendChild(questionText);
        reviewItem.appendChild(userAnswer);
        if (!isCorrect) {
            reviewItem.appendChild(correctAnswer);
        }
        reviewItem.appendChild(explanation);
        
        resultsElements.questionsReview.appendChild(reviewItem);
    });
}

// Retry the current test
function retryTest() {
    startTest(quizState.currentTest);
}

// Update progress summary on home page
function updateProgressSummary() {
    homeElements.progressCards.innerHTML = '';
    
    for (let testNum = 1; testNum <= 5; testNum++) {
        const progressCard = document.createElement('div');
        progressCard.className = 'progress-card';
        
        const testTitle = document.createElement('h4');
        testTitle.textContent = `Test ${testNum}`;
        
        const attempts = document.createElement('p');
        const testScores = quizState.testScores[testNum] || [];
        attempts.textContent = `Attempts: ${testScores.length}`;
        
        const bestScore = document.createElement('p');
        if (testScores.length > 0) {
            const maxScore = Math.max(...testScores.map(s => s.score));
            bestScore.textContent = `Best score: ${Math.round(maxScore)}%`;
        } else {
            bestScore.textContent = 'Best score: Not attempted';
        }
        
        const lastAttempt = document.createElement('p');
        if (testScores.length > 0) {
            const lastScore = testScores[testScores.length - 1];
            lastAttempt.textContent = `Last: ${Math.round(lastScore.score)}%`;
        } else {
            lastAttempt.textContent = 'Last: N/A';
        }
        
        progressCard.appendChild(testTitle);
        progressCard.appendChild(attempts);
        progressCard.appendChild(bestScore);
        progressCard.appendChild(lastAttempt);
        
        homeElements.progressCards.appendChild(progressCard);
    }
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', init);