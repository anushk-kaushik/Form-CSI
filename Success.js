import React from 'react';
import { useLocation } from 'react-router-dom';

const Success = () => {
  const location = useLocation();
  const { firstName, lastName, username, email, phoneNo, country, city, panNo, aadharNo } = location.state;

  return (
    <div>
      <h2>Form Submission Successful!</h2>
      <div>
        <p><strong>First Name:</strong> {firstName}</p>
        <p><strong>Last Name:</strong> {lastName}</p>
        <p><strong>Username:</strong> {username}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone Number:</strong> {phoneNo}</p>
        <p><strong>Country:</strong> {country}</p>
        <p><strong>City:</strong> {city}</p>
        <p><strong>PAN No:</strong> {panNo}</p>
        <p><strong>Aadhar No:</strong> {aadharNo}</p>
      </div>
    </div>
  );
};

export default Success;
