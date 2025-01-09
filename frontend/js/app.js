document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.getElementById("nav-items");
    const eventsContainer = document.getElementById("events");
    const searchButton = document.querySelector(".btn-primary");
    const searchInput = document.querySelector("input[placeholder='Search by name']");
    
    // Sample data for events (mock data)
    const allEvents = [
        { id: 1, title: "Event 1", date: "2023-10-01" },
        { id: 2, title: "Event 2", date: "2023-10-15" },
        { id: 3, title: "Event 3", date: "2023-11-01" },
        // Add more mock events as needed
    ];

    const user = JSON.parse(localStorage.getItem("user"));

    // Populate navbar
    if (user) {
        navItems.innerHTML = `
            <li class="nav-item">
                <a class="nav-link" href="index.html">Home</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    ${user.name}
                </a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                    <li><button class="dropdown-item" id="logout">Logout</button></li>
                </ul>
            </li>
        `;
    } else {
        navItems.innerHTML = `
            <li class="nav-item">
                <a class="nav-link" href="index.html">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="pages/login.html">Login</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="pages/signup.html">Sign Up</a>
            </li>
        `;
    }

    // Logout functionality
    const logoutBtn = document.getElementById("logout");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("user");
            window.location.reload();
        });
    }

    // Display all events initially
    displayEvents(allEvents);

    // Event listener for search functionality
    searchButton.addEventListener("click", () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredEvents = allEvents.filter(event =>
            event.title.toLowerCase().includes(searchTerm)
        );
        displayEvents(filteredEvents); // Display filtered events
    });

    // Function to display events
    function displayEvents(events) {
        eventsContainer.innerHTML = ""; // Clear previous events
        events.forEach(event => {
            const eventCard = document.createElement("div");
            eventCard.className = "col-md-4";
            eventCard.innerHTML = `
                <div class="card mb-4">
                    <div class="card-body">
                        <img src="images/event-image.jpg" alt="" class="event-image">
                        <h5>${event.title}</h5>
                        <p>${new Date(event.date).toLocaleDateString()}</p>
                        <a href="${user ? `/pages/view_event.html?id=${event.id}` : '/pages/login.html'}" 
                            class="btn btn-success">
                            ${user ? "View Event" : "Login to View"}
                        </a>
                    </div>
                </div>
            `;
            eventsContainer.appendChild(eventCard);
        });
    }
});