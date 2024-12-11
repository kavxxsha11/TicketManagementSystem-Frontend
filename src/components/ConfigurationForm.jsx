import React, { useState } from 'react';
import '../styles/ConfigurationForm.css';

function ConfigurationForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        totalTickets: '',
        ticketReleaseRate: '',
        customerRetrievalRate: '',
        maxTicketCapacity: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        const newErrors = {};

        for (const [key, value] of Object.entries(formData)) {
            if (!value.trim()) {
                newErrors[key] = `${key.replace(/([A-Z])/g, ' $1')} is required.`;
            } else if (isNaN(+value)) {
                newErrors[key] = `${key.replace(/([A-Z])/g, ' $1')} must be a number.`;
            } else if (+value <= 0) {
                newErrors[key] = `${key.replace(/([A-Z])/g, ' $1')} must be a positive number.`;
            }
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
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
