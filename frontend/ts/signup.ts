interface User {
    name: string;
    email: string;
    password: string;
}

document.getElementById("signupForm")!.addEventListener("submit", async (e: Event) => {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("create-password") as HTMLInputElement).value;
    const confirmPassword = (document.getElementById("confirm-password") as HTMLInputElement).value;
    const signupMessage = document.getElementById("signupMessage") as HTMLElement;

    // Clear previous messages
    signupMessage.textContent = "";

    // Check if passwords match
    if (password !== confirmPassword) {
        signupMessage.textContent = "Passwords do not match.";
        return;
    }

    // Simulating registration process with mock data
    const mockUserDatabase: User[] = []; // Simulated database

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