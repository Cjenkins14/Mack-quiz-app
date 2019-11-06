/*FOR MENTOR MEETING- 
required radio button attribute 
questionCount not updating on restart
why is container moving with submit and next button
*/


// set variables for question and score tracker
let questionNumber = 0;
let score = 0;



// begin quiz function for landing page
function beginQuiz() {
    console.log('beginQuiz ran');
    $('#js-begin').on('click', function(event) {
        renderQuestion();
    });


};



// render question from data stored in quest.js
function renderQuestion() {
    console.log('renderQuestion ran');
    let currentQuestion = STORE[questionNumber].question;

    let questionText = `
    <div class= "questions-contain">
        <form id="js-questions" class="background-box">
            <fieldset>
                <div class="question-block text-left">
                    <legend>${currentQuestion}</legend>
                    <div class="options-list'>
                        <div class=".js-options" id="questionList"></div>
                    </div>
                    <button type="button" id="js-submit">Find out!</button>
                </div>
            </fieldset>
        </form>
    </div>`;
    $("main").html(questionText);
    $('.js-count-score').removeClass('hidden');
    $('.js-count').removeClass('hidden');

    updateAnswers();
};



// render answers from data stored in quest.js
function updateAnswers() {
    console.log('updateAnswers ran');
    let answerText = STORE[questionNumber].options;
    var x;
    for (x of answerText) {
        console.log(x);
        // replace reqd with validate function that checks for a checked item 
        $('#questionList').append(`<label><input type="radio" name="answers" value="${x}"/>${x}</label><br>`);
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


// validate answers
function validateAnswers() {
    $('main').on('click', '#js-submit', function(event) {
        event.preventDefault();
        if($("input[name='answers']").is(":checked")) {
            checkAnswers();
        }
        else 
            alert(`Please select an answer before proceeding`)
    })
};


// check answers for correct item after submit button is pushed
function checkAnswers() {
    let rightAnswer = STORE[questionNumber].rightAnswer;
    if ($("input[name='answers']:checked").val() === rightAnswer) {
        correctScreen();
        updateScore();
    } else {
        wrongScreen();
    }
    console.log('checkAnswers ran');
};

function correctScreen() {
    $("main").html(`
    <div class="correct-screen background-box">
        <h1>That's correct!</h1>
        <p>Let's keep moving</p>
        <button type="button" class="js-next">Next</button>
    </div>
    `);
};

function wrongScreen() {
    let rightAnswer = STORE[questionNumber].rightAnswer;
    $("main").html(`
    <div class="wrong-screen background-box">
        <h1>That's incorrect!</h1>
        <p>The correct answer is: ${rightAnswer}</p>
        <button type="button" class="js-next">Next</button>
    </div>
    `);
};


// next button function to advance questions and show result button
function nextQuestion() {
    $('main').on('click', '.js-next', function(event) {
        console.log(questionNumber);
        if (questionNumber <= 7) {
            updateQuestionCount();
            renderQuestion();
        } else if (questionNumber == 8) {
            $('.js-next').addClass("hidden");
            displayResults();
        };
            console.log('nextQuestion ran');
    });
};



// Display results once no more questions are left
function displayResults() {
        $(".js-count").addClass("hidden");
        $('.js-score').html(`
        <p>Final Score: ${score}/9</p>`)
        if (score >= 7) {
            $('main').html(`
        <div class="result-screen background-box">
            <h1>Congratulations, you must be a Michigander!</h1>
            <img src="http://www.grandhotel.com/wp-content/uploads/Sunset.jpg
            " alt="mackinac island winter" id="winter-photo"/>
            <button type="button" class="js-restart">Restart!</button>
        </div>`);
        } else if (score < 7 && score > 4) {
            $('main').html(`
        <div class="result-screen background-box">
            <h1>Good job!</h1>
            <img src="https://image.mlive.com/home/mlive-media/width600/img/entertainment_impact/photo/sheplers-ferry-9370319ac8906126jpg-7830e8039c4462bb.jpg" alt="Mackinac island sheplers ferry" id="ferry-photo"/>
            <button type="button" class="js-restart">Restart!</button>
        </div>`);
        } else {
            $('main').html(`
        <div class="result-screen background-box">
            <h1>Maybe you need a vacation?</h1>
            <img src="http://www.drhartnell.com/uploads/1/2/1/5/12150034/8204751_orig.jpg
            " alt="Mackinac island aerial view" id="vaca-photo"/>
            <button type="button" class="js-restart">Restart!</button>
        </div>`);
        };
    console.log('displayResults ran')
};



// restart quiz
function restartQuiz() {
    console.log('restartQuiz ran');
    $('main').on('click', '.js-restart', function(event) {
        questionNumber = 0;
        score = 0;
        renderHeader();
        renderQuestion();
    });
};

// render new scores and count in header
function renderHeader() {
    $('.js-count').html('<p>Question Number: 1/9</p>');
    $('.js-score').html('<p>Current Score: 0/9');
}

// handlequiz
function handleQuiz() {
    console.log('handleQuiz ran');
    beginQuiz();
    restartQuiz();
    validateAnswers();
    nextQuestion();
    
    
}

$(handleQuiz);