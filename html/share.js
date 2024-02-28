document.getElementById('share-btn').addEventListener('click', function() {
    window.location.href = 'share.html';
});

function copyToClipboard() {
    var copyText = document.getElementById("quizLink");
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    alert("Copied the link: " + copyText.value);
}
document.getElementById('share-btn').addEventListener('click', function() {
    var subject = "Check out this quiz!";
    var body = "Here's the link to the quiz: http://yourquizlink";
    var mailtoLink = "mailto:?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    window.location.href = mailtoLink;
});

