const mockUsers = [
    { name: "John Doe", email: "john@example.com" },
    { name: "Jane Smith", email: "jane@example.com" },
    { name: "Alice Johnson", email: "alice@example.com" },
    // Add more mock users as needed
];

// Fetch token from localStorage
function getAuthToken() {
    return `Bearer ${localStorage.getItem('access_token')}`;
}

function fetchUsers() {
    // Simulate fetching users with mock data
    const accessToken = localStorage.getItem('access_token');

    if (!accessToken) {
        console.error('No access token found.');
        return;
    }

    // Simulate asynchronous data fetching
    setTimeout(() => {
        const tableBody = document.getElementById('users-table-body');
        tableBody.innerHTML = '';

        mockUsers.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.name}</td>
                <td>${user.email}</td>
            `;

            tableBody.appendChild(row);
        });
    }, 500); // Simulating network delay
}

document.addEventListener('DOMContentLoaded', fetchUsers);