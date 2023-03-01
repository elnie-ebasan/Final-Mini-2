import React, { useState } from 'react';
import './SignUpForm.css';
import { Link } from 'react-router-dom';

function SignUpForm(props) {
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleFullnameChange = (event) => {
    setFullname(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    const newUser = { fullname, username, password, email };
    localStorage.setItem('user', JSON.stringify(newUser));
    setFullname('');
    setUsername('');
    setPassword('');
    setEmail('');
    alert('Sign up successful!');
  };

  const [signInUsername, setSignInUsername] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  return (
    <>
      <form className="signUpForm" onSubmit={handleSignUp}>
        <input
          type="text"
          id="fullname"
          value={fullname}
          placeholder="Full Name"
          onChange={handleFullnameChange}
        />

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

        <input
          type="email"
          id="email"
          value={email}
          placeholder="Email"
          onChange={handleEmailChange}
        />

        <div className="signUpbutton">
          <button type="submit">Sign Up</button>
          <button type="submit">
            <Link to="/">Sign In</Link>
          </button>
        </div>
      </form>
    </>
  );
}

export default SignUpForm;
