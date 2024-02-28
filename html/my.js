document.addEventListener('DOMContentLoaded', function () {
    // Assume this is the array of attempted quizzes by the user
    const userQuizzes = [
        { title: 'Math Quiz', score: 90 },
        { title: 'Science Quiz', score: 75 },
        { title: 'History Quiz', score: 85 },
    ];

    const myQuizzesContainer = document.getElementById('myQuizzes');

    // Populate the My Quizzes section
    userQuizzes.forEach(quiz => {
        const quizCard = document.createElement('div');
        quizCard.classList.add('quiz-card');

        const quizTitle = document.createElement('h3');
        quizTitle.textContent = quiz.title;

        const quizScore = document.createElement('p');
        quizScore.textContent = `Score: ${quiz.score}`;

        quizCard.appendChild(quizTitle);
        quizCard.appendChild(quizScore);
        myQuizzesContainer.appendChild(quizCard);
    });
});
