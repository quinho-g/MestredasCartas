const questions = document.querySelectorAll('.question');
let currentQuestionIndex;
let score = 0;

function showRandomQuestion() {
    // Oculta todas as perguntas
    questions.forEach(q => q.style.display = 'none');

    // Escolhe uma pergunta aleatória
    currentQuestionIndex = Math.floor(Math.random() * questions.length);
    questions[currentQuestionIndex].style.display = 'block';

    const options = questions[currentQuestionIndex].querySelectorAll('.option');
    options.forEach(option => {
        option.onclick = () => selectOption(option.innerText);
    });
}

function selectOption(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].dataset.answer;

    if (selectedOption === correctAnswer) {
        score++; // Incrementa o contador de acertos
        document.getElementById('score').innerText = score; // Atualiza o contador na tela
        showRandomQuestion(); // Exibe a próxima pergunta
    } else {
        showEndScreen();
    }
}

function showEndScreen() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('end-container').style.display = 'block';
}

document.getElementById('restart-button').onclick = () => {
    score = 0; // Reseta o contador ao reiniciar o quiz
    document.getElementById('score').innerText = score; // Atualiza o contador na tela
    document.getElementById('end-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    showRandomQuestion();
};

// Inicia o quiz ao carregar a página
showRandomQuestion();