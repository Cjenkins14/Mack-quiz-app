// start quiz func
$
function beginQuiz() {
    $('#js-begin').on('click', function(event) {
        renderQuestion();
    }
    );


};

// render ques func
function renderQuestion() {
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

};

// question and score
function updateScore() {

};

function updateCount() {
for(i = 0; i < STORE.length; i++) {
    let count = [i];
    console.log(count);
}
    return count;
};

// answer check, submit button
function checkAnswers() {

};

// restart quiz
function restartQuiz() {

};
// handlequiz
function handleQuiz() {
    beginQuiz();
    restartQuiz();

}

$(handleQuiz);