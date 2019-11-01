import React, { useContext } from 'react';
import { UserContext } from '../../../context';
import './index.css';

export const Message = ({ name, message }) => {
  const [user] = useContext(UserContext);

  return (
    <div className="Message">
      <div className={`Message-box ${user.name === name ? 'my-message' : 'other-message'}`}>
        <h3>{name}</h3>
        <p>{message}</p>
      </div>
    </div>
  );
}
