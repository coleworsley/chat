import React from 'react';
import './index.css';
import { UserContext, defaultUser } from '../../context';
import { Messages } from '../Messages';

const App = () => {
  return (
    <UserContext.Provider value={defaultUser}>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to the <em>CHAT</em></h1>
        </header>
        <main>
          <Messages />
        </main>
      </div>
    </UserContext.Provider>
  );
}

export default App;
