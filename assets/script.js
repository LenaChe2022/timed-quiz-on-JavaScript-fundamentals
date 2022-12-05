var highScores = 0;
var finalScore = 0;
var startQuiz = document.querySelector("#start");
var question = document.querySelector(".question");
var invitation = document.querySelector(".firstPrompt");
var result = document.querySelector(".result");

//var questionNumber = 0;
//TODO: Add arrey of questions and answers
var allQuestions = [
    {
    "question": "Question 1",
    "answer1": "1",
    "answer2": "2",
    "answer3": "3",
    "answer4": "4",
    "trueAnswer": "2"
    },
    {
    "question": "Question 2",
    "answer1": "5",
    "answer2": "6",
    "answer3": "7",
    "answer4": "8",
    "trueAnswer": "8"
    }
];

  
question.textContent = "Coding Quiz Challenge";
invitation.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by 15 seconds";
startQuiz.textContent = "Start Quiz";
//console.log("hello!");


startQuiz.addEventListener("click",  function(event) {
    event.preventDefault();
    quize();
    });
//console.log(allQuestions[1].answer4);

// TODO: Add function of a quiz
//startQuiz.addEventListener("click",quize());

function quize(){
    for (let i = 0; i < allQuestions.length; i++) {
    //const element = allQuestions[i];

    invitation.textContent = "";
    startQuiz.remove();

   question.textContent = allQuestions[i].question;

   var tag1 = document.createElement("button");
    tag1.textContent = allQuestions[i].answer1;
    question.appendChild(tag1);

    var tag2 = document.createElement("button");
    tag2.textContent = allQuestions[i].answer2;
    question.appendChild(tag2);

    var tag3 = document.createElement("button");
    tag3.textContent = allQuestions[i].answer3;
    question.appendChild(tag3);

    var tag4 = document.createElement("button");
    tag4.textContent = allQuestions[i].answer4;
    question.appendChild(tag4);

    tag1.addEventListener("click",function(event){
        event.preventDefault();
        let text = tag1.textContent;
        console.log(text);
        if (text == allQuestions[i].trueAnswer){
            result.textContent = "Correct!";
            //questionNumber++;
            //quize();
        } else {
            result.textContent = "Wrong!";
            //questionNumber++;
            //quize();
        };
    });

    tag2.addEventListener("click",function(event){
        event.preventDefault();
        let text = tag2.textContent;
        console.log(text);
        if (text == allQuestions[i].trueAnswer){
            result.textContent = "Correct!";
            //questionNumber++;
            //quize();
        } else {
            result.textContent = "Wrong!";
           // questionNumber++;
           // quize();
        };
    });

    tag3.addEventListener("click",function(event){
        event.preventDefault();
        let text = tag3.textContent;
        console.log(text);
        if (text == allQuestions[i].trueAnswer){
            result.textContent = "Correct!";
           // questionNumber++;
           // quize();
        } else {
            result.textContent = "Wrong!";
           // questionNumber++;
           // quize();
        };
    });

    tag4.addEventListener("click",function(event){
        event.preventDefault();
        let text = tag4.textContent;
        console.log(text);
        if (text == allQuestions[i].trueAnswer){
            result.textContent = "Correct!";
            //questionNumber++;
           // quize();
        } else {
            result.textContent = "Wrong!";
            //questionNumber++;
           // quize();
            
        };
    });
}

}


/*
function allDone() {
    question.textContent = "All done!";
    invitation.textContent = "Your final score is"; 
    result.textContent = "";
};*/
//};