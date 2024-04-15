document.addEventListener('DOMContentLoaded', function() {
    const events = [
        { 
            title: 'Event Title 1', 
            date: 'January 1, 2025', 
            seatsAvailable: 100, 
            imageUrl: './assets/sunset-1373171_1280.jpg', 
            link: '#' 
        },
        { 
            title: 'Event Title 2', 
            date: 'February 15, 2025', 
            seatsAvailable: 50, 
            imageUrl: "./assets/sunset-1373171_1280.jpg", 
            link: '#' 
        },
        { 
            title: 'Event Title 3', 
            date: 'March 30, 2025', 
            seatsAvailable: 80, 
            imageUrl: "./assets/sunset-1373171_1280.jpg", 
            link: '#' 
        },
        { 
            title: 'Event Title 4', 
            date: 'April 10, 2025', 
            seatsAvailable: 120, 
            imageUrl: "./assets/sunset-1373171_1280.jpg", 
            link: '#' 
        }
    ];

    const eventCardsContainer = document.getElementById('event-cards-container');

    events.forEach(event => {
        const eventCardHtml = `
            <div class="col-md-4">
                <div class="event-card">
                    <img src="${event.imageUrl}" class="img-fluid mb-3" alt="${event.title}">
                    <h3>${event.title}</h3>
                    <p>Date: ${event.date}</p>
                    <p>Seats Available: ${event.seatsAvailable}</p>
                    <a href="${event.link}" class="btn btn-primary">Book Now</a>
                </div>
            </div>
        `;

        eventCardsContainer.innerHTML += eventCardHtml;
    });
});
