import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

function App() {
  const [bookingInfo, setBookingInfo] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    numberOfPeople: 1
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingInfo({
      ...bookingInfo,
      [name]: value
    });
  };

  return (
    <div className="App">
      <NavBar />
      <Header />
      <div className="content">
        <BookingForm 
          bookingInfo={bookingInfo}
          handleChange={handleChange}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
