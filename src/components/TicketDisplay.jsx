import React, { useEffect, useState } from 'react';
import '../styles/TicketDisplay.css';

function TicketDisplay({ config }) {
    const [tickets, setTickets] = useState(config.totalTickets);

    useEffect(() => {
        const interval = setInterval(() => {
            setTickets((prev) => Math.max(prev - config.ticketReleaseRate, 0));
        }, 1000);

        return () => clearInterval(interval);
    }, [config.ticketReleaseRate]);

    return (
        <div className="ticket-display">
            <h2>Tickets Available: {tickets}</h2>
            <p>Maximum Capacity: {config.maxTicketCapacity}</p>
        </div>
    );
}

export default TicketDisplay;
