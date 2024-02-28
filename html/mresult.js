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

    window.location.href = "mresult.html?score=" + score;
}

function getCorrectAnswer(questionNumber) {
    switch (questionNumber) {
        case 1:
            return "b"; 
        case 2:
            return "a"; 
        case 3:
            return "c"; 
        case 4:
            return "b"; 
        case 5:
            return "a"; 
        default:
            return ""; 
    }
}



