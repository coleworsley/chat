## CHAT

This is my personal chat application implementation.


## Technologies

The primary technologies I used in this project were the following <br/>
[React](https://reactjs.org/) <br/>
[Socket.io](https://socket.io/) <br/>
[Node](https://nodejs.org/en/) <br/>
[Express](https://expressjs.com/) <br/>


## Development

### To Run:
1. Clone down the repo
2. Enter the root directory in your command line tool `cd chat`
3. Run `npm run installall`
      - alternatively run `npm install` then `cd src/client && npm install`
4. Run `npm run buildall`
      - alternatively run `cd src/client && npm run build`
5. From the root run `npm start`
6. Open [http://localhost:8080](http://localhost:8080) to view it in the browser.


### Project Structure
```
-- src
  -- client
    -- public
    -- src
      -- components
        -- App
          -- index.css
          -- index.js
          -- index.test.js
  -- server
    -- server.js
-- package.json
```


## Project Plan
For this project, I choose to not use [Redux](https://redux.js.org/) (As I normally use for state management) and instead choose to implement [React Hooks](https://reactjs.org/docs/hooks-reference.html) and the [React Context API](https://reactjs.org/docs/context.html). The plan will start with building a basic server that can handle a Socket.io connection. From there, I will create a component for the message form, list, and actual message. Each of these components will utilize Hooks for state.

## Difficulties
1. Mocking the socket.io connection for events for Unit Testing. This is something I did not have time to get into.
2. The `useEffect` hook when in conjunction with socket.io.

## Next Steps
1. Migrate codebase to [TypeScript](https://www.typescriptlang.org/) - There are a few example in the application where I think this would already have helped debug problems (ie, SocketContext).
2. Add sufficient testing.
3. Add a database to the backend to store Users and handle authentication
4. On the frontend, validate users through a JWT and store this to the client's local storage.
5. Add tests to the node server
6. To be continued.
