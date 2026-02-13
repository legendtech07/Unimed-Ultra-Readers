// CBT Test Application
class CBTTest {
    constructor() {
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.flaggedQuestions = new Set();
        this.testStarted = false;
        this.testCompleted = false;
        this.startTime = null;
        this.endTime = null;
        this.timerInterval = null;
        this.timeRemaining = 20 * 60; // 20 minutes in seconds
        
        this.DOM = {
            instructionScreen: document.getElementById('instruction-screen'),
            questionScreen: document.getElementById('question-screen'),
            resultsScreen: document.getElementById('results-screen'),
            startTestBtn: document.getElementById('start-test-btn'),
            questionNumber: document.getElementById('question-number'),
            questionText: document.getElementById('question-text'),
            optionsContainer: document.getElementById('options-container'),
            prevBtn: document.getElementById('prev-btn'),
            nextBtn: document.getElementById('next-btn'),
            flagBtn: document.getElementById('flag-btn'),
            questionMarkers: document.querySelector('.question-markers'),
            questionStatus: document.getElementById('question-status'),
            timer: document.getElementById('timer'),
            currentQuestionElement: document.getElementById('current-question'),
            totalQuestionsElement: document.getElementById('total-questions'),
            reviewAnswersBtn: document.getElementById('review-answers-btn'),
            newTestBtn: document.getElementById('new-test-btn'),
            scorePercentage: document.getElementById('score-percentage'),
            correctCount: document.getElementById('correct-count'),
            incorrectCount: document.getElementById('incorrect-count'),
            flaggedCount: document.getElementById('flagged-count'),
            timeTaken: document.getElementById('time-taken'),
            answersReview: document.getElementById('answers-review')
        };
        
        this.init();
    }
    
    init() {
        // Generate random questions for the test
        this.generateRandomTest(10);
        
        // Initialize event listeners
        this.DOM.startTestBtn.addEventListener('click', () => this.startTest());
        this.DOM.prevBtn.addEventListener('click', () => this.previousQuestion());
        this.DOM.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.DOM.flagBtn.addEventListener('click', () => this.toggleFlag());
        this.DOM.reviewAnswersBtn.addEventListener('click', () => this.showAnswersReview());
        this.DOM.newTestBtn.addEventListener('click', () => this.startNewTest());
        
        // Initialize user answers array
        this.userAnswers = new Array(this.questions.length).fill(null);
        
        // Update UI
        this.DOM.totalQuestionsElement.textContent = this.questions.length;
        this.updateQuestionMarkers();
        this.renderQuestion();
    }
    
    generateRandomTest(numQuestions) {
        // Get random questions from the question bank
        const shuffled = [...upperLimbQuestions].sort(() => 0.5 - Math.random());
        this.questions = shuffled.slice(0, numQuestions);
    }
    
    startTest() {
        this.testStarted = true;
        this.startTime = new Date();
        
        // Hide instruction screen, show question screen
        this.DOM.instructionScreen.classList.remove('active');
        this.DOM.questionScreen.style.display = 'block';
        
        // Start timer
        this.startTimer();
        
        // Render first question
        this.renderQuestion();
    }
    
    startTimer() {
        this.updateTimerDisplay();
        
        this.timerInterval = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();
            
            if (this.timeRemaining <= 0) {
                this.endTest();
            }
        }, 1000);
    }
    
    updateTimerDisplay() {
        const minutes = Math.floor(this.timeRemaining / 60);
        const seconds = this.timeRemaining % 60;
        this.DOM.timer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        // Change color when time is running out
        if (this.timeRemaining < 300) { // Less than 5 minutes
            this.DOM.timer.style.color = '#ff5252';
        }
    }
    
    renderQuestion() {
        if (this.questions.length === 0) return;
        
        const question = this.questions[this.currentQuestionIndex];
        
        // Update question number and text
        this.DOM.questionNumber.textContent = `Question ${this.currentQuestionIndex + 1}`;
        this.DOM.questionText.textContent = question.question;
        this.DOM.currentQuestionElement.textContent = this.currentQuestionIndex + 1;
        
        // Update question status
        this.updateQuestionStatus();
        
        // Clear and render options
        this.DOM.optionsContainer.innerHTML = '';
        
        Object.entries(question.options).forEach(([key, value]) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            
            // Check if this option is selected by the user
            const isSelected = this.userAnswers[this.currentQuestionIndex] === key;
            if (isSelected) optionElement.classList.add('selected');
            
            optionElement.innerHTML = `
                <div class="option-label">${key}</div>
                <div class="option-text">${value}</div>
            `;
            
            optionElement.addEventListener('click', () => this.selectAnswer(key));
            this.DOM.optionsContainer.appendChild(optionElement);
        });
        
        // Update navigation buttons
        this.DOM.prevBtn.disabled = this.currentQuestionIndex === 0;
        this.DOM.nextBtn.textContent = this.currentQuestionIndex === this.questions.length - 1 ? 'Finish Test' : 'Next';
        
        // Update flag button
        this.updateFlagButton();
        
        // Update current question marker
        this.updateQuestionMarkers();
    }
    
    selectAnswer(answer) {
        // Update user answer
        this.userAnswers[this.currentQuestionIndex] = answer;
        
        // Update UI
        this.renderQuestion();
    }
    
    updateQuestionStatus() {
        const statusElement = this.DOM.questionStatus;
        
        if (this.userAnswers[this.currentQuestionIndex] !== null) {
            statusElement.innerHTML = '<i class="fas fa-circle"></i> Answered';
            statusElement.classList.add('answered');
            statusElement.classList.remove('flagged');
        } else if (this.flaggedQuestions.has(this.currentQuestionIndex)) {
            statusElement.innerHTML = '<i class="fas fa-flag"></i> Flagged';
            statusElement.classList.add('flagged');
            statusElement.classList.remove('answered');
        } else {
            statusElement.innerHTML = '<i class="fas fa-circle"></i> Not Answered';
            statusElement.classList.remove('answered', 'flagged');
        }
    }
    
    toggleFlag() {
        if (this.flaggedQuestions.has(this.currentQuestionIndex)) {
            this.flaggedQuestions.delete(this.currentQuestionIndex);
        } else {
            this.flaggedQuestions.add(this.currentQuestionIndex);
        }
        
        this.updateFlagButton();
        this.updateQuestionStatus();
        this.updateQuestionMarkers();
    }
    
    updateFlagButton() {
        const flagBtn = this.DOM.flagBtn;
        const icon = flagBtn.querySelector('i');
        
        if (this.flaggedQuestions.has(this.currentQuestionIndex)) {
            flagBtn.classList.add('flagged');
            icon.className = 'fas fa-flag';
            flagBtn.innerHTML = '<i class="fas fa-flag"></i> Remove Flag';
        } else {
            flagBtn.classList.remove('flagged');
            icon.className = 'far fa-flag';
            flagBtn.innerHTML = '<i class="far fa-flag"></i> Flag for Review';
        }
    }
    
    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.renderQuestion();
        }
    }
    
    nextQuestion() {
        if (this.currentQuestionIndex < this.questions.length - 1) {
            this.currentQuestionIndex++;
            this.renderQuestion();
        } else {
            // Last question - finish test
            this.endTest();
        }
    }
    
    updateQuestionMarkers() {
        this.DOM.questionMarkers.innerHTML = '';
        
        this.questions.forEach((_, index) => {
            const marker = document.createElement('div');
            marker.className = 'question-marker';
            marker.textContent = index + 1;
            
            if (index === this.currentQuestionIndex) {
                marker.classList.add('current');
            }
            
            if (this.userAnswers[index] !== null) {
                marker.classList.add('answered');
            }
            
            if (this.flaggedQuestions.has(index)) {
                marker.classList.add('flagged');
            }
            
            marker.addEventListener('click', () => {
                this.currentQuestionIndex = index;
                this.renderQuestion();
            });
            
            this.DOM.questionMarkers.appendChild(marker);
        });
    }
    
    endTest() {
        this.testCompleted = true;
        this.endTime = new Date();
        
        // Stop the timer
        clearInterval(this.timerInterval);
        
        // Calculate results
        this.calculateResults();
        
        // Show results screen
        this.DOM.questionScreen.style.display = 'none';
        this.DOM.resultsScreen.style.display = 'block';
    }
    
    calculateResults() {
        let correctCount = 0;
        
        this.questions.forEach((question, index) => {
            if (this.userAnswers[index] === question.answer) {
                correctCount++;
            }
        });
        
        const incorrectCount = this.questions.length - correctCount;
        const scorePercentage = Math.round((correctCount / this.questions.length) * 100);
        
        // Calculate time taken
        const timeTakenInSeconds = 20 * 60 - this.timeRemaining;
        const minutesTaken = Math.floor(timeTakenInSeconds / 60);
        const secondsTaken = timeTakenInSeconds % 60;
        const timeTakenString = `${minutesTaken}:${secondsTaken.toString().padStart(2, '0')}`;
        
        // Update UI with results
        this.DOM.scorePercentage.textContent = `${scorePercentage}%`;
        this.DOM.correctCount.textContent = correctCount;
        this.DOM.incorrectCount.textContent = incorrectCount;
        this.DOM.flaggedCount.textContent = this.flaggedQuestions.size;
        this.DOM.timeTaken.textContent = timeTakenString;
        
        // Update score circle animation
        const circle = document.querySelector('.score-circle-progress');
        const circumference = 2 * Math.PI * 54;
        const offset = circumference - (scorePercentage / 100) * circumference;
        circle.style.strokeDashoffset = offset;
    }
    
    showAnswersReview() {
        this.DOM.answersReview.innerHTML = '';
        
        this.questions.forEach((question, index) => {
            const userAnswer = this.userAnswers[index];
            const isCorrect = userAnswer === question.answer;
            
            const reviewItem = document.createElement('div');
            reviewItem.className = `review-item ${isCorrect ? 'correct' : 'incorrect'}`;
            
            // Create options HTML
            const optionsHTML = Object.entries(question.options).map(([key, value]) => {
                let optionClass = 'review-option';
                
                if (key === question.answer) {
                    optionClass += ' correct-answer';
                }
                
                if (key === userAnswer && key !== question.answer) {
                    optionClass += ' selected';
                }
                
                return `<div class="${optionClass}">
                    <strong>${key})</strong> ${value}
                    ${key === question.answer ? ' <i class="fas fa-check correct-icon"></i>' : ''}
                    ${key === userAnswer && key !== question.answer ? ' <i class="fas fa-times incorrect-icon"></i>' : ''}
                </div>`;
            }).join('');
            
            reviewItem.innerHTML = `
                <div class="review-question">Q${index + 1}: ${question.question}</div>
                <div class="review-options">${optionsHTML}</div>
                ${question.explanation ? `
                    <div class="review-explanation">
                        <strong>Explanation:</strong> ${question.explanation}
                    </div>
                ` : ''}
            `;
            
            this.DOM.answersReview.appendChild(reviewItem);
        });
        
        // Scroll to answers review
        this.DOM.answersReview.scrollIntoView({ behavior: 'smooth' });
    }
    
    startNewTest() {
        // Reset everything and start a new test
        this.currentQuestionIndex = 0;
        this.userAnswers = new Array(10).fill(null);
        this.flaggedQuestions.clear();
        this.testStarted = false;
        this.testCompleted = false;
        this.timeRemaining = 20 * 60;
        
        // Generate new random questions
        this.generateRandomTest(10);
        
        // Reset UI
        this.DOM.questionScreen.style.display = 'none';
        this.DOM.resultsScreen.style.display = 'none';
        this.DOM.instructionScreen.classList.add('active');
        
        // Reset timer display
        this.DOM.timer.textContent = '20:00';
        this.DOM.timer.style.color = '';
        
        // Update question markers
        this.updateQuestionMarkers();
    }
}

// Initialize the CBT test when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new CBTTest();
});