import React from 'react'
import SignInAvatar from '../SignIn/SignInAvatar/SignInAvatar'
import SignInForm from './SignInForm/SignInForm'
import './SignInHome.css'

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

const SignInHome = () => {
  return (
    <div className="signInHome">
      <div className='signUpPage'>
      <Container spacing={100}>
          <div className="column1">
            <Column>
              <SignInAvatar />
            </Column>
          </div>

          <div className="column2">
            <Column>
                <SignInForm />
            </Column>
          </div>
        </Container>
        <br />

      <div className='mensahe-link'>
      <a href="https://mensahe-clone.vercel.app/"><h3>What's mensahe?</h3></a>
      </div>
      </div>

    </div>
    );
}

export default SignInHome
