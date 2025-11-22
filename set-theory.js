// Question bank with over 50 set theory questions
const questionBank = [
    // Basic Concepts (10 questions)
    {
        id: 1,
        category: "Basic Concepts",
        question: "Which of the following is the correct set notation for the set of vowels in the English alphabet?",
        options: [
            "A = {a, e, i, o, u}",
            "A = [a, e, i, o, u]",
            "A = (a, e, i, o, u)",
            "A = <a, e, i, o, u>"
        ],
        correct: 0,
        explanation: "Sets are denoted using curly braces {} with elements separated by commas."
    },
    {
        id: 2,
        category: "Basic Concepts",
        question: "What is the cardinality of the set B = {2, 4, 6, 8, 10}?",
        options: ["4", "5", "6", "10"],
        correct: 1,
        explanation: "Cardinality is the number of elements in a set. Set B has 5 distinct elements."
    },
    {
        id: 3,
        category: "Basic Concepts",
        question: "Which of the following represents the set builder notation for the set of all even numbers?",
        options: [
            "{x | x is an even number}",
            "{x: x ∈ E}",
            "{2, 4, 6, 8, ...}",
            "{x | x = 2n, n ∈ Z}"
        ],
        correct: 3,
        explanation: "Set builder notation describes the property that elements must satisfy. {x | x = 2n, n ∈ Z} correctly defines even numbers."
    },
    {
        id: 4,
        category: "Basic Concepts",
        question: "If A = {1, 2, {3, 4}}, what is the cardinality of A?",
        options: ["2", "3", "4", "5"],
        correct: 1,
        explanation: "The set A has three elements: 1, 2, and the set {3, 4}."
    },
    {
        id: 5,
        category: "Basic Concepts",
        question: "Which of the following is an example of a finite set?",
        options: [
            "The set of all prime numbers",
            "The set of all integers",
            "The set of all natural numbers less than 100",
            "The set of all real numbers between 0 and 1"
        ],
        correct: 2,
        explanation: "The set of all natural numbers less than 100 has a finite number of elements (99 elements)."
    },
    {
        id: 6,
        category: "Basic Concepts",
        question: "What is the roster form of the set {x | x ∈ N and 3 < x < 8}?",
        options: [
            "{3, 4, 5, 6, 7, 8}",
            "{4, 5, 6, 7}",
            "{4, 5, 6, 7, 8}",
            "{3, 4, 5, 6, 7}"
        ],
        correct: 1,
        explanation: "The set includes natural numbers greater than 3 and less than 8, which are 4, 5, 6, and 7."
    },
    {
        id: 7,
        category: "Basic Concepts",
        question: "Which mathematician is credited with developing set theory?",
        options: [
            "Isaac Newton",
            "Georg Cantor",
            "Leonhard Euler",
            "Blaise Pascal"
        ],
        correct: 1,
        explanation: "Georg Cantor (1845-1918) is credited with developing set theory while working on trigonometric series."
    },
    {
        id: 8,
        category: "Basic Concepts",
        question: "If A = {1, 2, 3} and B = {2, 3, 4}, what is A ∪ B?",
        options: [
            "{1, 2, 3}",
            "{2, 3}",
            "{1, 2, 3, 4}",
            "{1, 4}"
        ],
        correct: 2,
        explanation: "The union of sets A and B contains all elements from both sets without duplication."
    },
    {
        id: 9,
        category: "Basic Concepts",
        question: "What is A ∩ B if A = {1, 2, 3} and B = {2, 3, 4}?",
        options: [
            "{1, 2, 3}",
            "{2, 3}",
            "{1, 2, 3, 4}",
            "{1, 4}"
        ],
        correct: 1,
        explanation: "The intersection contains elements that are common to both sets A and B."
    },
    {
        id: 10,
        category: "Basic Concepts",
        question: "Which of the following is the empty set?",
        options: [
            "{0}",
            "{ }",
            "{∅}",
            "All of the above"
        ],
        correct: 1,
        explanation: "{ } represents the empty set, which contains no elements. {0} contains the element 0, and {∅} contains the empty set as an element."
    },

    // Special Sets (10 questions)
    {
        id: 11,
        category: "Special Sets",
        question: "Which of the following is a singleton set?",
        options: [
            "{ }",
            "{1, 2}",
            "{5}",
            "{x | x is a prime number}"
        ],
        correct: 2,
        explanation: "A singleton set contains exactly one element. {5} has exactly one element."
    },
    {
        id: 12,
        category: "Special Sets",
        question: "What is the cardinality of the null set?",
        options: ["0", "1", "Undefined", "Infinite"],
        correct: 0,
        explanation: "The null set contains no elements, so its cardinality is 0."
    },
    {
        id: 13,
        category: "Special Sets",
        question: "Which of the following sets is infinite?",
        options: [
            "The set of days in a week",
            "The set of planets in our solar system",
            "The set of all prime numbers",
            "The set of letters in the English alphabet"
        ],
        correct: 2,
        explanation: "The set of all prime numbers is infinite as there is no largest prime number."
    },
    {
        id: 14,
        category: "Special Sets",
        question: "If A = {1, 2, 3} and B = {3, 2, 1}, which statement is true?",
        options: [
            "A and B are equal sets",
            "A and B are equivalent but not equal",
            "A is a subset of B but B is not a subset of A",
            "A and B are disjoint sets"
        ],
        correct: 0,
        explanation: "The order of elements doesn't matter in sets, so A and B contain the same elements and are equal."
    },
    {
        id: 15,
        category: "Special Sets",
        question: "Which of the following pairs of sets are equal?",
        options: [
            "A = {1, 2, 3} and B = {2, 3, 4}",
            "A = {a, b, c} and B = {c, b, a}",
            "A = {1, 1, 2, 3} and B = {1, 2, 2, 3}",
            "A = {x | x is a vowel} and B = {a, e, i, o, u, y}"
        ],
        correct: 1,
        explanation: "Sets A and B contain the same elements regardless of order or repetition in notation."
    },
    {
        id: 16,
        category: "Special Sets",
        question: "What is the universal set in the context of Venn diagrams?",
        options: [
            "The set containing all elements under consideration",
            "The set with the most elements",
            "The set of all possible sets",
            "The empty set"
        ],
        correct: 0,
        explanation: "The universal set contains all elements being considered in a particular context or problem."
    },
    {
        id: 17,
        category: "Special Sets",
        question: "Which of the following is an example of a finite set?",
        options: [
            "The set of all integers",
            "The set of all rational numbers between 0 and 1",
            "The set of all multiples of 5",
            "The set of all solutions to x² = 4"
        ],
        correct: 3,
        explanation: "The equation x² = 4 has exactly two solutions: 2 and -2, making it a finite set."
    },
    {
        id: 18,
        category: "Special Sets",
        question: "If A = {2, 4, 6} and B = {1, 3, 5}, what is the relationship between A and B?",
        options: [
            "A is a subset of B",
            "B is a subset of A",
            "A and B are equal",
            "A and B are disjoint"
        ],
        correct: 3,
        explanation: "Sets A and B have no elements in common, so they are disjoint sets."
    },
    {
        id: 19,
        category: "Special Sets",
        question: "Which of the following represents the set of natural numbers?",
        options: [
            "{..., -3, -2, -1, 0, 1, 2, 3, ...}",
            "{1, 2, 3, 4, ...}",
            "{0, 1, 2, 3, 4, ...}",
            "{0, 2, 4, 6, ...}"
        ],
        correct: 1,
        explanation: "The set of natural numbers is typically defined as {1, 2, 3, 4, ...}, though some definitions include 0."
    },
    {
        id: 20,
        category: "Special Sets",
        question: "What is the power set of A = {1, 2}?",
        options: [
            "{{}, {1}, {2}}",
            "{{1}, {2}, {1, 2}}",
            "{{}, {1}, {2}, {1, 2}}",
            "{{1}, {2}}"
        ],
        correct: 2,
        explanation: "The power set includes all subsets: the empty set, each individual element, and the set itself."
    },

    // Membership Relationships (15 questions)
    {
        id: 21,
        category: "Membership Relationships",
        question: "If A = {1, 2, 3} and B = {1, 2, 3, 4, 5}, which statement is true?",
        options: [
            "A is a proper subset of B",
            "B is a proper subset of A",
            "A and B are equal",
            "A and B are disjoint"
        ],
        correct: 0,
        explanation: "All elements of A are in B, and B has additional elements not in A, so A is a proper subset of B."
    },
    {
        id: 22,
        category: "Membership Relationships",
        question: "How many subsets does the set A = {a, b, c} have?",
        options: ["6", "7", "8", "9"],
        correct: 2,
        explanation: "The number of subsets is 2^n where n is the number of elements. For n=3, 2^3 = 8."
    },
    {
        id: 23,
        category: "Membership Relationships",
        question: "What is the cardinality of the power set of {1, 2, 3, 4}?",
        options: ["4", "8", "16", "32"],
        correct: 2,
        explanation: "The cardinality of a power set is 2^n where n is the cardinality of the original set. 2^4 = 16."
    },
    {
        id: 24,
        category: "Membership Relationships",
        question: "If |A| = 5, how many elements are in the power set of A?",
        options: ["5", "10", "25", "32"],
        correct: 3,
        explanation: "The power set has 2^n elements where n is |A|. 2^5 = 32."
    },
    {
        id: 25,
        category: "Membership Relationships",
        question: "Which of the following is always true for any set A?",
        options: [
            "A ⊆ A",
            "A ⊂ A",
            "A ∈ A",
            "∅ ∉ A"
        ],
        correct: 0,
        explanation: "Every set is a subset of itself, so A ⊆ A is always true."
    },
    {
        id: 26,
        category: "Membership Relationships",
        question: "If A = {1, 2, {3, 4}}, which statement is correct?",
        options: [
            "3 ∈ A",
            "{3, 4} ∈ A",
            "{3} ∈ A",
            "4 ∈ A"
        ],
        correct: 1,
        explanation: "The set {3, 4} is an element of A, so {3, 4} ∈ A is correct."
    },
    {
        id: 27,
        category: "Membership Relationships",
        question: "What is the number of proper subsets of {a, b, c, d}?",
        options: ["15", "16", "17", "18"],
        correct: 0,
        explanation: "Total subsets = 2^4 = 16. Proper subsets exclude the set itself, so 16 - 1 = 15."
    },
    {
        id: 28,
        category: "Membership Relationships",
        question: "If A ⊆ B and B ⊆ A, then:",
        options: [
            "A and B are disjoint",
            "A is a proper subset of B",
            "A = B",
            "B is a proper subset of A"
        ],
        correct: 2,
        explanation: "If A is a subset of B and B is a subset of A, then they contain exactly the same elements."
    },
    {
        id: 29,
        category: "Membership Relationships",
        question: "Which symbol represents 'is not a subset of'?",
        options: ["⊄", "⊅", "∉", "≠"],
        correct: 0,
        explanation: "⊄ means 'is not a subset of'."
    },
    {
        id: 30,
        category: "Membership Relationships",
        question: "If A = {1, 2, 3} and B = {2, 3, 4}, is A ⊆ B?",
        options: [
            "Yes, because all elements of A are in B",
            "No, because 1 is not in B",
            "Yes, because A and B share some elements",
            "No, because B has more elements than A"
        ],
        correct: 1,
        explanation: "For A to be a subset of B, all elements of A must be in B. Since 1 ∈ A but 1 ∉ B, A is not a subset of B."
    },
    {
        id: 31,
        category: "Membership Relationships",
        question: "What is the power set of the empty set?",
        options: [
            "{}",
            "{∅}",
            "{{}}",
            "Both 2 and 3"
        ],
        correct: 3,
        explanation: "The power set of ∅ is {∅}, which can also be written as {{}}."
    },
    {
        id: 32,
        category: "Membership Relationships",
        question: "If |A| = n, how many elements does the power set of A have?",
        options: ["n", "n²", "2n", "2ⁿ"],
        correct: 3,
        explanation: "The power set of a set with n elements has 2ⁿ elements."
    },
    {
        id: 33,
        category: "Membership Relationships",
        question: "Which of the following is true for any set A?",
        options: [
            "∅ ⊆ A",
            "∅ ∈ A",
            "A ⊆ ∅",
            "A ∈ ∅"
        ],
        correct: 0,
        explanation: "The empty set is a subset of every set."
    },
    {
        id: 34,
        category: "Membership Relationships",
        question: "If A = {1, 2} and B = {1, 2, 3}, how many subsets does A have that are also subsets of B?",
        options: ["2", "3", "4", "8"],
        correct: 2,
        explanation: "All subsets of A are also subsets of B since A ⊆ B. A has 2² = 4 subsets."
    },
    {
        id: 35,
        category: "Membership Relationships",
        question: "What is the cardinality of P(P(∅)) where P denotes power set?",
        options: ["0", "1", "2", "4"],
        correct: 2,
        explanation: "P(∅) = {∅} which has cardinality 1. P(P(∅)) = P({∅}) = {∅, {∅}} which has cardinality 2."
    },

    // Set Operations (15 questions)
    {
        id: 36,
        category: "Set Operations",
        question: "If A = {1, 2, 3} and B = {3, 4, 5}, what is A ∪ B?",
        options: [
            "{1, 2, 3}",
            "{3}",
            "{1, 2, 3, 4, 5}",
            "{1, 2, 4, 5}"
        ],
        correct: 2,
        explanation: "The union contains all elements from both sets without duplication."
    },
    {
        id: 37,
        category: "Set Operations",
        question: "If A = {1, 2, 3} and B = {3, 4, 5}, what is A ∩ B?",
        options: [
            "{1, 2, 3}",
            "{3}",
            "{1, 2, 3, 4, 5}",
            "{1, 2, 4, 5}"
        ],
        correct: 1,
        explanation: "The intersection contains elements common to both sets."
    },
    {
        id: 38,
        category: "Set Operations",
        question: "If A = {1, 2, 3, 4} and B = {3, 4, 5, 6}, what is A - B?",
        options: [
            "{1, 2}",
            "{3, 4}",
            "{5, 6}",
            "{1, 2, 5, 6}"
        ],
        correct: 0,
        explanation: "A - B contains elements that are in A but not in B."
    },
    {
        id: 39,
        category: "Set Operations",
        question: "If A = {1, 2, 3} and B = {2, 3, 4}, what is A Δ B (symmetric difference)?",
        options: [
            "{1, 4}",
            "{2, 3}",
            "{1, 2, 3, 4}",
            "{}"
        ],
        correct: 0,
        explanation: "Symmetric difference contains elements in either set but not in both."
    },
    {
        id: 40,
        category: "Set Operations",
        question: "If U = {1, 2, 3, 4, 5} and A = {1, 2, 3}, what is A' (complement of A)?",
        options: [
            "{4, 5}",
            "{1, 2, 3}",
            "{ }",
            "{1, 2, 3, 4, 5}"
        ],
        correct: 0,
        explanation: "The complement contains elements in U that are not in A."
    },
    {
        id: 41,
        category: "Set Operations",
        question: "Which law states that A ∪ ∅ = A?",
        options: [
            "Identity law",
            "Domination law",
            "Idempotent law",
            "Complement law"
        ],
        correct: 0,
        explanation: "The identity law states that the union of any set with the empty set is the set itself."
    },
    {
        id: 42,
        category: "Set Operations",
        question: "If A and B are disjoint sets, what is A ∩ B?",
        options: [
            "A",
            "B",
            "A ∪ B",
            "∅"
        ],
        correct: 3,
        explanation: "Disjoint sets have no elements in common, so their intersection is empty."
    },
    {
        id: 43,
        category: "Set Operations",
        question: "According to the commutative law, which of the following is true?",
        options: [
            "A ∪ B = B ∪ A",
            "A ∪ (B ∪ C) = (A ∪ B) ∪ C",
            "A ∪ A = A",
            "A ∪ ∅ = A"
        ],
        correct: 0,
        explanation: "The commutative law states that the order of union doesn't matter: A ∪ B = B ∪ A."
    },
    {
        id: 44,
        category: "Set Operations",
        question: "If A ⊆ B, what is A ∪ B?",
        options: [
            "A",
            "B",
            "A ∩ B",
            "∅"
        ],
        correct: 1,
        explanation: "If A is a subset of B, then the union of A and B is B."
    },
    {
        id: 45,
        category: "Set Operations",
        question: "If A ⊆ B, what is A ∩ B?",
        options: [
            "A",
            "B",
            "A ∪ B",
            "∅"
        ],
        correct: 0,
        explanation: "If A is a subset of B, then the intersection of A and B is A."
    },
    {
        id: 46,
        category: "Set Operations",
        question: "What is (A')' for any set A?",
        options: [
            "A",
            "A'",
            "U",
            "∅"
        ],
        correct: 0,
        explanation: "The complement of the complement of A is A itself."
    },
    {
        id: 47,
        category: "Set Operations",
        question: "If A = {1, 2} and B = {2, 3}, what is A × B?",
        options: [
            "{(1,2), (1,3), (2,2), (2,3)}",
            "{(1,2), (2,3)}",
            "{1, 2, 3}",
            "{(2,2)}"
        ],
        correct: 0,
        explanation: "The Cartesian product A × B contains all ordered pairs where the first element is from A and the second from B."
    },
    {
        id: 48,
        category: "Set Operations",
        question: "Which Venn diagram operation represents A ∩ B?",
        options: [
            "The area that is only in A",
            "The area that is only in B",
            "The overlapping area of A and B",
            "The area that is in neither A nor B"
        ],
        correct: 2,
        explanation: "The intersection A ∩ B is represented by the overlapping region of circles A and B in a Venn diagram."
    },
    {
        id: 49,
        category: "Set Operations",
        question: "If A and B are sets, what does the shaded region in a Venn diagram where only A is shaded represent?",
        options: [
            "A ∪ B",
            "A ∩ B",
            "A - B",
            "B - A"
        ],
        correct: 2,
        explanation: "When only A is shaded, it represents elements in A but not in B, which is A - B."
    },
    {
        id: 50,
        category: "Set Operations",
        question: "What is the result of A Δ A for any set A?",
        options: [
            "A",
            "A'",
            "U",
            "∅"
        ],
        correct: 3,
        explanation: "The symmetric difference of a set with itself contains elements in either set but not in both, which is empty."
    },
    {
        id: 51,
        category: "Set Operations",
        question: "If A = {1, 2, 3}, B = {3, 4, 5}, and C = {1, 5, 6}, what is (A ∪ B) ∩ C?",
        options: [
            "{1, 3, 5}",
            "{1, 5}",
            "{3, 5}",
            "{1, 3, 4, 5}"
        ],
        correct: 1,
        explanation: "First, A ∪ B = {1, 2, 3, 4, 5}. Then (A ∪ B) ∩ C = {1, 5}."
    },
    {
        id: 52,
        category: "Set Operations",
        question: "If n(A) = 5, n(B) = 7, and n(A ∩ B) = 3, what is n(A ∪ B)?",
        options: ["9", "10", "11", "12"],
        correct: 0,
        explanation: "Using the formula: n(A ∪ B) = n(A) + n(B) - n(A ∩ B) = 5 + 7 - 3 = 9."
    }
];

// Quiz state variables
let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let timer;
let timeLeft = 15 * 60; // 15 minutes in seconds

// DOM elements
const instructionsElement = document.getElementById('quiz-instructions');
const quizContainer = document.getElementById('quiz-container');
const resultsContainer = document.getElementById('results-container');
const startQuizButton = document.getElementById('start-quiz');
const questionContainer = document.getElementById('question-container');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const submitButton = document.getElementById('submit-btn');
const timeElement = document.getElementById('time');
const currentQuestionElement = document.getElementById('current-question');
const scoreDisplay = document.getElementById('score-display');
const answersReview = document.getElementById('answers-review');
const retakeButton = document.getElementById('retake-btn');

// Initialize the quiz
function initQuiz() {
    // Select 10 random questions
    currentQuestions = getRandomQuestions(10);
    currentQuestionIndex = 0;
    userAnswers = new Array(10).fill(null);
    
    // Display first question
    displayQuestion();
    updateNavigation();
    
    // Start timer
    startTimer();
}

// Get random questions from the question bank
function getRandomQuestions(count) {
    const shuffled = [...questionBank].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Display current question
function displayQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    
    questionContainer.innerHTML = `
        <div class="question">
            <div class="question-text">${currentQuestionIndex + 1}. ${question.question}</div>
            <div class="options">
                ${question.options.map((option, index) => `
                    <div class="option ${userAnswers[currentQuestionIndex] === index ? 'selected' : ''}" 
                         data-index="${index}">
                        ${String.fromCharCode(65 + index)}. ${option}
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    // Add event listeners to options
    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', function() {
            const selectedIndex = parseInt(this.getAttribute('data-index'));
            userAnswers[currentQuestionIndex] = selectedIndex;
            
            // Update UI
            document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
    
    // Update progress indicator
    currentQuestionElement.textContent = currentQuestionIndex + 1;
}

// Update navigation buttons
function updateNavigation() {
    prevButton.disabled = currentQuestionIndex === 0;
    nextButton.disabled = currentQuestionIndex === currentQuestions.length - 1;
    
    // Show submit button on last question
    if (currentQuestionIndex === currentQuestions.length - 1) {
        submitButton.style.display = 'inline-block';
    } else {
        submitButton.style.display = 'none';
    }
}

// Start the countdown timer
function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        
        // Update timer display
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timeElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        // Change color when time is running out
        if (timeLeft <= 60) {
            timeElement.style.color = 'var(--danger)';
        }
        
        // Auto-submit when time is up
        if (timeLeft <= 0) {
            clearInterval(timer);
            submitQuiz();
        }
    }, 1000);
}

// Navigate to previous question
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
        updateNavigation();
    }
}

// Navigate to next question
function nextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
        updateNavigation();
    }
}

// Submit the quiz
function submitQuiz() {
    clearInterval(timer);
    
    // Calculate score
    let score = 0;
    currentQuestions.forEach((question, index) => {
        if (userAnswers[index] === question.correct) {
            score++;
        }
    });
    
    // Display results
    displayResults(score);
    
    // Hide quiz, show results
    quizContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');
}

// Display quiz results
function displayResults(score) {
    const percentage = (score / currentQuestions.length) * 100;
    
    scoreDisplay.innerHTML = `
        <div class="score-text">Your Score: ${score}/${currentQuestions.length}</div>
        <div class="score-percentage">${percentage.toFixed(1)}%</div>
    `;
    
    // Display answer review
    answersReview.innerHTML = '';
    currentQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correct;
        
        const answerReview = document.createElement('div');
        answerReview.className = `answer-review ${isCorrect ? 'correct' : 'incorrect'}`;
        
        answerReview.innerHTML = `
            <div class="review-question">${index + 1}. ${question.question}</div>
            <div class="user-answer ${isCorrect ? 'correct-answer' : 'incorrect-answer'}">
                Your answer: ${userAnswer !== null ? 
                    `${String.fromCharCode(65 + userAnswer)}. ${question.options[userAnswer]}` : 
                    'Not answered'}
            </div>
            ${!isCorrect ? `
                <div class="correct-answer">
                    Correct answer: ${String.fromCharCode(65 + question.correct)}. ${question.options[question.correct]}
                </div>
            ` : ''}
            <div class="explanation">
                <strong>Explanation:</strong> ${question.explanation}
            </div>
        `;
        
        answersReview.appendChild(answerReview);
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Only add event listeners if we're on the quiz page
    if (startQuizButton) {
        startQuizButton.addEventListener('click', function() {
            instructionsElement.classList.add('hidden');
            quizContainer.classList.remove('hidden');
            initQuiz();
        });
        
        prevButton.addEventListener('click', prevQuestion);
        nextButton.addEventListener('click', nextQuestion);
        submitButton.addEventListener('click', submitQuiz);
        
        if (retakeButton) {
            retakeButton.addEventListener('click', function() {
                resultsContainer.classList.add('hidden');
                instructionsElement.classList.remove('hidden');
                timeLeft = 15 * 60;
                timeElement.style.color = '';
            });
        }
    }
});