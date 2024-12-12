Real-Time Event Ticketing System - Frontend
Overview
A React-based frontend for the Real-Time Event Ticketing System, providing an interactive user interface for system configuration and monitoring.
Features

Dynamic System Configuration
Real-Time Ticket Availability Display
System Control Panel
Comprehensive Logging

Technical Stack

React
JavaScript (ES6+)
Fetch API for Backend Communication
CSS for Styling
Responsive Design

Components

ConfigurationForm: System parameter setup
ControlPanel: Start/Stop system controls
TicketDisplay: Real-time ticket count
LogDisplay: System event logging

Prerequisites

Node.js (14+ recommended)
npm or yarn
Backend service running

Setup and Installation
bashCopy# Clone the repository
git clone <repository-url>

# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm start
Available Scripts

npm start: Run development server
npm build: Create production build
npm test: Run test suite

Configuration

Backend URL: http://localhost:8080
Frontend runs on http://localhost:5173

Form Validation

All configuration fields required
Numeric input validation
Positive number constraints

API Integration

Fetch API for backend communication
Periodic ticket count updates
Error handling for API requests

Styling

CSS Modules
Responsive design
Clean, intuitive UI

Environment Variables
Create a .env file for:

REACT_APP_BACKEND_URL: Backend service endpoint

Deployment

Build with npm run build
Deploy static files to web server
Ensure backend service is accessible

Browser Compatibility

Modern browsers
ES6+ support required

Performance Considerations

Efficient state management
Minimal re-renders
Interval-based updates
