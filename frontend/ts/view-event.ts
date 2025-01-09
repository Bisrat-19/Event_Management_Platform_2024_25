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
    interface Event {
        id: string;
        title: string;
        date: string;
        location: string;
        description: string;
    }

    const mockEvents: Event[] = [
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
    const eventTitleElement = document.getElementById("event-title") as HTMLElement;
    const eventNameElement = document.getElementById("event-name") as HTMLElement;
    const eventDateElement = document.getElementById("event-date") as HTMLElement;
    const eventLocationElement = document.getElementById("event-location") as HTMLElement;
    const eventDescriptionElement = document.getElementById("event-description") as HTMLElement;

    if (eventTitleElement && eventNameElement && eventDateElement && eventLocationElement && eventDescriptionElement) {
        eventTitleElement.innerText = `Details of Event: ${event.title}`;
        eventNameElement.innerText = event.title;
        eventDateElement.innerText = new Date(event.date).toLocaleString();
        eventLocationElement.innerText = event.location;
        eventDescriptionElement.innerText = event.description;
    }
});