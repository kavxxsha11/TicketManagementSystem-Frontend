import React, { useEffect, useState } from 'react';
import '../styles/TicketDisplay.css';

function TicketDisplay({ config }) {
    const [availableTickets, setAvailableTickets] = useState(0);

    // Fetch available tickets from the backend
    const fetchTickets = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/system/tickets');
            if (response.ok) {
                const ticketCount = await response.json();
                setAvailableTickets(ticketCount); // Update available tickets
            } else {
                console.error(`Failed to fetch tickets: ${response.statusText}`);
            }
        } catch (error) {
            console.error(`Error fetching tickets: ${error.message}`);
        }
    };

    useEffect(() => {
        // Fetch tickets every second
        const interval = setInterval(fetchTickets, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="ticket-display">
            <h2>Tickets Available: {availableTickets}</h2>
            <p>Maximum Capacity: {config.maxTicketCapacity}</p>
        </div>
    );
}

export default TicketDisplay;
