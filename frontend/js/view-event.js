document.addEventListener("DOMContentLoaded", () => {
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

    // Sample data for events (mock data)
    const mockEvents = [
        { id: "1", title: "Event 1", date: "2023-10-01T12:00:00", location: "Location 1", description: "Description for Event 1." },
        { id: "2", title: "Event 2", date: "2023-10-15T14:00:00", location: "Location 2", description: "Description for Event 2." },
        { id: "3", title: "Event 3", date: "2023-11-01T16:00:00", location: "Location 3", description: "Description for Event 3." },
        // Add more mock events as needed
    ];

    // Find the event in mock data
    const event = mockEvents.find(event => event.id === eventId);

    if (!event) {
        alert("Event not found.");
        window.location.href = "/index.html";
        return;
    }

    // Populate the event details
    document.getElementById("event-title").innerText = `Details of Event: ${event.title}`;
    document.getElementById("event-name").innerText = event.title;
    document.getElementById("event-date").innerText = new Date(event.date).toLocaleString();
    document.getElementById("event-location").innerText = event.location;
    document.getElementById("event-description").innerText = event.description;
});