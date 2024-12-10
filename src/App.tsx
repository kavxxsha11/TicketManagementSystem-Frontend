import React, { useState } from 'react';
import ConfigurationForm from './components/ConfigurationForm';
import TicketDisplay from './components/TicketDisplay';
import ControlPanel from './components/ControlPanel';
import LogDisplay from './components/LogDisplay';

const App: React.FC = () => {
    const [config, setConfig] = useState<Record<string, number> | null>(null); // Allow `null` or configuration object
    const [logs, setLogs] = useState<string[]>([]);

    const addLog = (message: string) => {
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
};

export default App;