import React, { useState } from 'react';
import './SignUpForm.css';
import { Link } from 'react-router-dom';

const newUsers = [
  { fullname: 'Elnie Ebasan' },
  { username: 'elnie.ebasan' },
  { password: 'Abc123**' },
  { email: 'eebasan43@gmail.com' }
];

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = { fullname, username, password, email };
    newUsers.push(newUser);
    console.log(newUsers); //try try
    props.onSubmit(newUser);
    setFullname('');
    setUsername('');
    setPassword('');
    setEmail('');
  };

  return (
    <form className="signUpForm" onSubmit={handleSubmit}>
      
        <input 
        type="text" 
        id="fullname" 
        value={fullname} 
        placeholder="Full Name"
        onChange={handleFullnameChange} />
      
        <input 
        type="text" 
        id="username" 
        value={username} 
        placeholder="Username"
        onChange={handleUsernameChange} />
      
        <input 
        type="password" 
        id="password" 
        value={password} 
        placeholder="Password"
        onChange={handlePasswordChange} />
      
        <input 
        type="email" 
        id="email" 
        value={email} 
        placeholder="Email"
        onChange={handleEmailChange} />
      
      <div className='signUpbutton'>
        <button type="submit">Sign Up</button>
        <button type="submit"><Link to="/">Sign In</Link></button>
      </div>
    </form>
  );
}

export default SignUpForm;
