const quizData = [
    {
        question: "Who developed Python Programming Language",
        a: "Wick van Rossum",
        b: "Rasmus Lerdorf",
        c: "Guido van Rossum",
        d: "Niene Stom",
        correct: "c"
    },
    {
        question: "Which type of Programming does Python support?",
        a: "object-oriented programming",
        b: "structured programming",
        c: "functional programming",
        d: "all of the mentioned",
        correct: "d"
    },
    {
        question: "Is Python case sensitive when dealing with identifiers?",
        a: "no",
        b: "yes",
        c: "machine dependent",
        d: "none of the mentioned",
        correct: "a"
    },
    {
        question: "Which of the following is the correct extension of the Python file?",
        a: ".python",
        b: ".pl",
        c: ".py",
        d: ".p",
        correct: "c"
    },
    {
        question: "All keywords in Python are in _________",
        a: "Capitalized",
        b: "lower case",
        c: "UPPER CASE",
        d: "None of the mentioned",
        correct: "d"
    }
]

const questionEl = document.getElementById("question")
const scores = document.getElementById("score")
const atext = document.getElementById("atext")
const btext = document.getElementById("btext")
const ctext = document.getElementById("ctext")
const dtext = document.getElementById("dtext")
const submitBtn = document.getElementById("submit")


let currentQuestion = 0;
let score = 0;
const answersEl = document.querySelectorAll(".answer");

loadQuiz();

function loadQuiz() {
    deselect();
    let currentQuizData = quizData[currentQuestion]
    questionEl.innerHTML = currentQuizData.question
    atext.innerHTML = currentQuizData.a
    btext.innerHTML = currentQuizData.b
    ctext.innerHTML = currentQuizData.c
    dtext.innerHTML = currentQuizData.d
}

function getSelected() {
    let answer = undefined
    answersEl.forEach(answerEL => {
        if (answerEL.checked){
            answer = answerEL.id
        }
    });
    return answer
}

function deselect() {
    answersEl.forEach(answerEL => {
        answerEL.checked = false
    });
}

submitBtn.addEventListener("click", () => {
    let answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuestion].correct) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion<quizData.length){
            loadQuiz();
        } else {
            scores.innerHTML = `<h2>Your Score is ${score} out of ${quizData.length} </h2><button onclick="location.reload()">Reload</button>`;
        }
    }

})