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
                    <div class=".js-options"></div>
                </div>

                <div class="js-submit-button">
                    <button type="button" id="js-submit">Submit</button>
                </div>

            </fieldset>
        </form>
    </div>`);
$("main").html(questionText);

updateAnswers();


};


// render answers from data stored in quest.js
function updateAnswers() {
console.log('updateAnswers ran');
let answerText= STORE[questionNumber].options;
var x;
for(x of answerText);
    $('.js-options').prepend(`<input type="radio" name="answers" value="${x}">${x}<br>`);
    
};

// update the score and question number functions
function updateScore() {
console.log('updateScore ran');
};

function updateQuestionCount() {
console.log('updateCount ran');
questionNumber++;
console.log(questionNumber);

    return questionNumber;
};

// check answers for correct item after submit button is pushed
function checkAnswers() {
console.log('checkAnswers ran');
$('js-submit').on('click', function () {

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

}

$(handleQuiz);