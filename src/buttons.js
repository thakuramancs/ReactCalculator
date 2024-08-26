import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Buttons({ onButtonClick }) {
  const btn = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'];
  
  return (
    <div className="btn-grid">
      {btn.map((btnName, index) => (
        <button
          key={index}
          onClick={() => onButtonClick(btnName)}
          className={`btn btn-primary ${btnName === '=' ? 'btn-equal' : ''} ${btnName === 'C' ? 'btn-clear' : ''}`}
        >
          {btnName}
        </button>
      ))}
    </div>
  );
}

export default Buttons;
