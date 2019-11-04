// set variables for question and score tracker
let questionNumber = 0;
let score = 0;



// begin quiz function for landing page
function beginQuiz() {
    console.log('beginQuiz ran');
    $('#js-begin').on('click', function(event) {
        renderQuestion();
    }
    );


};



// render question from data stored in quest.js
function renderQuestion() {
    console.log('renderQuestion ran');
    let currentQuestion = STORE[questionNumber].question;
    
    let questionText = $(`
    <div>
        <form id="js-questions" class="form-question">
            <fieldset>
                <div class="question-block">
                    <legend>${currentQuestion}</legend>      
                </div>

                <div class="options-list'>
                    <div class=".js-options" id="questionList"></div>
                </div>

                <div class="js-submit-button">
                    <button type="button" id="js-submit">Submit</button>
                </div>

            </fieldset>
        </form>
    </div>`);
$("main").html(questionText);
$('.js-count-score').removeClass('hidden');
updateAnswers();
};



// render answers from data stored in quest.js
function updateAnswers() {
console.log('updateAnswers ran');
let answerText= STORE[questionNumber].options;
var x;
for(x of answerText) {
    console.log(x);
    $('#questionList').append(`<input type="radio" name="answers" value="${x}" required>${x}<br>`);
}
};



// update the score and question number functions
function updateScore() {
console.log('updateScore ran');
score++;
console.log(score);
$('.js-score').html(`
<p>Current Score: ${score}/9</p>`)
    return score;
};

function updateQuestionCount() {
console.log('updateQuestionCount ran');
questionNumber++;
console.log(questionNumber);
$('.js-count').html(`
<p>Question Number: ${questionNumber + 1}/9</p>`)
    return questionNumber;
};



// check answers for correct item after submit button is pushed
function checkAnswers() {
$('main').on('click', '#js-submit', function (event) {
    let rightAnswer = STORE[questionNumber].rightAnswer;
    let correctScreen = $(`
    <div class="correct-screen">
        <h1>That's correct!</h1>
        <p>Let's keep moving</p>
        <div class="js-next-button">
            <button type="button" class="js-next">Next</button>
            <button type="button" class="js-result hidden">Results</button>
        </div>
    </div>
    `)
    let wrongScreen = $(`
    <div class="wrong-screen">
        <h1>That's incorrect!</h1>
        <p>The correct answer is ${rightAnswer}</p>
        <div class="js-next-result-button">
            <button type="button" class="js-next">Next</button>
            <button type="button" class="hidden" id="js-result">Results</button>
        </div>
    </div>
    `)
    if ($("input[name='answers']:checked").val() === rightAnswer) {
        $("main").html(correctScreen);
        updateScore();
    }
    else {
        $("main").html(wrongScreen);
    }
    console.log('checkAnswers ran');
    
});
};



// next button function to advance questions and show result button
function nextQuestion() {
    $('main').on('click', '.js-next', function (event) {
        console.log(questionNumber);
        if(questionNumber <= 7) {
            updateQuestionCount();
            renderQuestion();
        }
        else if(questionNumber = 8) {
            $('js-next').addClass('.hidden');
            $('#js-result').removeClass('.hidden');
        }
    console.log('nextQuestion ran')
    });
};



// Display results once no more questions are left
function displayResults() {
    $('main').on('click', '#js-result', function (event) {
    if(score >= 7){
        $('main').html(`
        <div class="result-screen">
            <h1>Congratulations, you must be a Michigander!</h1>
        </div>`);
    }
    else if(score < 7 && score > 5) {
        $('main').html(`
        <div class="result-screen">
            <h1>Good job!</h1>
        </div>`);
    }
    else {
        $('main').html(`
        <div class="result-screen">
            <h1>Maybe you need a vacation?</h1>
        </div>`);
    };
})
};



// restart quiz
function restartQuiz() {
console.log('restartQuiz ran');
$('.js-restart').on('click', function(event){
questionNumber = 0;
score = 0;
beginQuiz;
});
};

// handlequiz
function handleQuiz() {
    console.log('handleQuiz ran');
    beginQuiz();
    restartQuiz();
    checkAnswers();
    nextQuestion();
    displayResults();
}

$(handleQuiz);