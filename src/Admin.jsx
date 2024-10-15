import React, { useState, useEffect } from 'react';
import './Admin.css';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const Admin = () => {
  const [bookings, setBookings] = useState([]);

  // Fetch data from JSON
  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setBookings(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Update booking status on click
  const updateStatus = (id, newStatus) => {
    const updatedBookings = bookings.map((booking) =>
      booking.id === id ? { ...booking, status: newStatus } : booking
    );
    setBookings(updatedBookings);
  };

  return (
    <div className="admin-container">
      <div className="header">
        <h1 className="title">eV-finder</h1>
        <input type="date" defaultValue="2024-10-08" />
        <div className="profile-icon">
          <i className="fas fa-user-circle"></i>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>S.no</th>
            <th>User Name</th>
            <th>Time</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={booking.id}>
              <td>{index + 1}</td>
              <td>{booking.userName}</td>
              <td>{booking.time}</td>
              <td>{booking.source}</td>
              <td>{booking.destination}</td>
              <td>
                {booking.status === 'Pending' ? (
                  <>
                    <FaCheckCircle
                      className="success-icon"
                      onClick={() => updateStatus(booking.id, 'Accepted')}
                    />
                    <FaTimesCircle
                      className="danger-icon"
                      onClick={() => updateStatus(booking.id, 'Declined')}
                    />
                  </>
                ) : (
                  <span className={booking.status.toLowerCase()}>
                    {booking.status}
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button className="btn">Previous</button>
        <span className="page-info">1-1 of 1</span>
        <button className="btn">Next</button>
      </div>
    </div>
  );
};

export default Admin;
