import React, { useState } from 'react';
import './Content.css';

function Content(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const handleTextEdit = (event) => {
    setMessage(event.target.value);
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleCreateButtonClick = () => {
    setIsEditing(true);
    setMessage('');
    setSelectedColor('');
  };

  const handleSaveButtonClick = () => {
    setIsEditing(false);
    props.addMessage(message, selectedColor);
    setMessage('');
    setSelectedColor('');
  };
  

  const handleCancelButtonClick = () => {
    setIsEditing(false);
    setMessage('');
  };

  return (
    <div className="content" style={{textAlign: 'center'}}>
        {props.isEditing ? (
          <div className="edit-area" >
            <textarea className='textArea' value={message} onChange={handleTextEdit} style={{backgroundColor: props.color, textAlign: 'center'}} />

            <div className="button-group">
              <button className='save' onClick={handleSaveButtonClick}>Save</button>
              <button className='cancel' onClick={handleCancelButtonClick}>Cancel</button>
            </div>
          </div>
        ) : (
          <div className="message" style={{color: '#ffffff', textAlign: 'center'}}>
            {message}
          </div>
        )}
    </div>
  );
}

export default Content;