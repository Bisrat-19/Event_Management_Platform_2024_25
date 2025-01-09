// Mock event data array
const mkEvents: { title: string; date: string; description: string; location: string; }[] = [];


// Simulated event form submission
document.addEventListener("DOMContentLoaded", () => {
    const eventForm = document.getElementById("eventForm") as HTMLFormElement | null;

    if (eventForm) {
        eventForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const title = (document.getElementById("eventName") as HTMLInputElement | null)?.value.trim() || '';
            const date = (document.getElementById("eventDate") as HTMLInputElement | null)?.value.trim() || '';
            const time = (document.getElementById("eventTime") as HTMLInputElement | null)?.value.trim() || '';
            const location = (document.getElementById("location") as HTMLInputElement | null)?.value.trim() || '';
            const description = (document.getElementById("eventDescription") as HTMLTextAreaElement | null)?.value.trim() || '';

            const fullDate = new Date(`${date}T${time}`).toISOString();

            const eventsData = {
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
                alert(`Event "${eventsData.title}" has been successfully added!`);
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