// Mock event data array
const mockEvents = [];

// Mock token for demonstration purposes
const mockAccessToken = 'mock_access_token';

// Simulated event form submission
document.addEventListener("DOMContentLoaded", () => {
    const eventForm = document.getElementById("eventForm");

    if (eventForm) {
        eventForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const title = document.getElementById("eventName").value.trim();
            const date = document.getElementById("eventDate").value.trim();
            const time = document.getElementById("eventTime").value.trim();
            const location = document.getElementById("location").value.trim();
            const description = document.getElementById("eventDescription").value.trim();

            const fullDate = new Date(`${date}T${time}`).toISOString();

            const eventData = {
                title,
                description,
                date: fullDate,
                location
            };

            // Simulate token retrieval
            const authToken = localStorage.getItem("access_token") || mockAccessToken;
            if (!authToken) {
                alert("You are not logged in. Please log in to continue.");
                window.location.href = "/pages/login.html";
                return;
            }

            // Simulate event creation
            try {
                // Normally you would send a request to the backend
                mockEvents.push(eventData); // Add the event to the mock array

                alert(`Event "${eventData.title}" has been successfully added!`);
                window.location.href = "/pages/admin_dashboard.html"; // Redirect to admin dashboard
            } catch (error) {
                console.error("Error adding event:", error);
                alert("Failed to add the event. Please try again.");
            }
        });
    } else {
        console.error("Event form not found.");
    }
});