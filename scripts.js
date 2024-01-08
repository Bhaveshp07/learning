const users = {
    name: null,
    score: 0
};

positionOfQuestion=0;



 const arrayOfQuestions = [
    {
        QId:1,
        question: "what is the current name of the company",
        options: ['Saasjoy', 'Potent Venture', 'LinkJoy', 'ClientJoy'],
        answer: 2
    },
    {
        QId:2,
        question: "what is current college name ?",
        options: ['GU', 'Silver-oak', 'Da-iict', 'JG'],
        answer: 3
    },
    {
        QId:3,
        question: "What is the capital of France?",
        options: ['Berlin', 'Paris', 'Madrid', 'Rome'],
        answer: 1
    },
    {
        QId:4,
        question: 'Which programming language is known as the "language of the web"?',
        options: ['Java', 'Python', 'JavaScript', 'C++'],
        answer: 4
    },
    {
        QId:5,
        question: 'What is the largest mammal on Earth?',
        options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
        answer: 1
    }
 ] 

function submitUser() {
    let userName = document.getElementById("userName").value;
    users.name=userName;
    document.getElementById("showName").innerHTML = "Hello " + users.name;
    displayQuestion();
}

function displayQuestion() {
    const questionElement = document.querySelector('.question');
    const optionsElements = document.querySelectorAll('.option span');

    questionElement.textContent = arrayOfQuestions[positionOfQuestion].question;
    optionsElements.forEach((optionElement, index) => {
        optionElement.textContent = arrayOfQuestions[positionOfQuestion].options[index];
    });
}

function checkAnswer() {
    debugger;
    const selectedOption = document.querySelector('.options input:checked');
    const correctAnswer = arrayOfQuestions[positionOfQuestion].answer;

    if(parseInt(selectedOption.value)===correctAnswer) {
        users.score=users.score+1;
    }

    if(positionOfQuestion<arrayOfQuestions.length-1) {
        positionOfQuestion=positionOfQuestion+1;
        displayQuestion();
    }
    else {
         document.getElementById("showScore").innerHTML=`Quiz completed! Your score is ${users.score}/${arrayOfQuestions.length}`;
    }
   
}



