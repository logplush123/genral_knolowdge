// Game State Variables
let currentSet = '';
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft;
let totalTime;
let questions = [];
let selectedOptions = [];
let correctAnswers = [];
let answeredQuestions = 0;
let totalQuestions = 0;

// DOM Elements
const screens = {
    menu: document.getElementById('menu-screen'),
    quiz: document.getElementById('quiz-screen'),
    results: document.getElementById('results-screen')
};
const modal = document.getElementById('quit-modal');

// Set Names in English
const setNames = {
    set1: 'Set 1: Practice',
    set2: 'Set 2: Standard',
    set3: 'Set 3: Expert'
};

function init() {
    screens.menu.classList.add('active');
    screens.quiz.classList.remove('active');
    screens.results.classList.remove('active');
    resetGameState();
}

function startQuiz(set) {
    currentSet = set;
    currentQuestionIndex = 0;
    score = 0;
    answeredQuestions = 0;
    
    questions = quizData[currentSet];
    totalQuestions = questions.length;
    
    selectedOptions = new Array(totalQuestions).fill(null);
    correctAnswers = new Array(totalQuestions).fill(false);
    
    if (currentSet === 'set1') {
        timeLeft = 300; 
        totalTime = 300;
    } else if (currentSet === 'set2') {
        timeLeft = 15;
        totalTime = 15;
    } else {
        timeLeft = 10;
        totalTime = 10;
    }
    
    document.getElementById('current-set-name').textContent = setNames[currentSet];
    document.getElementById('score').textContent = '0';
    
    screens.menu.classList.remove('active');
    screens.quiz.classList.add('active');
    screens.results.classList.remove('active');
    
    updateProgressBar();
    startTimer();
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        endQuiz();
        return;
    }
    
    const question = questions[currentQuestionIndex];
    document.getElementById('question-counter').textContent = `Question ${currentQuestionIndex + 1}/${questions.length}`;
    document.getElementById('q-number').textContent = `Question ${currentQuestionIndex + 1}`;
    document.getElementById('question-text').textContent = question.प्रश्न;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    const options = question.विकल्पहरू;
    for (const key in options) {
        const option = document.createElement('div');
        option.className = 'option';
        option.textContent = `${String.fromCharCode(65 + parseInt(key))}: ${options[key]}`;
        option.dataset.option = key;
        
        if (selectedOptions[currentQuestionIndex] === key) {
            option.classList.add(correctAnswers[currentQuestionIndex] ? 'correct' : 'wrong');
            option.style.pointerEvents = 'none';
        } else {
            option.addEventListener('click', () => selectOption(key, option));
        }
        optionsContainer.appendChild(option);
    }
    
    if (currentSet !== 'set1') resetQuestionTimer();
}

function selectOption(optionKey, optionElement) {
    const question = questions[currentQuestionIndex];
    document.querySelectorAll('.option').forEach(opt => opt.style.pointerEvents = 'none');
    
    const isCorrect = optionKey === question.सही_उत्तर_विकल्प;
    selectedOptions[currentQuestionIndex] = optionKey;
    
    if (isCorrect) {
        optionElement.classList.add('correct', 'pulse');
        score++;
        document.getElementById('score').textContent = score;
        correctAnswers[currentQuestionIndex] = true;
    } else {
        optionElement.classList.add('wrong', 'shake');
        const correctOpt = document.querySelector(`[data-option="${question.सही_उत्तर_विकल्प}"]`);
        if (correctOpt) correctOpt.classList.add('correct');
        correctAnswers[currentQuestionIndex] = false;
    }
    
    answeredQuestions++;
    setTimeout(() => {
        currentQuestionIndex++;
        currentQuestionIndex < questions.length ? loadQuestion() : endQuiz();
    }, 1000);
}

function startTimer() {
    clearInterval(timer);
    timer = setInterval(updateTimer, 1000);
}

function resetQuestionTimer() {
    timeLeft = (currentSet === 'set2') ? 15 : 10;
    totalTime = timeLeft;
    updateTimerDisplay();
    updateProgressBar();
}

function updateTimer() {
    timeLeft--;
    updateTimerDisplay();
    updateProgressBar();
    
    if (timeLeft <= 0) {
        if (selectedOptions[currentQuestionIndex] === null) {
            selectedOptions[currentQuestionIndex] = 'timeout';
            correctAnswers[currentQuestionIndex] = false;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            if (currentSet !== 'set1') resetQuestionTimer();
            loadQuestion();
        } else {
            endQuiz();
        }
    }
}

function updateTimerDisplay() {
    const m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    const s = (timeLeft % 60).toString().padStart(2, '0');
    document.getElementById('timer').textContent = `${m}:${s}`;
}

function updateProgressBar() {
    const percentage = (timeLeft / totalTime) * 100;
    document.getElementById('progress-fill').style.width = `${percentage}%`;
}

function endQuiz() {
    clearInterval(timer);
    const correctCount = correctAnswers.filter(Boolean).length;
    
    document.getElementById('set-result-name').textContent = setNames[currentSet];
    document.getElementById('final-score').textContent = score;
    document.getElementById('total-questions').textContent = totalQuestions;
    document.getElementById('correct-count').textContent = correctCount;
    document.getElementById('wrong-count').textContent = answeredQuestions - correctCount;
    document.getElementById('skipped-count').textContent = totalQuestions - answeredQuestions;
    
    const m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    const s = (timeLeft % 60).toString().padStart(2, '0');
    document.getElementById('time-left').textContent = `${m}:${s}`;
    
    const percentage = (score / totalQuestions) * 100;
    const msg = document.getElementById('result-message');
    const desc = document.getElementById('result-description');
    
    if (percentage >= 90) { msg.textContent = 'Excellent!'; desc.textContent = 'Master Level!'; }
    else if (percentage >= 70) { msg.textContent = 'Great Job!'; desc.textContent = 'Very good knowledge.'; }
    else { msg.textContent = 'Keep Practicing'; desc.textContent = 'Try again to improve.'; }
    
    screens.quiz.classList.remove('active');
    screens.results.classList.add('active');
}

// Modal Controls
function showQuitModal() {
    clearInterval(timer); // Pause timer
    modal.style.display = 'flex';
}

function closeQuitModal() {
    modal.style.display = 'none';
    startTimer(); // Resume timer
}

function confirmQuit() {
    modal.style.display = 'none';
    resetGameState();
    screens.quiz.classList.remove('active');
    screens.menu.classList.add('active');
}

function restartQuiz() { startQuiz(currentSet); }
function goToMenu() { resetGameState(); screens.results.classList.remove('active'); screens.menu.classList.add('active'); }

function resetGameState() {
    currentSet = ''; currentQuestionIndex = 0; score = 0;
    timeLeft = 0; questions = []; selectedOptions = [];
    correctAnswers = []; answeredQuestions = 0; totalQuestions = 0;
    clearInterval(timer);
}

document.addEventListener('DOMContentLoaded', init);
