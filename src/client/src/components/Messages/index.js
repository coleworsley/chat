import React from 'react';
import io from 'socket.io-client';
import { SocketContext } from '../../context';
import { MessageForm } from './MessageForm';
import { MessageList } from './MessageList';

const HOST = 'http://localhost:8080';
const socket = io(HOST);

export const Messages = () => {
  return (
    <React.Fragment>
      <SocketContext.Provider value={({socket})}>
        <MessageList />
        <MessageForm />
      </SocketContext.Provider>
    </React.Fragment>
  )
}
