var myQuestions = [
    {
        question: "Who is the leader of BTS?",
        answers: {
            a:"Park Jimin",
            b:"Jeon Jungkook",
            c:"Kim Taehyung",
            d:"Kim Namjoon",
        },
        correctAnswer: 'd'
    },
    {
        question: "In which year did the album 'WINGS' release?",
        answers: {
            a: '2016',
            b: '2013',
            c: '2018',
            d: '2014',
        },
        correctAnswer: 'a'
    }, {
        question: "Who is the first prime minister of INDIA?",
        answers: {
            a: 'Jawaharlal Nehru',
            b: 'Sardar vallabhai patel',
            c: 'Motilal Nehru',
            d: 'Kamala Nehru',
        },
        correctAnswer: 'a'
    }
];

var quizContainer = document.getElementById('quiz');
var ques = document.getElementById('questions');
var ans = document.getElementById('answers');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var alert = document.getElementById('alert');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer, ans){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;

        // for each question...
        for(var i=0; i<questions.length; i++){
            
            // first reset the list of answers
            answers = [];

            // for each available answer...
            for(letter in questions[i].answers){

                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'"> '
                        + questions[i].answers[letter]
                    + '</label><br>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>' + '<div id = "alert"></div>' + 
                '<button style = "float : right">Submit</button><br>' + '<hr>'
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){
        
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
                // color the answers green
                alert.innerHTML = '<div class="alert alert-success"><strong>Success!</strong> You should <a href="#" class="alert-link">read this message</a>.</div>';
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                alert.innerHTML = '<div class="alert alert-danger"><strong>Danger!</strong> You should <a href="#" class="alert-link">read this message</a>.</div>';
            }
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    // show questions right away
    showQuestions(questions, quizContainer, ans);
    
    // on submit, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }

}