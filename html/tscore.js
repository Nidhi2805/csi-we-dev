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

    window.location.href = "tscore.html?score=" + score;
}

function getCorrectAnswer(questionNumber) {
    switch (questionNumber) {
        case 1:
            return "false"; 
        case 2:
            return "true"; 
        case 3:
            return "false"; 
        case 4:
            return "false"; 
        case 5:
            return "true"; 
        default:
            return ""; 
    }
}

