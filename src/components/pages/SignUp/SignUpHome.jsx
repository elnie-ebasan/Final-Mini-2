import React from 'react';
import SignUpAvatar from './SignUpAvatar/SignUpAvatar';
import SignUpPage from './SignUpPage/SignUpPage';
import './SignUpHome.css';

const Container = ({ children, spacing = 0 }) => (
  <div style={{ display: 'flex', flexDirection: 'row', gap: spacing }}>
    {children}
  </div>
);

const Column = ({ children, style = {} }) => (
  <div style={{ flex: 1, ...style }}>
    {children}
  </div>
);

const SignUp = () => {
  return (
    <div className='signUpHome'>
      {/* <div className='header'>
        <p>Mensahe Official Website
          <br />
        <span>Feel free to sign up</span>
        </p>
      </div> */}
      <div className="signUpPage">
        <Container spacing={0}>
          <Column>
            <SignUpAvatar />
          </Column>
          
          <Column>
            <SignUpPage />
          </Column>
        </Container>
      </div>
      <div className='mensahe-link'>
      <a href="https://mensahe-clone.vercel.app/" ><h3>What's mensahe?</h3></a>
      </div>
    </div>
  );
};

export default SignUp;


