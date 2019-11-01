import React, {
  useEffect,
  useState,
  useContext,
  useRef
} from 'react';
import { SocketContext } from '../../../context';
import { Message } from '../Message';
import './index.css';

export const MessageList = () => {
  const { socket } = useContext(SocketContext);
  const [messages, recieveMessage] = useState([]);

  useEffect(() => {

    socket.on('message', message => {
      recieveMessage([...messages, message]);
    });

    return () => {
      socket.off('message');
    }
  });

  return (
    <div className="MessageList">
      {/* TODO: Refactor index into unique key from socket.io server */}
      {messages.map((message, i) => <Message {...message} key={i}/>)}
    </div>
  );
}
