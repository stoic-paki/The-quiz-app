const quizQuestions = [
    {
        question: "What is the capital of France?",
        option1: "Berlin",
        option2: "Madrid",
        option3: "Paris",
        option4: "Rome",
        answer: "option3"
    },
    {
        question: "Which planet is known as the Red Planet?",
        option1: "Earth",
        option2: "Mars",
        option3: "Jupiter",
        option4: "Saturn",
        answer: "option2"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        option1: "Harper Lee",
        option2: "Mark Twain",
        option3: "J.K. Rowling",
        option4: "Ernest Hemingway",
        answer: "option1"
    },
    {
        question: "What is the largest ocean on Earth?",
        option1: "Atlantic Ocean",
        option2: "Indian Ocean",
        option3: "Arctic Ocean",
        option4: "Pacific Ocean",
        answer: "option4"
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        option1: "Oxygen",
        option2: "Gold",
        option3: "Silver",
        option4: "Iron",
        answer: "option1"
    },
    {
        question: "What is the smallest prime number?",
        option1: "1",
        option2: "2",
        option3: "3",
        option4: "5",
        answer: "option2"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        option1: "China",
        option2: "Japan",
        option3: "South Korea",
        option4: "Thailand",
        answer: "option2"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        option1: "Gold",
        option2: "Iron",
        option3: "Diamond",
        option4: "Graphite",
        answer: "option3"
    },
    {
        question: "Who painted the Mona Lisa?",
        option1: "Vincent Van Gogh",
        option2: "Pablo Picasso",
        option3: "Leonardo da Vinci",
        option4: "Claude Monet",
        answer: "option3"
    },
    {
        question: "What is the speed of light in a vacuum?",
        option1: "300,000 km/s",
        option2: "150,000 km/s",
        option3: "450,000 km/s",
        option4: "600,000 km/s",
        answer: "option1"
    }
];

// initializing everything

let isAlive = true
let score = 0;
let hearts = 3;
const qList = document.querySelector("#q-list")
let scoreStore = document.querySelector("#points");
let heartStore = document.querySelector("#hearts");
let question = document.querySelector("#question");
let option_1 = document.querySelector("#option1")
let option_2 = document.querySelector("#option2")
let option_3 = document.querySelector("#option3")
let option_4 = document.querySelector("#option4")
let retry = document.querySelector(".retry-btn")
let p = 0
let n = 1
let lives = 3
let option;
let points = 0
function ifWon() {
    if (n === 10) {
        window.location.href =
            "./youWon.html"
        console.log("you won my nigga")
    }
}


// scoreStore.textContent = 1
// console.log(n)

//event listeners to access logic function which checks if the answer is correct and calls render
//which renders the next question when p is incremented. 
//event listeners were needed because onclick object is being used to return option from the object. 

option_1.addEventListener("click", logic)
option_2.addEventListener("click", logic)
option_3.addEventListener("click", logic)
option_4.addEventListener("click", logic)
// retry.addEventListener("click", () => {
// window.location.href ="./index.html"
// })

// these functions tell us what option the user clicked. 

function returnClicked1() {
    option = 'option1'
    return option
}
function returnClicked2() {
    option = "option2"
    return option
}
function returnClicked3() {
    option = "option3"
    return option
}
function returnClicked4() {
    option = "option4"
    return option
}

function logic() {
    ifWon()
    n++
    console.log(n)
    if (n <= 11) {
        if (lives > 1) {
            check_answer(p)
            p++
            if (n <= 10) {
                render(p)
            }
        }
        else {
            isAlive = false
            console.log("you dead nigga")
            window.location.href =
                "./gameOver.html"
            heartStore.textContent = "you dead"
        }
    }
    else (
        console.log('out of questions')
    )
}


function render(q) {
    heartStore.textContent = lives
    qList.textContent = n
    question.textContent = quizQuestions[q].question
    option_1.textContent = quizQuestions[q].option1
    option_2.textContent = quizQuestions[q].option2
    option_3.textContent = quizQuestions[q].option3
    option_4.textContent = quizQuestions[q].option4
    scoreStore.textContent = points
}

render(p)

function check_answer(q) {
    if (option == quizQuestions[q].answer) {
        console.log('correct', points)
        points = points + 1
    }
    else {
        lives = lives - 1
    }
}

