import React, { useState, useEffect } from 'react';
import ConfigurationForm from './components/ConfigurationForm';
import TicketDisplay from './components/TicketDisplay';
import ControlPanel from './components/ControlPanel';
import LogDisplay from './components/LogDisplay';

function App() {
    const [config, setConfig] = useState(null); // System configuration state
    const [logs, setLogs] = useState([]);
    const [status, setStatus] = useState('System is stopped.'); // System status

    const addLog = (message) => {
        setLogs((prevLogs) => [...prevLogs, message]); // Add a new log entry
    };

    // Fetch system status from the backend
    const fetchStatus = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/system/status');
            if (response.ok) {
                const statusMessage = await response.text();
                setStatus(statusMessage); // Update status
                addLog(`Status: ${statusMessage}`); // Log status
            } else {
                addLog(`Failed to fetch status: ${response.statusText}`);
            }
        } catch (error) {
            addLog(`Error fetching status: ${error.message}`);
        }
    };

    // Handle system configuration submission
    const sendConfiguration = async (configuration) => {
        try {
            const response = await fetch('http://localhost:8080/api/system/configure', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(configuration),
            });

            if (response.ok) {
                const result = await response.json();
                setConfig(result); // Save config returned by backend
                addLog('Configuration submitted successfully.');
            } else {
                addLog(`Failed to configure: ${response.statusText}`);
            }
        } catch (error) {
            addLog(`Error sending configuration: ${error.message}`);
        }
    };

    // Handle system start/stop requests
    const handleControl = async (action) => {
        try {
            const response = await fetch(`http://localhost:8080/api/system/${action}`, {
                method: 'POST',
            });

            if (response.ok) {
                const result = await response.text();
                addLog(result); // Log action result
                fetchStatus(); // Update the status after control action
            } else {
                addLog(`Failed to ${action} the system: ${response.statusText}`);
            }
        } catch (error) {
            addLog(`Error: ${error.message}`);
        }
    };

    // Fetch initial system status on component mount
    useEffect(() => {
        fetchStatus();
    }, []);

    return (
        <div className="container">
            <h1>Real-Time Event Ticketing System</h1>
            {!config ? (
                <ConfigurationForm onSubmit={sendConfiguration} />
            ) : (
                <>
                    <TicketDisplay config={config} />
                    <ControlPanel
                        addLog={addLog}
                        onStart={() => handleControl('start')}
                        onStop={() => handleControl('stop')}
                    />
                    <LogDisplay logs={logs} />
                </>
            )}
        </div>
    );
}

export default App;
