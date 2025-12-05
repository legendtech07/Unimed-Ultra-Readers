// CBT Quiz Questions Database (50 questions)
const cbtQuestions = [
    {
        id: 1,
        question: "What is the hip bone also known as?",
        options: [
            "Femoral bone",
            "Innominate bone",
            "Sacral bone",
            "Tibial bone"
        ],
        correctAnswer: 1,
        explanation: "The hip bone is also called the innominate bone, pelvic bone, or coxal bone. It forms part of the pelvic girdle."
    },
    {
        id: 2,
        question: "Which three bones fuse to form the hip bone?",
        options: [
            "Ilium, Ischium, Sacrum",
            "Ilium, Ischium, Pubis",
            "Pubis, Sacrum, Coccyx",
            "Ischium, Pubis, Femur"
        ],
        correctAnswer: 1,
        explanation: "The hip bone develops from three separate bones: ilium (superior), ischium (posteroinferior), and pubis (anterior). These fuse during puberty."
    },
    {
        id: 3,
        question: "Where is the acetabulum located?",
        options: [
            "On the medial surface of the hip bone",
            "On the superior surface of the ilium",
            "On the lateral surface of the hip bone",
            "On the anterior surface of the pubis"
        ],
        correctAnswer: 2,
        explanation: "The acetabulum is a deep, cup-shaped socket on the lateral surface of the hip bone that articulates with the femoral head."
    },
    {
        id: 4,
        question: "What structure is located anteroinferior to the acetabulum?",
        options: [
            "Ischial tuberosity",
            "Obturator foramen",
            "Iliac crest",
            "Pubic symphysis"
        ],
        correctAnswer: 1,
        explanation: "The obturator foramen is a large opening located anteroinferior to the acetabulum, bounded by the pubis and ischium."
    },
    {
        id: 5,
        question: "Which part of the hip bone is the largest and most superior?",
        options: [
            "Ischium",
            "Pubis",
            "Ilium",
            "Acetabulum"
        ],
        correctAnswer: 2,
        explanation: "The ilium is the largest and most superior component of the hip bone, consisting of a body and an ala (wing)."
    },
    {
        id: 6,
        question: "What is the function of the ischial tuberosity?",
        options: [
            "Attachment site for abdominal muscles",
            "Supports body weight when seated",
            "Forms the acetabulum",
            "Protects pelvic organs"
        ],
        correctAnswer: 1,
        explanation: "The ischial tuberosity supports body weight in the seated position and provides attachment for posterior thigh muscles."
    },
    {
        id: 7,
        question: "Which structure forms the inferior border of the obturator foramen?",
        options: [
            "Superior pubic ramus",
            "Ischiopubic ramus",
            "Iliac crest",
            "Acetabular margin"
        ],
        correctAnswer: 1,
        explanation: "The ischiopubic ramus (formed by union of ischial ramus and inferior pubic ramus) forms the inferior border of the obturator foramen."
    },
    {
        id: 8,
        question: "What passes through the obturator canal?",
        options: [
            "Sciatic nerve",
            "Obturator nerve, artery and vein",
            "Femoral nerve",
            "Superior gluteal vessels"
        ],
        correctAnswer: 1,
        explanation: "The obturator canal transmits the obturator nerve, artery and vein between the pelvic cavity and medial thigh compartment."
    },
    {
        id: 9,
        question: "Which structure is the attachment site for the sacrospinous ligament?",
        options: [
            "Ischial tuberosity",
            "Ischial spine",
            "Iliac crest",
            "Pubic tubercle"
        ],
        correctAnswer: 1,
        explanation: "The ischial spine projects posteromedially and provides attachment for the sacrospinous ligament."
    },
    {
        id: 10,
        question: "What landmark on the ilium is commonly used for bone marrow biopsy?",
        options: [
            "Anterior inferior iliac spine",
            "Iliac crest",
            "Posterior superior iliac spine",
            "Greater sciatic notch"
        ],
        correctAnswer: 1,
        explanation: "The iliac crest is often used for bone marrow biopsy because it lies close to the surface and is easily palpated."
    },
    {
        id: 11,
        question: "What is the moon-shaped articular surface of the acetabulum called?",
        options: [
            "Acetabular fossa",
            "Lunate surface",
            "Acetabular margin",
            "Obturator surface"
        ],
        correctAnswer: 1,
        explanation: "The lunate surface is the moon-shaped articular surface of the acetabulum that articulates with the femoral head."
    },
    {
        id: 12,
        question: "Which part of the hip bone forms the anterior portion?",
        options: [
            "Ilium",
            "Ischium",
            "Pubis",
            "Acetabulum"
        ],
        correctAnswer: 2,
        explanation: "The pubis (or pubic bone) forms the anterior and inferior part of the hip bone."
    },
    {
        id: 13,
        question: "What is the non-articular central portion of the acetabulum called?",
        options: [
            "Lunate surface",
            "Acetabular fossa",
            "Acetabular notch",
            "Obturator foramen"
        ],
        correctAnswer: 1,
        explanation: "The acetabular fossa is the non-articular, central portion of the acetabulum."
    },
    {
        id: 14,
        question: "Which border of the ilium features the anterior superior iliac spine?",
        options: [
            "Superior border",
            "Anterior border",
            "Posterior border",
            "Medial border"
        ],
        correctAnswer: 1,
        explanation: "The anterior border of the ilium extends from the anterior superior iliac spine to the acetabulum."
    },
    {
        id: 15,
        question: "What structure completes the acetabulum inferiorly?",
        options: [
            "Acetabular labrum",
            "Transverse acetabular ligament",
            "Obturator membrane",
            "Ischiopubic ramus"
        ],
        correctAnswer: 1,
        explanation: "The transverse acetabular ligament completes the acetabulum inferiorly at the acetabular notch."
    },
    {
        id: 16,
        question: "What muscle attaches to the ischial tuberosity?",
        options: [
            "Rectus femoris",
            "Biceps femoris (long head)",
            "Vastus lateralis",
            "Tensor fasciae latae"
        ],
        correctAnswer: 1,
        explanation: "The ischial tuberosity provides attachment for the posterior thigh muscles including semimembranosus, semitendinosus, and the long head of biceps femoris."
    },
    {
        id: 17,
        question: "What is the superior border of the ilium called?",
        options: [
            "Iliac fossa",
            "Iliac crest",
            "Arcuate line",
            "Gluteal line"
        ],
        correctAnswer: 1,
        explanation: "The superior border of the ilium is the prominent iliac crest, a site of attachment for abdominal muscles and fascia."
    },
    {
        id: 18,
        question: "Which structure is converted into the lesser sciatic foramen?",
        options: [
            "Greater sciatic notch",
            "Lesser sciatic notch",
            "Obturator foramen",
            "Acetabular notch"
        ],
        correctAnswer: 1,
        explanation: "The lesser sciatic notch is converted into the lesser sciatic foramen by the sacrotuberous and sacrospinous ligaments."
    },
    {
        id: 19,
        question: "What part of the hip bone contributes to the formation of the pelvic brim?",
        options: [
            "Ischial tuberosity",
            "Pecten pubis",
            "Acetabular fossa",
            "Greater sciatic notch"
        ],
        correctAnswer: 1,
        explanation: "The pecten pubis is continuous with the pubic crest and arcuate line of the ilium, contributing to the pelvic brim."
    },
    {
        id: 20,
        question: "What separates the greater from the lesser pelvis?",
        options: [
            "Obturator membrane",
            "Pelvic brim",
            "Acetabular margin",
            "Ischiopubic ramus"
        ],
        correctAnswer: 1,
        explanation: "The pelvic brim is an imaginary planar surface that delineates the pelvic inlet, separating greater (false) from lesser (true) pelvis."
    },
    {
        id: 21,
        question: "Which structure provides attachment for the medial end of the inguinal ligament?",
        options: [
            "Iliac crest",
            "Pubic tubercle",
            "Anterior superior iliac spine",
            "Ischial spine"
        ],
        correctAnswer: 1,
        explanation: "The pubic tubercle provides attachment for the medial end of the inguinal ligament."
    },
    {
        id: 22,
        question: "What is the shape of the acetabular margin?",
        options: [
            "Complete circle",
            "C-shaped",
            "Triangular",
            "Rectangular"
        ],
        correctAnswer: 1,
        explanation: "The acetabular margin is 'C' shaped and incomplete inferiorly at the acetabular notch."
    },
    {
        id: 23,
        question: "Which part of the ilium contributes to the acetabulum?",
        options: [
            "Ala",
            "Body",
            "Iliac crest",
            "Iliac fossa"
        ],
        correctAnswer: 1,
        explanation: "The body of the ilium (inferior part) contributes to the formation of the acetabulum, while the ala is the expanded superior part."
    },
    {
        id: 24,
        question: "What is located immediately below the ischial spine?",
        options: [
            "Ischial tuberosity",
            "Lesser sciatic notch",
            "Greater sciatic notch",
            "Obturator foramen"
        ],
        correctAnswer: 1,
        explanation: "Immediately below the ischial spine is the lesser sciatic notch, a small 'C' shaped concavity."
    },
    {
        id: 25,
        question: "Which muscle attaches to the inferior pubic ramus?",
        options: [
            "Rectus abdominis",
            "Adductor magnus",
            "Gluteus maximus",
            "Iliopsoas"
        ],
        correctAnswer: 1,
        explanation: "The inferior pubic ramus provides attachment for adductor muscles of the thigh including adductor magnus, minimus, brevis and gracilis."
    },
    {
        id: 26,
        question: "When do the three components of the hip bone completely fuse?",
        options: [
            "At birth",
            "During childhood",
            "During puberty",
            "In adulthood"
        ],
        correctAnswer: 2,
        explanation: "The ilium, ischium and pubis fuse during puberty to form the compact hip bone, though they develop separately and are connected by cartilage in children."
    },
    {
        id: 27,
        question: "What is the center of union for the three hip bone components?",
        options: [
            "Iliac crest",
            "Acetabulum",
            "Obturator foramen",
            "Pubic symphysis"
        ],
        correctAnswer: 1,
        explanation: "The three components of the hip bone unite at the acetabulum, which is the center of their fusion."
    },
    {
        id: 28,
        question: "What type of joint is formed between the acetabulum and femoral head?",
        options: [
            "Fibrous joint",
            "Cartilaginous joint",
            "Synovial ball-and-socket joint",
            "Suture"
        ],
        correctAnswer: 2,
        explanation: "The acetabulum articulates with the femoral head to form the hip joint, which is a synovial ball-and-socket joint."
    },
    {
        id: 29,
        question: "Which surface of the pubis faces medially to articulate at the pubic symphysis?",
        options: [
            "Anterior surface",
            "Posterior surface",
            "Symphysial surface",
            "Obturator surface"
        ],
        correctAnswer: 2,
        explanation: "The symphysial (medial) surface of the pubic body faces medially to articulate with its counterpart at the pubic symphysis."
    },
    {
        id: 30,
        question: "What is the triangular cross-section of the superior pubic ramus bounded by?",
        options: [
            "Three borders and three surfaces",
            "Two borders and two surfaces",
            "Four borders and four surfaces",
            "One border and one surface"
        ],
        correctAnswer: 0,
        explanation: "The superior pubic ramus is triangular in cross section and has three borders and three surfaces."
    },
    {
        id: 31,
        question: "Which line runs anteroinferiorly from the auricular surface to the acetabulum?",
        options: [
            "Pectineal line",
            "Arcuate line",
            "Gluteal line",
            "Iliac line"
        ],
        correctAnswer: 1,
        explanation: "The arcuate line is a smooth, rounded line that runs anteroinferiorly from the auricular surface to the area of the acetabulum on the medial border of the ilium."
    },
    {
        id: 32,
        question: "What covers most of the obturator foramen?",
        options: [
            "Obturator membrane",
            "Obturator internus muscle",
            "Obturator externus muscle",
            "Transverse acetabular ligament"
        ],
        correctAnswer: 0,
        explanation: "Most of the obturator foramen is covered by a flat connective tissue membrane called the obturator membrane."
    },
    {
        id: 33,
        question: "Which part of the ischium joins with the inferior pubic ramus?",
        options: [
            "Ischial body",
            "Ischial ramus",
            "Ischial spine",
            "Ischial tuberosity"
        ],
        correctAnswer: 1,
        explanation: "The ramus of the ischium extends anteromedially to join the inferior pubic ramus, forming the ischiopubic ramus."
    },
    {
        id: 34,
        question: "What is the direction of the acetabular socket?",
        options: [
            "Anterosuperiorly",
            "Anteroinferiorly",
            "Posterosuperiorly",
            "Posteroinferiorly"
        ],
        correctAnswer: 1,
        explanation: "The acetabulum bears a socket-shaped articular surface that faces anteroinferiorly to articulate with the head of the femur."
    },
    {
        id: 35,
        question: "Which structure accentuates the acetabular margin?",
        options: [
            "Transverse acetabular ligament",
            "Acetabular labrum",
            "Obturator membrane",
            "Articular cartilage"
        ],
        correctAnswer: 1,
        explanation: "The acetabular margin is accentuated by the cartilaginous acetabular labrum."
    },
    {
        id: 36,
        question: "What is the location of the ischium relative to the hip bone?",
        options: [
            "Superior",
            "Anterior",
            "Posteroinferior",
            "Medial"
        ],
        correctAnswer: 2,
        explanation: "The ischium is located posteroinferiorly in the hip bone."
    },
    {
        id: 37,
        question: "Which bone completes the bony pelvis posteriorly?",
        options: [
            "Femur",
            "Sacrum and coccyx",
            "Lumbar vertebrae",
            "Coccyx only"
        ],
        correctAnswer: 1,
        explanation: "The bony pelvis is completed posteriorly by the pelvic spine composed of the sacrum and coccyx."
    },
    {
        id: 38,
        question: "What is the function of the bony pelvis?",
        options: [
            "Only weightbearing",
            "Only protection of viscera",
            "Weightbearing, protection, muscle attachment",
            "Only muscle attachment"
        ],
        correctAnswer: 2,
        explanation: "The bony pelvis connects axial skeleton to lower limbs (weightbearing), protects abdominopelvic viscera, provides muscle attachment, and forms part of birth canal."
    },
    {
        id: 39,
        question: "Which structure separates the pelvic surface from the obturator surface on the superior pubic ramus?",
        options: [
            "Pecten pubis",
            "Obturator crest",
            "Pubic crest",
            "Iliopubic eminence"
        ],
        correctAnswer: 1,
        explanation: "The obturator surface of the superior pubic ramus is bounded by the obturator crest anteriorly."
    },
    {
        id: 40,
        question: "What converts the greater sciatic notch into the greater sciatic foramen?",
        options: [
            "Sacrotuberous ligament only",
            "Sacrospinous ligament only",
            "Both sacrotuberous and sacrospinous ligaments",
            "Transverse acetabular ligament"
        ],
        correctAnswer: 2,
        explanation: "The greater sciatic notch is converted into the greater sciatic foramen by the sacrotuberous and sacrospinous ligaments."
    },
    {
        id: 41,
        question: "What is the small component of the hip bone?",
        options: [
            "Ilium",
            "Ischium",
            "Pubis",
            "All are equal"
        ],
        correctAnswer: 2,
        explanation: "The pubis is the smallest component of the hip bone."
    },
    {
        id: 42,
        question: "What is the location of the iliac fossa?",
        options: [
            "On the gluteal surface",
            "On the sacropelvic surface",
            "On the medial surface of the ala",
            "On the lateral surface"
        ],
        correctAnswer: 2,
        explanation: "The iliac fossa is on the medial surface of the ala of the ilium."
    },
    {
        id: 43,
        question: "Which part of the pubis extends toward the acetabulum?",
        options: [
            "Inferior pubic ramus",
            "Superior pubic ramus",
            "Pubic body",
            "Pubic crest"
        ],
        correctAnswer: 1,
        explanation: "The superior pubic ramus projects posterolaterally from the body toward the acetabulum."
    },
    {
        id: 44,
        question: "What is the direction of the ischial spine?",
        options: [
            "Anterolaterally",
            "Anteromedially",
            "Posterolaterally",
            "Posteromedially"
        ],
        correctAnswer: 3,
        explanation: "The ischial spine is a conical prominence pointing posteromedially."
    },
    {
        id: 45,
        question: "Which ligament attaches to the sacrotuberous ligament?",
        options: [
            "Ischial tuberosity",
            "Ischial spine",
            "Iliac crest",
            "Pubic tubercle"
        ],
        correctAnswer: 0,
        explanation: "The sacrotuberous ligament attaches to the ischial tuberosity."
    },
    {
        id: 46,
        question: "What is the rounded upper border of the pubic body called?",
        options: [
            "Pubic tubercle",
            "Pubic crest",
            "Pecten pubis",
            "Arcuate line"
        ],
        correctAnswer: 1,
        explanation: "The rounded upper border of the pubic body is the pubic crest."
    },
    {
      id: 47,
        question: "What is the location of the anterior inferior iliac spine?",
        options: [
            "On the posterior border",
            "On the medial border",
            "Just superior to the acetabulum",
            "On the iliac crest"
        ],
        correctAnswer: 2,
        explanation: "The anterior inferior iliac spine is located just superior to the acetabulum on the anterior border."
    },
    {
        id: 48,
        question: "Which part of the hip bone is blade-shaped?",
        options: [
            "Ischium",
            "Pubis",
            "Ilium",
            "Acetabulum"
        ],
        correctAnswer: 2,
        explanation: "The ilium is described as a blade-shaped bone."
    },
    {
        id: 49,
        question: "What is crossed by the obturator groove?",
        options: [
            "Pectineal surface",
            "Obturator surface",
            "Pelvic surface",
            "Gluteal surface"
        ],
        correctAnswer: 1,
        explanation: "The obturator surface of the superior pubic ramus is crossed by the obturator groove."
    },
    {
        id: 50,
        question: "In bone marrow biopsy, where is the needle passed through?",
        options: [
            "Cortical bone of iliac crest",
            "Medullary cavity of femur",
            "Trabecular bone of ischium",
            "Spongy bone of pubis"
        ],
        correctAnswer: 0,
        explanation: "In bone marrow biopsy from the iliac crest, a cutting needle is passed through the cortical bone of the iliac crest to obtain marrow tissue."
    }
];

// Quiz State
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = new Array(10).fill(null);
let selectedQuestions = [];
let quizCompleted = false;

// DOM Elements
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const currentQuestionEl = document.getElementById('current-question');
const totalQuestionsEl = document.getElementById('total-questions');
const scoreEl = document.getElementById('score');
const feedbackEl = document.getElementById('feedback');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');

// Initialize Quiz
function initQuiz() {
    // Select 10 random questions from the pool of 50
    selectedQuestions = getRandomQuestions(cbtQuestions, 10);
    
    // Initialize user answers array
    userAnswers = new Array(selectedQuestions.length).fill(null);
    
    // Update display
    totalQuestionsEl.textContent = selectedQuestions.length;
    scoreEl.textContent = score;
    
    // Load first question
    loadQuestion(currentQuestionIndex);
}

// Get random questions from array
function getRandomQuestions(questions, count) {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Load question at specified index
function loadQuestion(index) {
    if (index < 0 || index >= selectedQuestions.length) return;
    
    currentQuestionIndex = index;
    const question = selectedQuestions[index];
    
    // Update question counter
    currentQuestionEl.textContent = index + 1;
    
    // Set question text
    questionText.textContent = question.question;
    
    // Clear previous options
    optionsContainer.innerHTML = '';
    
    // Create new options
    question.options.forEach((option, i) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'answer';
        input.value = i;
        input.id = `option-${i}`;
        input.checked = userAnswers[index] === i;
        
        input.addEventListener('change', () => selectAnswer(i));
        
        const label = document.createElement('label');
        label.className = 'option-label';
        label.htmlFor = `option-${i}`;
        label.textContent = option;
        
        optionDiv.appendChild(input);
        optionDiv.appendChild(label);
        optionsContainer.appendChild(optionDiv);
    });
    
    // Hide feedback
    feedbackEl.style.display = 'none';
    feedbackEl.innerHTML = '';
    
    // Update button states
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === selectedQuestions.length - 1;
    
    // Show submit button on last question
    if (index === selectedQuestions.length - 1) {
        submitBtn.style.display = 'inline-block';
    } else {
        submitBtn.style.display = 'none';
    }
}

// Select answer for current question
function selectAnswer(answerIndex) {
    userAnswers[currentQuestionIndex] = answerIndex;
    
    // Check if answer is correct
    const question = selectedQuestions[currentQuestionIndex];
    const isCorrect = answerIndex === question.correctAnswer;
    
    // Show feedback
    feedbackEl.style.display = 'block';
    feedbackEl.innerHTML = `
        <strong>${isCorrect ? '✓ Correct!' : '✗ Incorrect'}</strong><br>
        <em>Explanation:</em> ${question.explanation}
    `;
    feedbackEl.style.backgroundColor = isCorrect ? '#d4edda' : '#f8d7da';
    feedbackEl.style.color = isCorrect ? '#155724' : '#721c24';
    feedbackEl.style.border = isCorrect ? '1px solid #c3e6cb' : '1px solid #f5c6cb';
    
    // Update score if this is first time answering
    if (isCorrect && !question.answered) {
        score++;
        scoreEl.textContent = score;
        question.answered = true;
    }
}

// Navigate to next question
function nextQuestion() {
    if (currentQuestionIndex < selectedQuestions.length - 1) {
        loadQuestion(currentQuestionIndex + 1);
    }
}

// Navigate to previous question
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        loadQuestion(currentQuestionIndex - 1);
    }
}

// Submit and show results
function submitQuiz() {
    if (quizCompleted) return;
    
    // Calculate final score
    score = 0;
    selectedQuestions.forEach((question, index) => {
        if (userAnswers[index] === question.correctAnswer) {
            score++;
        }
    });
    
    quizCompleted = true;
    
    // Create results page
    const resultsHTML = `
        <div class="results-container">
            <div class="results-card">
                <div class="score-circle">
                    ${score}/${selectedQuestions.length}
                </div>
                <h2>Quiz Completed!</h2>
                <p class="score-text">You scored ${score} out of ${selectedQuestions.length} questions correctly.</p>
                <p>${getPerformanceMessage(score, selectedQuestions.length)}</p>
                
                <div class="answer-review">
                    <h3><i class="fas fa-clipboard-check"></i> Answer Review</h3>
                    ${generateAnswerReview()}
                </div>
                
                <div style="margin-top: 30px;">
                    <button class="nav-btn home-btn" onclick="location.href='hip232.html'" style="margin-right: 10px;">
                        <i class="fas fa-home"></i> Back to Home
                    </button>
                    <button class="nav-btn next-btn" onclick="location.reload()">
                        <i class="fas fa-redo"></i> Retake Quiz
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.querySelector('.quiz-container').innerHTML = resultsHTML;
}

// Generate performance message
function getPerformanceMessage(score, total) {
    const percentage = (score / total) * 100;
    
    if (percentage >= 90) return "Excellent! You have mastered hip bone osteology!";
    if (percentage >= 75) return "Very good! You have a solid understanding of hip bone anatomy.";
    if (percentage >= 60) return "Good effort! Review the material to improve your knowledge.";
    return "Keep studying! Review the lecture material and try again.";
}

// Generate answer review section
function generateAnswerReview() {
    let reviewHTML = '';
    
    selectedQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correctAnswer;
        
        reviewHTML += `
            <div class="review-item ${isCorrect ? 'correct-answer' : 'incorrect-answer'}">
                <strong>Question ${index + 1}:</strong> ${question.question}<br>
                <strong>Your answer:</strong> ${userAnswer !== null ? question.options[userAnswer] : 'Not answered'}<br>
                <strong>Correct answer:</strong> ${question.options[question.correctAnswer]}<br>
                <div class="explanation">
                    <strong>Explanation:</strong> ${question.explanation}
                </div>
            </div>
        `;
    });
    
    return reviewHTML;
}

// Initialize quiz when page loads
document.addEventListener('DOMContentLoaded', initQuiz);