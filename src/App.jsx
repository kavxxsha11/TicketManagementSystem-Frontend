import React, { useState } from 'react';
import ConfigurationForm from './components/ConfigurationForm';
import TicketDisplay from './components/TicketDisplay';
import ControlPanel from './components/ControlPanel';
import LogDisplay from './components/LogDisplay';

function App() {
    const [config, setConfig] = useState(null); // Allow `null` or configuration object
    const [logs, setLogs] = useState([]);

    const addLog = (message) => {
        setLogs((prevLogs) => [...prevLogs, message]);
    };

    return (
        <div className="container">
            <h1>Real-Time Event Ticketing System</h1>
            {!config ? (
                <ConfigurationForm onSubmit={setConfig} /> // Pass the `setConfig` directly
            ) : (
                <>
                    <TicketDisplay config={config} />
                    <ControlPanel addLog={addLog} />
                    <LogDisplay logs={logs} />
                </>
            )}
        </div>
    );
}

export default App;
