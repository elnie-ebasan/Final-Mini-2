import React from 'react'
import './SignInAvatar.css'
import avatar from '../../../UI-images/imahe.jpg'

const SignInAvatar = () => {

  return (
    <div>
      <img src= {avatar} alt="avatar" style={{width: '350px'}} />
    </div>
  )
}

export default SignInAvatar
