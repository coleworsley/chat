import React from 'react';
import './index.css';
import { UserProvider } from '../../provider';
import { Messages } from '../Messages';
import { UserForm } from '../UserForm';

const App = () => {
  return (
    <UserProvider>
      <div className="App">
        <header className="App-header">
          <h1>Let&apos;s <em>CHAT</em></h1>
        </header>
        <main className="App-main">
          <UserForm />
          <Messages />
        </main>
      </div>
    </UserProvider>
  );
}

export default App;
