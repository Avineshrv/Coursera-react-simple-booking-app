import React, { useState } from 'react';

const BookingForm = ({ bookingInfo, handleChange, handleSubmit }) => {
  const [showBookingConfirmation, setShowBookingConfirmation] = useState(false);

  const handleBookingSubmit = (e) => {
    e.preventDefault(); 
    setShowBookingConfirmation(true); 
  };

  const handleClosePopup = () => {
    setShowBookingConfirmation(false);
  };
  return (
    <div className="booking-form">
      <h2>Book a Table</h2>
      <form onSubmit={handleBookingSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={bookingInfo.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={bookingInfo.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input type="date" name="date" value={bookingInfo.date} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Time:</label>
          <input type="time" name="time" value={bookingInfo.time} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Number of People:</label>
          <input type="number" name="numberOfPeople" value={bookingInfo.numberOfPeople} onChange={handleChange} min="1" required />
        </div>
        <button type="submit">Book Table</button>
      </form>
      {showBookingConfirmation && ( 
        <div className="booking-confirmation-popup">
          <h3>Booking Confirmed!</h3>
          <p>
            Your table for {bookingInfo.numberOfPeople} people has been booked
            for {bookingInfo.date} at {bookingInfo.time}.
          </p>
          <button onClick={handleClosePopup}>Close</button>
        </div>
      )}
    </div>
  );
}

export default BookingForm;
