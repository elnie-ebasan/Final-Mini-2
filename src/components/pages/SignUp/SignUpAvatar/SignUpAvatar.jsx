import React from 'react'
import './SignUpAvatar.css'
import avatar from '../../../UI-images/imahe.jpg'

const SignUpAvatar = () => {
  return (
    <div className='avatar'>
      <img src={avatar} alt="avatar" style={{width: '350px'}} />
    </div>
  )
}

export default SignUpAvatar
