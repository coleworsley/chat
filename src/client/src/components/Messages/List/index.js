import React, { useEffect, useState, useContext } from 'react';
import { SocketContext } from '../../../context';
import { Message } from '../Message';
import './index.css';

export const List = () => {
  const { socket } = useContext(SocketContext);
  const [messages, recieveMessage] = useState([]);

  useEffect(() => {

    socket.on('message', message => {
      console.log('message', message.message);
      recieveMessage([...messages, message]);
    });

    return () => {
      socket.off('message');
    }
  });

  return (
    <React.Fragment>
      {/* TODO: Refactor index into unique key from socket.io server */}
      {messages.map((message, i) => <Message {...message} key={i}/>)}
    </React.Fragment>
  );
}
