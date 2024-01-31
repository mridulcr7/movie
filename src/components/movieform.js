// src/components/BookingForm.js
import React from 'react';

const Movieform = () => {
    const showName = localStorage.getItem('showName');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <div>
            <h2>Booking Form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="movieName">Movie Name:</label>
                <input type="text" id="movieName" value={showName} readOnly />
                {/* Add other relevant form fields */}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Movieform;
