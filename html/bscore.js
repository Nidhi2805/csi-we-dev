function submitQuiz() {
    
    var score = 0;

    
    for (var i = 1; i <= 5; i++) {
        var answer = document.querySelector('input[name="answer' + i + '"]:checked');

        if (answer !== null) {

            if (answer.value === getCorrectAnswer(i)) {
                score++; 
            }
        } else {
            score = 0; 
            break; 
        }
    }

    window.location.href = "bscore.html?score=" + score;
}


