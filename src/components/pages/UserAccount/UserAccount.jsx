import React, { useState, useEffect } from 'react';
import Sidebar from './SideBar/SideBar';
import Content from './Content/Content';
import Profile from './Profile/Profile';
import './UserAccount.css';
import ColorTemplate from './Content/ColorTemplate/ColorTemplate';
import List from "@mui/material/List";
import ListItemButton from '@mui/material/ListItemButton';
import MailIcon from '@mui/icons-material/Email';
import ListItemText from '@mui/material/ListItemText';


const UserAccount = (props) => {
  const [page, setPage] = useState('home');
  const [color, setColor] = useState('');
  const [messages, setMessages] = useState([]);
  const [currentUser, setCurrentUser] = useState('');

  const addMessage = (newMessage, color) => {
    setMessages([...messages, { message: newMessage, color: color }]);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setCurrentUser(user.username);
    }
  }, []);

  const handlePageChange = (pageName) => {
    setPage(pageName);
  };

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  const handleCreateMessage = () => {
    setContentIsEditing(true);
  };

  const [contentIsEditing, setContentIsEditing] = useState(false);

  const userlogout = () => {
    localStorage.removeItem('user'); // clear the user data from local storage
    window.location.href = '/'; // redirect the user to the login page
  };

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
        <h4>Logged in as: {currentUser}</h4>
        <div className='saved'>
        <Profile messages={messages} />
        </div>

        <div className="logOut">
        <List>
        <ListItemButton onClick={userlogout}>
          <MailIcon />
          <ListItemText primary="Sign Out" />
        </ListItemButton>
      </List>
        </div>
      </div>


    </div>
  );
};

export default UserAccount;
