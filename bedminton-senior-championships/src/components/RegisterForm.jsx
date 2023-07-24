// RegisterForm.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setName, setEmail, setPassword, setConfirmPassword, registerUser } from './registerSlice';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { name, email, password, confirmPassword, isRegistered } = useSelector((state) => state.register);

  const handleNameChange = (e) => {
    dispatch(setName(e.target.value));
  };

  const handleEmailChange = (e) => {
    dispatch(setEmail(e.target.value));
  };

  const handlePasswordChange = (e) => {
    dispatch(setPassword(e.target.value));
  };

  const handleConfirmPasswordChange = (e) => {
    dispatch(setConfirmPassword(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser());
  };

  if (isRegistered) {
    return (
      <div>
        <h2>You have successfully registered!</h2>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordChange} />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
