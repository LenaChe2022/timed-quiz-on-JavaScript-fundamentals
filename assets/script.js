var highScore = 0;
var finalScore = 0;
var startQuiz = document.querySelector("#start");
var question = document.querySelector(".question");
var invitation = document.querySelector(".firstPrompt");
var result = document.querySelector(".result");
var msgDiv = document.querySelector("#msg");



var answer1Element;
var answer2Element; 
var answer3Element;
var answer4Element;

var rightAnswer;


//TODO: I need array of questions and answers
var allQuestions = [
    {
    "question": "What is JavaScript?",
    "answer1": "I don't know yet",
    "answer2": "I don't know yet2",
    "answer3": "I don't know yet",
    "answer4": "I don't know yet",
    "trueAnswer": "I don't know yet"
    },
    {
    "question": "How does it work?",
    "answer1": "I can not understand yet",
    "answer2": "I can not understand yet",
    "answer3": "I can not understand yet",
    "answer4": "I can not understand yet",
    "trueAnswer": "I can not understand yet"
    }
];

welcome();

//first page
function welcome(){  
question.textContent = "Coding Quiz Challenge";
invitation.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by 15 seconds";
startQuiz.textContent = "Start Quiz";
};


// start quiz after click
startQuiz.addEventListener("click",  function(event) {
    event.preventDefault();
    quiz();
    });
//console.log(allQuestions[1].answer4);

var questionNumber = 0;

function quiz(){

    i = questionNumber;
    if (i > allQuestions.length){
        allDone();
    };
    
// vew of i-number question
    invitation.textContent = "";
    startQuiz.remove();

   question.textContent = allQuestions[i].question;

   var tag1 = document.createElement("button");
    tag1.textContent = allQuestions[i].answer1;
    tag1.setAttribute("id", "first");
    question.appendChild(tag1);

    answer1Element = tag1;

    var tag2 = document.createElement("button");
    tag2.textContent = allQuestions[i].answer2;
    question.appendChild(tag2);

    answer2Element = tag2;

    var tag3 = document.createElement("button");
    tag3.textContent = allQuestions[i].answer3;
    question.appendChild(tag3);

    answer3Element = tag3;

    var tag4 = document.createElement("button");
    tag4.textContent = allQuestions[i].answer4;
    question.appendChild(tag4);

    answer4Element = tag4;

    rightAnswer = allQuestions[i].trueAnswer;

    //for test only
    console.log("answer element 1: " + answer1Element.textContent);
    console.log("answer element 2: " + answer2Element.textContent);
    console.log("answer element 3: " + answer3Element.textContent);
    console.log("answer element 4: " + answer4Element.textContent);

    // check the answer
    document.body.addEventListener('click', event => {
        event.preventDefault();
      
         if((event.target == answer1Element) ||
            (event.target == answer2Element) ||
            (event.target == answer3Element) ||
            (event.target == answer4Element) ){
          
            var answerElement = event.target;

            console.log("right answer: " + rightAnswer);
            console.log("clicked element: " + answerElement.textContent);

            if(answerElement.textContent == rightAnswer)
            {
                result.textContent = "Correct!";
                console.log("Yay!!!");
                questionNumber++;
                quiz();
            }
            else
            {
                console.log("Booooo!!!");
                result.textContent = "Wrong!";
                questionNumber++;
                quiz();
            }
        }
            
});

}




function allDone() {

    //new view of the page
    question.textContent = "All done!";

    var finalScore = document.createElement("div");
    finalScore.textContent = "Your final score is " + "22";
    finalScore.setAttribute("class", "firstPrompt");
    document.querySelector(".container").appendChild(finalScore);
    result.textContent = "";


    var initialsBig = document.createElement("div");
    initialsBig.setAttribute("class", "input-group");
    document.querySelector(".container").appendChild(initialsBig);
    var initials = document.createElement("label");
    initials.textContent = "Enter initials:"
    initials.setAttribute("for", "initials")
    document.querySelector(".input-group").appendChild(initials);
    var inputBox = document.createElement("input");
    inputBox.setAttribute("type", "text");
    inputBox.setAttribute("name", "initials");
    inputBox.setAttribute("id", "initials");
    inputBox.setAttribute("placeholder", "AB");
    document.querySelector(".input-group").appendChild(inputBox);
    
    var submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    submitButton.setAttribute("id","submit");
    document.querySelector(".input-group").appendChild(submitButton);

    submitButton.addEventListener("click", function(event) {
        event.preventDefault();

        var saveInitials = document.querySelector("#initials").value;
        if (saveInitials === "") {
            displayMessage("error", "initials cannot be blank");
          } else {
            displayMessage("success", "Registered successfully");

        if (finalScore > highScore) {   
        highScore = finalScore;
        localStorage.setItem("highScore", highScore);
        localStorage.setItem("initials",saveInitials); 
        };

        lastPage();
          
    };

});

function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
  }


function lastPage() {
    var showScore = localStorage.getItem("highScore");
    var showName = localStorage.getItem("initials");
    question.textContent = "High score: " + showName + " " + showScore;
    document.querySelector(".nav").remove();
    document.querySelector("button").remove();
    document.querySelector("#msg").remove();
    document.querySelector(".input-group").remove();


    
};
}

function findHighScore() {

}