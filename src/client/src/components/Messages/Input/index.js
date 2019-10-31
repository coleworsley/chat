import React, { useState, useContext } from 'react';
import { SocketContext } from '../../../context';
import './index.css';

export const Input = () => {
  const [message, addMessage] = useState('');
  const { socket } = useContext(SocketContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit('message', {
      message,
      author: 'Cole'
    });
    addMessage('');
  }

  return (
    <React.Fragment>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          id="message"
          placeholder="Enter a message..."
          onChange={e => addMessage(e.target.value)}
          value={message}
        />
        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
}
