// Quiz state management
let currentTest = 1;
let currentQuestion = 0;
let userAnswers = [];
let score = 0;

// DOM Elements
const questionElement = document.getElementById('question');
const questionNumberElement = document.getElementById('questionNumber');
const answerInput = document.getElementById('answerInput');
const nextBtn = document.getElementById('nextBtn');
const checkBtn = document.getElementById('checkBtn');
const explanationElement = document.getElementById('explanation');
const explanationText = document.getElementById('explanationText');
const scoreElement = document.getElementById('score');
const quizForm = document.getElementById('quizForm');

// Check if we're on a quiz page
if (questionElement) {
    // Load quiz data based on current page
    const quizData = getQuizDataForPage();
    
    // Initialize quiz
    loadQuestion();
    
    // Event Listeners
    checkBtn.addEventListener('click', checkAnswer);
    nextBtn.addEventListener('click', nextQuestion);
    
    // Allow Enter key to check answer
    answerInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkAnswer();
        }
    });
}

function getQuizDataForPage() {
    const pageName = window.location.pathname.split('/').pop();
    const testMap = {
        'CAR2.html': quizData.slice(0, 10),
        'CAR3.html': quizData.slice(10, 20),
        'CAR4.html': quizData.slice(20, 30),
        'CAR5.html': quizData.slice(30, 40),
        'CAR6.html': quizData.slice(40, 50)
    };
    return testMap[pageName] || quizData.slice(0, 10);
}

function loadQuestion() {
    const quizData = getQuizDataForPage();
    
    if (currentQuestion < quizData.length) {
        const question = quizData[currentQuestion];
        questionNumberElement.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;
        questionElement.innerHTML = question.question;
        answerInput.value = userAnswers[currentQuestion] || '';
        answerInput.disabled = false;
        answerInput.focus();
        explanationElement.classList.remove('show');
        checkBtn.disabled = false;
        nextBtn.style.display = 'none';
    } else {
        showResults();
    }
}

function checkAnswer() {
    const quizData = getQuizDataForPage();
    const question = quizData[currentQuestion];
    const userAnswer = answerInput.value.trim().toLowerCase();
    
    userAnswers[currentQuestion] = userAnswer;
    
    // Check if answer is correct (case insensitive, allows for variations)
    const isCorrect = question.correctAnswers.some(correct => 
        userAnswer.includes(correct.toLowerCase()) || 
        correct.toLowerCase().includes(userAnswer)
    );
    
    // Update score
    if (isCorrect && !question.answered) {
        score++;
        question.answered = true;
    }
    
    // Show explanation
    explanationText.innerHTML = `
        <strong>Your answer:</strong> ${userAnswer || 'No answer provided'}<br><br>
        <strong>Correct answer(s):</strong> ${question.correctAnswers.join(', ')}<br><br>
        <strong>Explanation:</strong> ${question.explanation}
    `;
    explanationElement.classList.add('show');
    
    answerInput.disabled = true;
    checkBtn.disabled = true;
    nextBtn.style.display = 'block';
}

function nextQuestion() {
    currentQuestion++;
    loadQuestion();
}

function showResults() {
    const quizData = getQuizDataForPage();
    const totalQuestions = quizData.length;
    const percentage = Math.round((score / totalQuestions) * 100);
    
    document.querySelector('.quiz-container').innerHTML = `
        <div class="score-display">
            <h2><i class="fas fa-trophy"></i> Quiz Completed!</h2>
            <p>You have completed Test ${currentTest}</p>
            <div class="score-number">${score}/${totalQuestions}</div>
            <p>${percentage}% Correct</p>
            <div class="score-message">
                ${percentage >= 80 ? 'Excellent! 🎉' : 
                  percentage >= 60 ? 'Good job! 👍' : 
                  'Keep practicing! 📚'}
            </div>
            
            <div class="navigation-links">
                <a href="index.html" class="nav-link">
                    <i class="fas fa-home"></i> Back to Home
                </a>
                <a href="${getNextTestLink()}" class="nav-link">
                    Next Test <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    `;
}

function getNextTestLink() {
    const currentPage = window.location.pathname.split('/').pop();
    const testOrder = ['CAR2.html', 'CAR3.html', 'CAR4.html', 'CAR5.html', 'CAR6.html'];
    const currentIndex = testOrder.indexOf(currentPage);
    
    if (currentIndex < testOrder.length - 1) {
        return testOrder[currentIndex + 1];
    }
    return 'CAR.html';
}

// Navigation functionality for main page
document.addEventListener('DOMContentLoaded', function() {
    // Add click event to all quiz cards on main page
    const quizCards = document.querySelectorAll('.quiz-card');
    quizCards.forEach(card => {
        card.addEventListener('click', function() {
            const startBtn = this.querySelector('.start-btn');
            startBtn.style.backgroundColor = '#1B5E20';
        });
    });
});