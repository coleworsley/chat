import React, { useState, useContext } from 'react';
import { SocketContext, UserContext } from '../../../context';
import './index.css';

export const MessageForm = () => {
  const [message, addMessage] = useState('');
  const { socket } = useContext(SocketContext);
  const [user] = useContext(UserContext);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit('message', {
      message,
      name: user.name
    });
    addMessage('');
  };

  return (
      <form onSubmit={e => handleSubmit(e)} className="MessageForm">
        <input
          id="message"
          placeholder="Enter a message..."
          onChange={e => addMessage(e.target.value)}
          value={message}
        />
        <button type="submit">Submit</button>
      </form>
  );
}
