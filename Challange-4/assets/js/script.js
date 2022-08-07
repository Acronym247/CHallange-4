const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
// Start of game
function startGame(){
    console.log('Started')
   startButton.classList.add('hide') 
   shuffledQuestions = questions.sort(() => Math.random() - .5)
      currentQuestionIndex = 0
   questionContainerElement.classList.remove('hide')
   setNextQuestion()
}
// Mix up questions
function setNextQuestion(){
    showQuestion(shuffledQuestions[currentQuestionIndex])
}
function showQuestion(question) {
    questionElement.innerText = question.question
} 
function selectAnswer(){
//Questions for Quiz STILL NEED Q'S AND A'S
}
const questions = [
   {
    question: 'What does html stand for?',
    answers: [
        { text: 'How to make lakes', correct: false},
        { text: 'HyperText Markup Language', correct: true},
        { text: 'How to make lakes', correct: false},
        { text: 'How to make lakes', correct: false},
        
    ],
    question: 'What do you reference',
    answers: [
        { text: 'class', correct: false},
        { text: 'element', correct: true},
        { text: 'function', correct: false},
        { text: 'id', correct: false},
        
    ],
    question: 'What is used to reference the html as a whole in css?',
    answers: [
        { text: 'body', correct: true},
        { text: 'Header', correct: false},
        { text: 'element', correct: false},
        { text: 'Function', correct: false},
        
    ]
   }, 
]
// Timer for quiz NEED TO GET TIME TO TICK OFF FOR WRONG
function timer(){
    var sec = 30;
    var timer = setInterval(function(){
        document.getElementById('safeTimerDisplay').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}