document.addEventListener("DOMContentLoaded", async () => {
    const params = new URLSearchParams(window.location.search);
    const eventId = params.get("id"); // Get the event ID from the URL

    if (!eventId) {
        alert("No event selected.");
        window.location.href = "/index.html";
        return;
    }

    const accessToken = localStorage.getItem("access_token");

    if (!accessToken) {
        alert("You must be logged in to view this event.");
        window.location.href = "/pages/login.html";
        return;
    }

    try {
        const response = await fetch(`http://localhost:3000/events/${eventId}`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${accessToken}`,
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch event details. Status: ${response.status}`);
        }

        const event = await response.json();

        // Populate the event details, with null checks
        const titleElement = document.getElementById("event-title") as HTMLElement | null;
        const nameElement = document.getElementById("event-name") as HTMLElement | null;
        const dateElement = document.getElementById("event-date") as HTMLElement | null;
        const locationElement = document.getElementById("event-location") as HTMLElement | null;
        const descriptionElement = document.getElementById("event-description") as HTMLElement | null;

        if (titleElement) titleElement.innerText = `Details of Event: ${event.title}`;
        if (nameElement) nameElement.innerText = event.title;
        if (dateElement) dateElement.innerText = new Date(event.date).toLocaleString();
        if (locationElement) locationElement.innerText = event.location;
        if (descriptionElement) descriptionElement.innerText = event.description;

    } catch (error) {
        console.error("Error loading event:", error);
        alert("Failed to load event details. Please try again later.");
    }
});