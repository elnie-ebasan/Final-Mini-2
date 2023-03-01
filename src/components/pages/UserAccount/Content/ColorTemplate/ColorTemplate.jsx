import React from 'react';
import './ColorTemplate.css';

const colorTemplates = [
  { name: 'Blue', color: '#2196f3' },
  { name: 'Green', color: '#4caf50' },
  { name: 'Red', color: '#f44336' },
  { name: 'Yellow', color: '#ffeb3b' },
  { name: 'Orange', color: '#ffa500' },
  { name: 'Indigo', color: '#4b0082' },
  { name: 'Violet', color: '#8f00ff' }
];

function ColorTemplate(props) {
  const handleColorClick = (newColor) => {
    props.onColorChange(newColor);
  };

  return (
    <div className="color-templates">
      <h2 className='choices' style={{color: 'black'}}>Choose a color template:</h2>
      <div className="template-buttons" style={{display: 'flex', justifyContent: 'center'}}>
        {colorTemplates.map((template, index) => (
          <button key={index} style={{ backgroundColor: template.color }} onClick={() => handleColorClick(template.color)}>{template.name}</button>
        ))}
      </div>
    </div>
  );
}

export default ColorTemplate;
