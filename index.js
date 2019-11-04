// start quiz func
$
function beginQuiz() {
    console.log('beginQuiz ran');
    $('#js-begin').on('click', function(event) {
        renderQuestion();
    }
    );


};

// render ques func
function renderQuestion() {
    console.log('renderQuestion ran');
    let questionCount = updateCount();
    let currentQuestion = STORE[questionCount].question;
    let questionText = $(`
    <div>
        <form id="js-questions" class="form-question">
            <fieldset>
                <div class="question-block">
                    <legend>${currentQuestion}</legend>      
                </div>

                <div class="options-list'>
                    <div class="js-options"></div>
                </div>

                <div class="js-submit-button">
                    <button type="button" id="js-submit">Submit</button>
                </div>

            </fieldset>
        </form>
    </div>`);
$("main").html(questionText);

// updateAnswers();
};

// Update Answers
function updateAnswers() {
console.log('updateAnswers ran');
};

// question and score
function updateScore() {
console.log('updateScore ran');
};

function updateCount() {
console.log('updateCount ran');
for(i = 0; i < STORE.length; i++) {
    let count = [i];
    console.log(count);
}
    return count;
};

// answer check, submit button
function checkAnswers() {
console.log('checkAnswers ran');
};

// restart quiz
function restartQuiz() {
console.log('restartQuiz ran');
};
// handlequiz
function handleQuiz() {
    console.log('handleQuiz ran');
    beginQuiz();
    restartQuiz();

}

$(handleQuiz);