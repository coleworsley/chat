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
          <h1>Welcome to the <em>CHAT</em></h1>
        </header>
        <aside>
          <UserForm />
        </aside>
        <main>
          <Messages />
        </main>
      </div>
    </UserProvider>
  );
}

export default App;
