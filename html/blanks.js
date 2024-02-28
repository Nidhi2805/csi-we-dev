document.addEventListener('DOMContentLoaded', function() {
    var submitBtn = document.getElementById('submit-btn');
    submitBtn.addEventListener('click', function() {
        var answers = [
            document.getElementById('answer1').value.trim().toLowerCase(),
            document.getElementById('answer2').value.trim().toLowerCase(),
            document.getElementById('answer3').value.trim().toLowerCase(),
            document.getElementById('answer4').value.trim().toLowerCase(),
            document.getElementById('answer5').value.trim().toLowerCase()
        ];

        var correctAnswers = ['paris', 'jupiter', 'h2o', 'photosynthesis', 'gravity'];
        var score = 0;
        for (var i = 0; i < answers.length; i++) {
            if (answers[i] === correctAnswers[i]) {
                score++;
            }
        }

        alert('You scored ' + score + ' out of ' + answers.length);
    });
});

var timeLeft = 60; 

var countdownTimer = setInterval(function() {
    timeLeft--;
    document.getElementById('countdown').textContent = timeLeft;

    if (timeLeft <= 0) {
        clearInterval(countdownTimer);

        window.location.href = 'bscore.html'; 
    }
}, 1000);



