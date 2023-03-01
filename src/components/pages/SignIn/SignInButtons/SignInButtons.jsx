import React from 'react'
import './SignInButtons.css'
import { Link } from "react-router-dom"

const SignInButtons = (props) => {
  return (
    <div className='signInButtons'>
      <button className='signInButton' type="button" onClick={props.onSignIn}>Sign In</button>
      <button className='signInButton' type="button" onClick={props.onRegister}>
      <Link to="/register">Register</Link>
      </button>
    </div>
  )
}

export default SignInButtons
