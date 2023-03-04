import React from 'react';
import './SideBar.css';
import icon from '../../../UI-images/avatar.jpg';

function Sidebar(props) {
  const handleButtonClick = (pageName) => {
    props.onPageChange(pageName);
  };

  const handleCreateButtonClick = () => {
    props.onMessageCreate();
  };

  return (
    <div className="sidebar">
      <div className="brandName"></div>
        <div className="homeButton" onClick={() => handleButtonClick('home')}>Home</div>
        <div className="createButton" onClick={handleCreateButtonClick}>Create</div>
        <div className="historyButton" onClick={() => handleButtonClick('history')}>History</div>
        <div className="profileAvatar" style={{backgroundImage: `url(${icon})`, width: '80px', height:'70px'}}></div>
    </div>
  );
}

export default Sidebar;
