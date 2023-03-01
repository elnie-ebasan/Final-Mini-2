import React from 'react';
import './Profile.css';

function Profile(props) {
  return (
    <div className='profileSection'>
      <h2 className='savedM'>Saved Messages</h2>
      <div className="profile">
      {props.messages.map((message, index) => (
  <div key={index} style={{backgroundColor: message.color}}>{message.message}</div>
))}

    </div>
    </div>

  );
}

export default Profile;