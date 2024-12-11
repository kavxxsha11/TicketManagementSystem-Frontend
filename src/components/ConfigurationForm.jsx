import React, { useState } from 'react';
import '../styles/ConfigurationForm.css';

function ConfigurationForm({ onSubmit }) {
    // State to store form data
    const [formData, setFormData] = useState({
        totalTickets: '',
        ticketReleaseRate: '',
        customerRetrievalRate: '',
        maxTicketCapacity: '',
    });

    // State to store error messages for validation
    const [errors, setErrors] = useState({});

    // Handle changes in form inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Validate the form data
    const validate = () => {
        const newErrors = {};

        // Loop through all form fields and validate them
        for (const [key, value] of Object.entries(formData)) {
            if (!value.trim()) {
                newErrors[key] = `${key.replace(/([A-Z])/g, ' $1')} is required.`; // If empty
            } else if (isNaN(+value)) {
                newErrors[key] = `${key.replace(/([A-Z])/g, ' $1')} must be a number.`; // If not a number
            } else if (+value <= 0) {
                newErrors[key] = `${key.replace(/([A-Z])/g, ' $1')} must be a positive number.`; // If not positive
            }
        }

        return newErrors;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        const validationErrors = validate(); // Validate data
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors); // Set errors if any
        } else {
            setErrors({}); // Clear errors
            onSubmit({
                totalTickets: +formData.totalTickets,
                ticketReleaseRate: +formData.ticketReleaseRate,
                customerRetrievalRate: +formData.customerRetrievalRate,
                maxTicketCapacity: +formData.maxTicketCapacity,
            });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>System Configuration</h2>
            {['totalTickets', 'ticketReleaseRate', 'customerRetrievalRate', 'maxTicketCapacity'].map((field) => (
                <div key={field}>
                    <label>{field.replace(/([A-Z])/g, ' $1')}:</label>
                    <input
                        type="text"
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                    />
                    {errors[field] && <p className="error">{errors[field]}</p>}
                </div>
            ))}
            <button type="submit">Start System</button>
        </form>
    );
}

export default ConfigurationForm;
