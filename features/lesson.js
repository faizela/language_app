const rightAnswer = document.querySelector('.correct');
const wrongAnswerOne = document.querySelector('.wrong-one');
const wrongAnswerTwo = document.querySelector('.wrong-two');
const questionsDiv = document.querySelector('.lesson-questions');
const explanation = document.querySelector('.explanation');
const button = document.querySelector('.continue');
const delay = 1300;

rightAnswer.addEventListener('click', correctAnswer);
wrongAnswerOne.addEventListener('click', firstWrongAnswer);
wrongAnswerTwo.addEventListener('click', secondWrongAnswer);

function correctAnswer() {
    rightAnswer.style.backgroundColor = '#90ee90';
    setTimeout(function () {
        questionsDiv.style.display = 'none';
        explanation.style.display = 'block';
        button.style.display = 'block';
    }, delay)

}

function firstWrongAnswer() {
    wrongAnswerOne.style.backgroundColor = '#FF7F7F';
    rightAnswer.style.backgroundColor = '#90ee90';
    setTimeout(function () {
            questionsDiv.style.display = 'none';
            explanation.style.display = 'block';
            button.style.display = 'block';
        }, delay)
}

function secondWrongAnswer() {
    wrongAnswerTwo.style.backgroundColor = '#FF7F7F';
    rightAnswer.style.backgroundColor = '#90ee90';
    setTimeout(function () {
            questionsDiv.style.display = 'none';
            explanation.style.display = 'block';
            button.style.display = 'block';
        }, delay)
}