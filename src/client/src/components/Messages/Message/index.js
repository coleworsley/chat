import React from 'react';
import './index.css';

export const Message = ({ name, message }) => {
  return (
    <div className="Message">
      <h3>{name}</h3>
      <p>{message}</p>
    </div>
  );
}
