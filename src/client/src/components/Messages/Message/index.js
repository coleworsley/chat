import React from 'react';
import './index.css';

export const Message = ({ author, message }) => {
  return (
    <div className="Message">
      <h3>{author}</h3>
      <p>{message}</p>
    </div>
  );
}
