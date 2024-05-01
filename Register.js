import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Register.css';

const Registration = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'user', // Set default role to user
  });
  const [registrationSuccess, setRegistrationSuccess] = useState(false); // State to track registration success
  const navigate = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registration details:', user);
    // After registration, show registration success message
    setRegistrationSuccess(true);
    // Navigate to the login page after a delay (optional)
    setTimeout(() => {
      navigate('/login');
    }, 2000); // Navigate after 2 seconds (2000 milliseconds)
  };

  return (
    <div className="registration-container">
      <h2>User Registration</h2>
      <form onSubmit={handleRegistration}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            placeholder="Enter your first name"
            value={user.firstName}
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            placeholder="Enter your last name"
            value={user.lastName}
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role</label>
          <select
            id="role"
            value={user.role}
            onChange={(e) => setUser({ ...user, role: e.target.value })}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
      {/* Registration success message */}
      {registrationSuccess && (
        <div className="registration-success">
          <p>Registration successful! You can now login.</p>
        </div>
      )}
    </div>
  );
};

export default Registration;
