import React, { useState } from 'react';
import './SignInForm.css';
import { Link } from 'react-router-dom';

function SignInForm(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && username === user.username && password === user.password) {
      console.log("Logged in as:", user.username);
      alert('Login successful!');
      setUsername('');
      setPassword('');
      setTimeout(() => {
        window.location.href = "/user";
      }, 1000);
    } else {
      alert('Invalid username or password.');
    }
  };

  return (
    <form className="signInForm" onSubmit={handleSignIn}>
      <input
        type="text"
        id="username"
        value={username}
        placeholder="Username"
        onChange={handleUsernameChange}
      />

      <input
        type="password"
        id="password"
        value={password}
        placeholder="Password"
        onChange={handlePasswordChange}
      />

      <div className='signInButtons'>
      <button className='signIn-btn' type="submit">Sign In</button>
      <button type="submit"><Link to='signup'>Sign Up</Link> </button>
      </div>
    </form>
  );
}

export default SignInForm;
