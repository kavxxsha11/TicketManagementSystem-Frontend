import React from 'react';
import '../styles/ControlPanel.css';

function ControlPanel({ addLog, onStart, onStop }) {
    return (
        <div className="control-panel">
            <button onClick={onStart}>Start</button>
            <button onClick={onStop}>Stop</button>
        </div>
    );
}

export default ControlPanel;
