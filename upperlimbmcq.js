// DOM Elements
const browseAllBtn = document.getElementById('browse-all-btn');
const topicReviewBtn = document.getElementById('topic-review-btn');
const browseModal = document.getElementById('browse-modal');
const topicModal = document.getElementById('topic-modal');
const closeModalButtons = document.querySelectorAll('.close-modal');
const allQuestionsList = document.getElementById('all-questions-list');
const questionSearch = document.getElementById('question-search');
const topicFilter = document.getElementById('topic-filter');
const totalQuestionsElement = document.getElementById('total-questions');
const startTopicButtons = document.querySelectorAll('.start-topic');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Update total questions count
    totalQuestionsElement.textContent = upperLimbQuestions.length;
    
    // Load all questions for browsing
    loadAllQuestions();
    
    // Event Listeners
    browseAllBtn.addEventListener('click', function(e) {
        e.preventDefault();
        browseModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    
    topicReviewBtn.addEventListener('click', function(e) {
        e.preventDefault();
        topicModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    
    // Close modal when clicking X
    closeModalButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Search and filter functionality
    questionSearch.addEventListener('input', filterQuestions);
    topicFilter.addEventListener('change', filterQuestions);
    
    // Start topic review buttons
    startTopicButtons.forEach(button => {
        button.addEventListener('click', function() {
            const topic = this.closest('.topic-card').dataset.topic;
            startTopicReview(topic);
        });
    });
});

// Load all questions into the browse modal
function loadAllQuestions() {
    allQuestionsList.innerHTML = '';
    
    upperLimbQuestions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.className = 'question-item';
        questionElement.dataset.topic = question.topic || 'general';
        
        // Create options list
        const optionsList = Object.keys(question.options).map(key => {
            return `<div class="question-option"><strong>${key})</strong> ${question.options[key]}</div>`;
        }).join('');
        
        questionElement.innerHTML = `
            <h4>Q${index + 1}: ${question.question}</h4>
            <div class="question-options">
                ${optionsList}
            </div>
            <div class="correct-answer">
                <strong>Correct Answer:</strong> ${question.answer}
                ${question.explanation ? `<br><strong>Explanation:</strong> ${question.explanation}` : ''}
            </div>
        `;
        
        allQuestionsList.appendChild(questionElement);
    });
}

// Filter questions based on search and topic
function filterQuestions() {
    const searchTerm = questionSearch.value.toLowerCase();
    const selectedTopic = topicFilter.value;
    
    const questionItems = document.querySelectorAll('.question-item');
    
    questionItems.forEach(item => {
        const questionText = item.querySelector('h4').textContent.toLowerCase();
        const questionTopic = item.dataset.topic;
        
        const matchesSearch = questionText.includes(searchTerm);
        const matchesTopic = selectedTopic === 'all' || questionTopic === selectedTopic;
        
        if (matchesSearch && matchesTopic) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Start topic review
function startTopicReview(topic) {
    // For now, just show an alert. In a full implementation, this would redirect to a topic-specific quiz page.
    const topicNames = {
        pectoral: "Pectoral Girdle",
        brachial: "Brachial Plexus",
        shoulder: "Shoulder Joint",
        arm: "Arm Anatomy",
        forearm: "Forearm Anatomy",
        hand: "Hand Anatomy",
        innervation: "Innervation",
        blood: "Blood Supply"
    };
    
    alert(`Starting ${topicNames[topic]} review. In a full implementation, this would start a quiz with questions from this topic.`);
    
    // Close the modal
    topicModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Add sample topics to questions (in a real implementation, this would be more comprehensive)
// This function adds topic tags to questions based on keywords
function addTopicsToQuestions() {
    upperLimbQuestions.forEach(question => {
        const qText = question.question.toLowerCase();
        
        if (qText.includes('pectoral') || qText.includes('clavicle') || qText.includes('scapula')) {
            question.topic = 'pectoral';
        } else if (qText.includes('brachial plexus') || qText.includes('nerve root') || qText.includes('cord')) {
            question.topic = 'brachial';
        } else if (qText.includes('shoulder joint') || qText.includes('glenohumeral') || qText.includes('rotator cuff')) {
            question.topic = 'shoulder';
        } else if (qText.includes('arm') && !qText.includes('forearm')) {
            question.topic = 'arm';
        } else if (qText.includes('forearm') || qText.includes('cubital') || qText.includes('interosseous')) {
            question.topic = 'forearm';
        } else if (qText.includes('hand') || qText.includes('carpal') || qText.includes('metacarpal') || qText.includes('thenar')) {
            question.topic = 'hand';
        } else if (qText.includes('innervation') || qText.includes('nerve supply') || qText.includes('supplied by')) {
            question.topic = 'innervation';
        } else if (qText.includes('arter') || qText.includes('vein') || qText.includes('blood supply')) {
            question.topic = 'blood';
        } else {
            question.topic = 'general';
        }
    });
}

// Initialize topics
addTopicsToQuestions();