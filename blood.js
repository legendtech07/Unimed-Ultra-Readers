// Quiz State
let currentQuestion = 0;
let score = 0;
let userAnswers = new Array(bloodQuestions.length).fill(null);
let timeLeft = 60 * bloodQuestions.length; // 60 seconds per question
let timerInterval;
let quizCompleted = false;

// DOM Elements
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const questionCounter = document.getElementById('question-counter');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');
const progressBar = document.getElementById('progress-bar');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const feedbackContainer = document.getElementById('feedback-container');
const resultsContainer = document.getElementById('results-container');

// Initialize Quiz
function initQuiz() {
    loadQuestion(currentQuestion);
    updateProgressBar();
    startTimer();
    
    // Event Listeners
    prevBtn.addEventListener('click', goToPreviousQuestion);
    nextBtn.addEventListener('click', goToNextQuestion);
    submitBtn.addEventListener('click', submitQuiz);
}

// Load Question
function loadQuestion(questionIndex) {
    const question = bloodQuestions[questionIndex];
    
    // Update question text
    questionText.textContent = `${questionIndex + 1}. ${question.question}`;
    
    // Update question counter
    questionCounter.textContent = `${questionIndex + 1}/${bloodQuestions.length}`;
    
    // Clear previous options
    optionsContainer.innerHTML = '';
    
    // Add new options
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        
        // Check if this option was previously selected
        if (userAnswers[questionIndex] === index) {
            optionElement.classList.add('selected');
        }
        
        optionElement.innerHTML = `
            <span class="option-letter">${String.fromCharCode(65 + index)}.</span>
            <span class="option-text">${option}</span>
        `;
        
        optionElement.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optionElement);
    });
    
    // Update button states
    updateNavigationButtons();
    
    // Show feedback if answer was already selected
    showFeedback(questionIndex);
}

// Select Option
function selectOption(optionIndex) {
    // Remove selected class from all options
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Add selected class to clicked option
    document.querySelectorAll('.option')[optionIndex].classList.add('selected');
    
    // Store user's answer
    userAnswers[currentQuestion] = optionIndex;
    
    // Show feedback immediately
    showFeedback(currentQuestion);
    
    // Auto-advance to next question after a short delay if answer is correct
    if (optionIndex === bloodQuestions[currentQuestion].correctAnswer) {
        score++;
        scoreElement.textContent = score;
        
        // Auto-advance after 1.5 seconds
        setTimeout(() => {
            if (currentQuestion < bloodQuestions.length - 1) {
                goToNextQuestion();
            }
        }, 1500);
    }
}

// Show Feedback
function showFeedback(questionIndex) {
    const userAnswer = userAnswers[questionIndex];
    
    if (userAnswer === null) {
        feedbackContainer.classList.remove('show');
        return;
    }
    
    const question = bloodQuestions[questionIndex];
    const isCorrect = userAnswer === question.correctAnswer;
    
    // Highlight correct/incorrect answers
    document.querySelectorAll('.option').forEach((option, index) => {
        if (index === question.correctAnswer) {
            option.classList.add('correct');
        } else if (index === userAnswer && !isCorrect) {
            option.classList.add('incorrect');
        }
    });
    
    // Show feedback container
    feedbackContainer.innerHTML = `
        <h3 class="feedback-title">
            <i class="fas ${isCorrect ? 'fa-check-circle' : 'fa-times-circle'}"></i>
            ${isCorrect ? 'Correct!' : 'Incorrect'}
        </h3>
        <p class="feedback-text">${question.explanation}</p>
    `;
    feedbackContainer.classList.add('show');
}

// Navigation Functions
function goToPreviousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion(currentQuestion);
    }
}

function goToNextQuestion() {
    if (currentQuestion < bloodQuestions.length - 1) {
        currentQuestion++;
        loadQuestion(currentQuestion);
    }
}

function updateNavigationButtons() {
    prevBtn.disabled = currentQuestion === 0;
    nextBtn.disabled = currentQuestion === bloodQuestions.length - 1;
    
    // Show submit button on last question
    if (currentQuestion === bloodQuestions.length - 1) {
        submitBtn.style.display = 'flex';
        nextBtn.style.display = 'none';
    } else {
        submitBtn.style.display = 'none';
        nextBtn.style.display = 'flex';
    }
}

// Update Progress Bar
function updateProgressBar() {
    const progress = ((currentQuestion + 1) / bloodQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

// Timer Functions
function startTimer() {
    updateTimerDisplay();
    
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            submitQuiz();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    // Change color when time is running low
    if (timeLeft < 60) {
        timerElement.style.color = '#e63946';
    }
}

// Submit Quiz
function submitQuiz() {
    quizCompleted = true;
    clearInterval(timerInterval);
    
    // Calculate final score if not already done
    if (score === 0) {
        score = userAnswers.reduce((total, answer, index) => {
            return total + (answer === bloodQuestions[index].correctAnswer ? 1 : 0);
        }, 0);
        scoreElement.textContent = score;
    }
    
    // Show results
    showResults();
}

// Show Results
function showResults() {
    const percentage = Math.round((score / bloodQuestions.length) * 100);
    let message, emoji;
    
    if (percentage >= 90) {
        message = "Excellent! You're a blood physiology expert!";
        emoji = "🎖️";
    } else if (percentage >= 70) {
        message = "Great job! You have a solid understanding of blood physiology.";
        emoji = "👍";
    } else if (percentage >= 50) {
        message = "Good effort! Review the notes to improve your knowledge.";
        emoji = "💪";
    } else {
        message = "Keep studying! Blood physiology is complex but fascinating.";
        emoji = "📚";
    }
    
    resultsContainer.innerHTML = `
        <h2 class="results-title">Quiz Completed! ${emoji}</h2>
        <div class="score-display">${percentage}%</div>
        <p class="score-text">You scored ${score} out of ${bloodQuestions.length}</p>
        <p class="score-text">${message}</p>
        
        <h3 style="margin-top: 30px; color: #e63946;">Question Review</h3>
        <div class="review-container" style="margin-top: 20px; text-align: left; max-height: 300px; overflow-y: auto;">
            ${bloodQuestions.map((question, index) => {
                const userAnswer = userAnswers[index];
                const isCorrect = userAnswer === question.correctAnswer;
                
                return `
                    <div class="review-item" style="margin-bottom: 15px; padding: 10px; border-left: 4px solid ${isCorrect ? '#38b000' : '#e63946'}; background: #f8f9fa;">
                        <p style="font-weight: bold; margin-bottom: 5px;">${index + 1}. ${question.question}</p>
                        <p style="margin-bottom: 5px;">
                            Your answer: <span style="color: ${isCorrect ? '#38b000' : '#e63946'}">
                            ${userAnswer !== null ? question.options[userAnswer] : 'Not answered'}
                            </span>
                        </p>
                        <p style="margin-bottom: 5px;">
                            Correct answer: <span style="color: #38b000; font-weight: bold;">
                            ${question.options[question.correctAnswer]}
                            </span>
                        </p>
                    </div>
                `;
            }).join('')}
        </div>
        
        <button class="restart-btn" id="restart-btn" style="margin-top: 30px;">
            <i class="fas fa-redo"></i> Restart Quiz
        </button>
    `;
    
    resultsContainer.classList.add('show');
    document.querySelector('.quiz-container').style.display = 'none';
    
    // Add event listener to restart button
    document.getElementById('restart-btn').addEventListener('click', restartQuiz);
}

// Restart Quiz
function restartQuiz() {
    // Reset quiz state
    currentQuestion = 0;
    score = 0;
    userAnswers = new Array(bloodQuestions.length).fill(null);
    timeLeft = 60 * bloodQuestions.length;
    quizCompleted = false;
    
    // Reset UI
    scoreElement.textContent = '0';
    resultsContainer.classList.remove('show');
    resultsContainer.innerHTML = '';
    document.querySelector('.quiz-container').style.display = 'block';
    feedbackContainer.classList.remove('show');
    
    // Restart quiz
    loadQuestion(currentQuestion);
    updateProgressBar();
    clearInterval(timerInterval);
    startTimer();
}

// Initialize the quiz when page loads
document.addEventListener('DOMContentLoaded', initQuiz);