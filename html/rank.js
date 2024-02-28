// Sample leaderboard data (replace with actual data from your database)
const leaderboardData = [
    { rank: 1, name: "John", score: 95 },
    { rank: 2, name: "Emma", score: 88 },
    { rank: 3, name: "Michael", score: 82 },
    { rank: 4, name: "Sophia", score: 78 },
    { rank: 5, name: "William", score: 74 }
];

// Function to dynamically populate leaderboard table
function populateLeaderboard() {
    const leaderboardTable = document.getElementById('leaderboard-body');

    leaderboardData.forEach(entry => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${entry.rank}</td>
            <td>${entry.name}</td>
            <td>${entry.score}</td>
        `;
        leaderboardTable.appendChild(row);
    });
}

// Populate leaderboard when the page loads
window.addEventListener('load', populateLeaderboard);

// Function to fetch leaderboard data from the server
async function fetchLeaderboardData() {
    try {
        const response = await fetch('/leaderboard'); // Endpoint to retrieve leaderboard data
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching leaderboard data:', error);
    }
}

// Function to update the leaderboard table with new data
async function updateLeaderboard() {
    const leaderboardTable = document.getElementById('leaderboard-body');
    leaderboardTable.innerHTML = ''; // Clear existing data

    const leaderboardData = await fetchLeaderboardData(); // Fetch updated data from the server

    if (leaderboardData) {
        leaderboardData.forEach((entry, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${entry.name}</td>
                <td>${entry.score}</td>
            `;
            leaderboardTable.appendChild(row);
        });
    }
}


