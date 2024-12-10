import React from 'react';
import '../styles/LogDisplay.css';

interface LogDisplayProps {
    logs: string[];
}

const LogDisplay: React.FC<LogDisplayProps> = ({ logs }) => {
    return (
        <div className="log-display">
            <h2>System Logs</h2>
            <ul>
                {logs.map((log, index) => (
                    <li key={index}>{log}</li>
                ))}
            </ul>
        </div>
    );
};

export default LogDisplay;
