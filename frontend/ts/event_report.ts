// Mock event data
const mockEvents: { id: number; title: string; date: string; description: string; location: string; }[] = [
    { id: 1, title: "Event 1", date: "2025-01-15T10:00:00", description: "Description of Event 1", location: "Location 1" },
    { id: 2, title: "Event 2", date: "2025-01-20T12:00:00", description: "Description of Event 2", location: "Location 2" },
    // Add more mock events as needed
];

// Mock token for demonstration purposes
const mockAccessToken: string = 'mock_access_token';

function fetchEvents(): void {
    // Simulating fetching events from a mock database
    const events = mockEvents;

    const tableBody = document.getElementById('events-table-body') as HTMLTableSectionElement;
    tableBody.innerHTML = '';

    events.forEach(event => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${event.title}</td>
            <td>${new Date(event.date).toLocaleString()}</td>
            <td>
                <button class="btn btn-info btn-sm" onclick="toggleDetails(${event.id})">Toggle Details</button>
                <button class="btn btn-warning btn-sm" onclick="toggleUpdateEvent(${event.id})">Update</button>
                <button class="btn btn-danger btn-sm" onclick="deleteEvent(${event.id})">Delete</button>
            </td>
        `;

        const detailsRow = document.createElement('tr');
        detailsRow.classList.add('event-details-row');
        detailsRow.id = `details-row-${event.id}`;
        detailsRow.innerHTML = `
            <td colspan="3" id="details-${event.id}">
                <strong>Title:</strong> ${event.title}<br>
                <strong>Description:</strong> ${event.description}<br>
                <strong>Date:</strong> ${new Date(event.date).toLocaleString()}<br>
                <strong>Location:</strong> ${event.location}
            </td>
        `;

        tableBody.appendChild(row);
        tableBody.appendChild(detailsRow);
    });
}

function toggleDetails(eventId: number): void {
    const detailsRow = document.getElementById(`details-row-${eventId}`) as HTMLTableRowElement;
    detailsRow.style.display = detailsRow.style.display === 'none' ? 'table-row' : 'none';
}

function toggleUpdateEvent(eventId: number): void {
    const updateSection = document.getElementById('update-event-section') as HTMLDivElement;
    
    const event = mockEvents.find(e => e.id === eventId);
    if (event) {
        (document.getElementById('update-event-id') as HTMLInputElement).value = event.id.toString();
        (document.getElementById('update-event-title') as HTMLInputElement).value = event.title;
        (document.getElementById('update-event-description') as HTMLTextAreaElement).value = event.description;
        (document.getElementById('update-event-date') as HTMLInputElement).value = new Date(event.date).toISOString().slice(0, 16);
        (document.getElementById('update-event-location') as HTMLInputElement).value = event.location;

        updateSection.style.display = updateSection.style.display === 'none' ? 'block' : 'none';
    }
}

function submitUpdateEvent(): void {
    const eventId = parseInt((document.getElementById('update-event-id') as HTMLInputElement).value, 10);
    const updatedEvent = {
        title: (document.getElementById('update-event-title') as HTMLInputElement).value,
        description: (document.getElementById('update-event-description') as HTMLTextAreaElement).value,
        date: (document.getElementById('update-event-date') as HTMLInputElement).value,
        location: (document.getElementById('update-event-location') as HTMLInputElement).value
    };

    const eventIndex = mockEvents.findIndex(event => event.id === eventId);
    if (eventIndex !== -1) {
        mockEvents[eventIndex] = { id: eventId, ...updatedEvent };
        alert('Event updated successfully');
        (document.getElementById('update-event-section') as HTMLDivElement).style.display = 'none';
        fetchEvents();
    } else {
        alert('Failed to update the event');
    }
}

function deleteEvent(eventId: number): void {
    if (confirm('Are you sure you want to delete this event?')) {
        const eventIndex = mockEvents.findIndex(event => event.id === eventId);
        if (eventIndex !== -1) {
            mockEvents.splice(eventIndex, 1);
            alert('Event deleted successfully');
            fetchEvents();
        } else {
            alert('Failed to delete the event');
        }
    }
}

document.addEventListener('DOMContentLoaded', fetchEvents);