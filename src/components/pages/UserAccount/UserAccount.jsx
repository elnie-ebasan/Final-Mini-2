import React, { useState } from 'react';
import Sidebar from './SideBar/SideBar';
import Content from './Content/Content';
import Profile from './Profile/Profile';
import './UserAccount.css';
import ColorTemplate from './Content/ColorTemplate/ColorTemplate';

function UserAccount(props) {
  const [page, setPage] = useState('home');
  const [color, setColor] = useState('');
  const [messages, setMessages] = useState([]);

  const addMessage = (newMessage, color) => {
    setMessages([...messages, { message: newMessage, color: color }]);
  };
  

  const handlePageChange = (pageName) => {
    setCurrentPage(pageName);
  };

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  const handleCreateMessage = () => {
    setContentIsEditing(true);
  };

  const [contentIsEditing, setContentIsEditing] = useState(false);
  
  return (
    <div className="userAccount">
      <div className="sideBar">
        <Sidebar onPageChange={handlePageChange} onMessageCreate={handleCreateMessage} />
      </div>

      <div className="content">
      <ColorTemplate onColorChange={handleColorChange} />
      <Content color={color} isEditing={contentIsEditing} setIsEditing={setContentIsEditing} addMessage={addMessage} />
      </div>
      <div className="profile">
        <Profile messages={messages} />
      </div>

    </div>
  );
}

export default UserAccount;
