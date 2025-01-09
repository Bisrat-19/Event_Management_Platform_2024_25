document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const loginMessage = document.getElementById("loginMessage");

        // Clear previous messages
        loginMessage.textContent = "";

        // Simulated user database
        const mockUsers = [
            { email: "admin@example.com", password: "admin123", role: "admin" },
            { email: "user@example.com", password: "user123", role: "user" },
            // Add more mock users as needed
        ];

        // Simulate login process with mock data
        const user = mockUsers.find(user => user.email === email && user.password === password);

        // Simulate a delay for the login process
        setTimeout(() => {
            if (user) {
                // Save user data and token to localStorage
                const accessToken = "mock_access_token"; // Simulated token
                localStorage.setItem("access_token", accessToken);
                localStorage.setItem("user", JSON.stringify(user));

                // Redirect based on role
                if (user.role === "admin") {
                    window.location.href = "/pages/admin_dashboard.html";
                } else {
                    window.location.href = "/index.html";
                }
            } else {
                // Display error message if login fails
                loginMessage.textContent = "Login failed! Please check your credentials.";
            }
        }, 500); // Simulating network delay
    });
});