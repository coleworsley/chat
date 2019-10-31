import React from 'react';
import io from 'socket.io-client';
import './index.css';
import { SocketContext } from '../../context';
import { Messages } from '../Messages';

const HOST = 'http://localhost:8080';
const socket = io(HOST);

const App = () => {
  return (
    <SocketContext.Provider value={({socket})}>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to the <em>CHAT</em></h1>
        </header>
        <main>
          <Messages />
        </main>
      </div>
    </SocketContext.Provider>
  );
}

export default App;
