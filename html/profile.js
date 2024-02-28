document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('edit-profile-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Fetch the updated profile information from the form
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Here, you can send the updated profile information to the server using AJAX
        // For simplicity, let's log the updated information to the console
        console.log('Updated Profile Information:');
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);

        // Display a confirmation message or perform any other necessary actions
        alert('Profile updated successfully!');
    });
});

