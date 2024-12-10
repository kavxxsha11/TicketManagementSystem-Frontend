import React from 'react';
import '../styles/ControlPanel.css';

interface ControlPanelProps {
    addLog: (message: string) => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ addLog }) => {
    const handleStart = () => {
        addLog('System started');
    };

    const handleStop = () => {
        addLog('System stopped');
    };

    return (
        <div className="control-panel">
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    );
};

export default ControlPanel;
