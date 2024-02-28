var timeLeft = 60;

var countdownTimer = setInterval(function() {
    timeLeft--;
    document.getElementById('countdown').textContent = timeLeft;

    if (timeLeft <= 0) {
        clearInterval(countdownTimer);
        
        window.location.href = 'mresult.html'; 
    }
}, 1000);



