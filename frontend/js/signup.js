document.getElementById("signupForm").addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("create-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const signupMessage = document.getElementById("signupMessage");

    // Clear previous messages
    signupMessage.textContent = "";

    // Check if passwords match
    if (password !== confirmPassword) {
        signupMessage.textContent = "Passwords do not match.";
        return;
    }

    // Simulating registration process with mock data
    const mockUserDatabase = []; // Simulated database

    // Simulate a delay for the registration process
    setTimeout(() => {
        // Check if user already exists
        const userExists = mockUserDatabase.some(user => user.email === email);
        
        if (userExists) {
            signupMessage.textContent = "Email is already registered.";
        } else {
            // Simulate saving the user to the "database"
            mockUserDatabase.push({ name, email, password });
            window.location.href = "/pages/login.html"; // Redirect to login page
        }
    }, 500); // Simulating network delay
});