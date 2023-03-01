import React from 'react';
import SignUpForm from '../SignUpForm/SignUpForm';
import './SignUpPage.css';

function SignUpPage() {
  const handleSignUp = (userInfo) => {
    console.log(userInfo);
  };

  return (
    <div className="form">
      <SignUpForm onSubmit={handleSignUp} />
    </div>
  );
}

export default SignUpPage;
