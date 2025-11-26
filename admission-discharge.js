class QuizApp {
    constructor() {
        this.currentQuiz = null;
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        // Quiz selection
        document.querySelectorAll('.quiz-card').forEach(card => {
            card.addEventListener('click', (e) => {
                this.startQuiz(e.currentTarget.dataset.quiz);
            });
        });

        // Navigation buttons
        document.getElementById('prev-btn').addEventListener('click', () => {
            this.previousQuestion();
        });

        document.getElementById('next-btn').addEventListener('click', () => {
            this.nextQuestion();
        });

        document.getElementById('submit-btn').addEventListener('click', () => {
            this.submitQuiz();
        });

        document.getElementById('retry-btn').addEventListener('click', () => {
            this.showQuizSelection();
        });
    }

    startQuiz(quizNumber) {
        this.currentQuiz = `quiz${quizNumber}`;
        this.currentQuestionIndex = 0;
        this.userAnswers = new Array(allQuestions[this.currentQuiz].length).fill('');
        
        this.showQuizContainer();
        this.loadQuestion();
        this.updateProgress();
    }

    showQuizContainer() {
        document.querySelector('.quiz-selection').classList.add('hidden');
        document.getElementById('quiz-container').classList.remove('hidden');
        document.getElementById('results-container').classList.add('hidden');
        
        const quizTitles = {
            'quiz1': 'Quiz 1: Basic Admission Concepts',
            'quiz2': 'Quiz 2: Admission Procedures & Equipment',
            'quiz3': 'Quiz 3: Emergency & Adult Admissions',
            'quiz4': 'Quiz 4: Pediatric Admissions',
            'quiz5': 'Quiz 5: Discharge Procedures'
        };
        
        document.getElementById('quiz-title').textContent = quizTitles[this.currentQuiz];
    }

    showQuizSelection() {
        document.querySelector('.quiz-selection').classList.remove('hidden');
        document.getElementById('quiz-container').classList.add('hidden');
        document.getElementById('results-container').classList.add('hidden');
    }

    loadQuestion() {
        const questionContainer = document.getElementById('question-container');
        const question = allQuestions[this.currentQuiz][this.currentQuestionIndex];
        
        questionContainer.innerHTML = `
            <div class="question">
                <div class="question-number">Question ${this.currentQuestionIndex + 1}</div>
                <div class="question-text">${question.question}</div>
                <input type="text" 
                       class="answer-input" 
                       placeholder="Type your answer here..."
                       value="${this.userAnswers[this.currentQuestionIndex] || ''}">
            </div>
        `;

        // Add input event listener
        const input = questionContainer.querySelector('.answer-input');
        input.addEventListener('input', (e) => {
            this.userAnswers[this.currentQuestionIndex] = e.target.value.trim();
        });

        this.updateNavigationButtons();
    }

    updateNavigationButtons() {
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const submitBtn = document.getElementById('submit-btn');

        prevBtn.classList.toggle('hidden', this.currentQuestionIndex === 0);
        
        const isLastQuestion = this.currentQuestionIndex === allQuestions[this.currentQuiz].length - 1;
        nextBtn.classList.toggle('hidden', isLastQuestion);
        submitBtn.classList.toggle('hidden', !isLastQuestion);
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.loadQuestion();
            this.updateProgress();
        }
    }

    nextQuestion() {
        if (this.currentQuestionIndex < allQuestions[this.currentQuiz].length - 1) {
            this.currentQuestionIndex++;
            this.loadQuestion();
            this.updateProgress();
        }
    }

    updateProgress() {
        const progress = document.getElementById('progress');
        const progressFill = document.getElementById('progress-fill');
        
        const percentage = ((this.currentQuestionIndex + 1) / allQuestions[this.currentQuiz].length) * 100;
        
        progress.textContent = `Question ${this.currentQuestionIndex + 1} of ${allQuestions[this.currentQuiz].length}`;
        progressFill.style.width = `${percentage}%`;
    }

    submitQuiz() {
        // Save the current answer before submitting
        const currentInput = document.querySelector('.answer-input');
        if (currentInput) {
            this.userAnswers[this.currentQuestionIndex] = currentInput.value.trim();
        }

        this.showResults();
    }

    showResults() {
        document.getElementById('quiz-container').classList.add('hidden');
        document.getElementById('results-container').classList.remove('hidden');

        const score = this.calculateScore();
        this.displayScore(score);
        this.displayAnswerReview();
    }

    calculateScore() {
        let correctAnswers = 0;
        const questions = allQuestions[this.currentQuiz];

        this.userAnswers.forEach((answer, index) => {
            if (answer.toLowerCase() === questions[index].answer.toLowerCase()) {
                correctAnswers++;
            }
        });

        return {
            correct: correctAnswers,
            total: questions.length,
            percentage: Math.round((correctAnswers / questions.length) * 100)
        };
    }

    displayScore(score) {
        const scoreDisplay = document.getElementById('score-display');
        scoreDisplay.innerHTML = `
            <div style="font-size: 2em; margin-bottom: 10px;">${score.percentage}%</div>
            <div style="color: #7f8c8d;">${score.correct} out of ${score.total} correct</div>
        `;
    }

    displayAnswerReview() {
        const reviewContainer = document.getElementById('answers-review');
        const questions = allQuestions[this.currentQuiz];
        
        let reviewHTML = '';
        
        questions.forEach((question, index) => {
            const userAnswer = this.userAnswers[index] || 'No answer provided';
            const isCorrect = userAnswer.toLowerCase() === question.answer.toLowerCase();
            
            reviewHTML += `
                <div class="answer-item ${isCorrect ? 'answer-correct' : 'answer-incorrect'}">
                    <div class="question-text">${question.question}</div>
                    <div><strong>Your answer:</strong> ${userAnswer}</div>
                    <div><strong>Correct answer:</strong> ${question.answer}</div>
                    <div class="explanation">${question.explanation}</div>
                </div>
            `;
        });
        
        reviewContainer.innerHTML = reviewHTML;
    }
}

// Initialize the quiz application when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});