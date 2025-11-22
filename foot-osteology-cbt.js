// CBT Mode JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const startScreen = document.getElementById('start-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const resultsScreen = document.getElementById('results-screen');
    const startBtn = document.getElementById('start-cbt');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    const restartBtn = document.getElementById('restart-btn');
    const homeBtn = document.getElementById('home-btn');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const questionCounter = document.getElementById('question-counter');
    const scoreDisplay = document.getElementById('score-display');
    const answersReview = document.getElementById('answers-review');
    const timer = document.getElementById('timer');

    // Quiz state
    let currentQuestions = [];
    let currentQuestionIndex = 0;
    let userAnswers = [];
    let startTime;
    let timerInterval;

    // Start the test
    startBtn.addEventListener('click', startTest);

    // Navigation buttons
    prevBtn.addEventListener('click', showPreviousQuestion);
    nextBtn.addEventListener('click', showNextQuestion);
    submitBtn.addEventListener('click', showResults);
    restartBtn.addEventListener('click', restartTest);
    homeBtn.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    function startTest() {
        // Select 10 random questions
        currentQuestions = getRandomQuestions(cbtQuestions, 10);
        userAnswers = new Array(currentQuestions.length).fill(null);
        
        // Reset state
        currentQuestionIndex = 0;
        startTime = new Date();
        
        // Start timer
        startTimer();
        
        // Show quiz screen
        startScreen.classList.remove('active');
        quizScreen.classList.add('active');
        
        // Display first question
        displayQuestion();
    }

    function getRandomQuestions(questions, count) {
        const shuffled = [...questions].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    function displayQuestion() {
        const question = currentQuestions[currentQuestionIndex];
        
        // Update question counter
        questionCounter.textContent = `Question: ${currentQuestionIndex + 1}/${currentQuestions.length}`;
        
        // Display question text
        questionText.textContent = question.question;
        
        // Clear previous options
        optionsContainer.innerHTML = '';
        
        // Create options
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            if (userAnswers[currentQuestionIndex] === index) {
                optionElement.classList.add('selected');
            }
            optionElement.textContent = option;
            optionElement.addEventListener('click', () => selectOption(index));
            optionsContainer.appendChild(optionElement);
        });
        
        // Update navigation buttons
        prevBtn.disabled = currentQuestionIndex === 0;
        nextBtn.disabled = currentQuestionIndex === currentQuestions.length - 1;
        submitBtn.style.display = currentQuestionIndex === currentQuestions.length - 1 ? 'block' : 'none';
    }

    function selectOption(optionIndex) {
        userAnswers[currentQuestionIndex] = optionIndex;
        displayQuestion(); // Refresh to show selection
    }

    function showPreviousQuestion() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            displayQuestion();
        }
    }

    function showNextQuestion() {
        if (currentQuestionIndex < currentQuestions.length - 1) {
            currentQuestionIndex++;
            displayQuestion();
        }
    }

    function showResults() {
        // Stop timer
        clearInterval(timerInterval);
        
        // Calculate score
        const score = calculateScore();
        
        // Show results screen
        quizScreen.classList.remove('active');
        resultsScreen.classList.add('active');
        
        // Display score
        scoreDisplay.innerHTML = `
            <p>Your Score: ${score}/${currentQuestions.length}</p>
            <p>Percentage: ${Math.round((score / currentQuestions.length) * 100)}%</p>
            <p>Time Taken: ${formatTime(new Date() - startTime)}</p>
        `;
        
        // Display answers review
        displayAnswersReview();
    }

    function calculateScore() {
        let score = 0;
        currentQuestions.forEach((question, index) => {
            if (userAnswers[index] === question.correctAnswer) {
                score++;
            }
        });
        return score;
    }

    function displayAnswersReview() {
        answersReview.innerHTML = '';
        
        currentQuestions.forEach((question, index) => {
            const userAnswerIndex = userAnswers[index];
            const isCorrect = userAnswerIndex === question.correctAnswer;
            
            const answerItem = document.createElement('div');
            answerItem.className = `answer-item ${isCorrect ? 'correct' : 'incorrect'}`;
            
            answerItem.innerHTML = `
                <h4>Question ${index + 1}: ${question.question}</h4>
                <p>Your Answer: ${userAnswerIndex !== null ? question.options[userAnswerIndex] : 'Not answered'}</p>
                <p>Correct Answer: ${question.options[question.correctAnswer]}</p>
                <p><strong>Explanation:</strong> ${question.explanation}</p>
            `;
            
            answersReview.appendChild(answerItem);
        });
    }

    function startTimer() {
        clearInterval(timerInterval);
        timerInterval = setInterval(() => {
            const elapsed = new Date() - startTime;
            timer.textContent = `Time: ${formatTime(elapsed)}`;
        }, 1000);
    }

    function formatTime(milliseconds) {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    function restartTest() {
        resultsScreen.classList.remove('active');
        startScreen.classList.add('active');
    }
});