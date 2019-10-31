## CHAT
---

This is my personal chat application implementation.


## Technologies
---

[React](https://reactjs.org/) <br/>
[Socket.io](https://socket.io/) <br/>
[Node](https://nodejs.org/en/) <br/>
[Express](https://expressjs.com/) <br/>


## Development
---

### To Run:
1. Clone down the repo
2. Enter the root directory in your command line tool `cd chat`
3. Run `npm build-all`
  * alternatively run `npm install` then `cd frontend && npm install && npm build`
4. From the root run `npm start`
5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### Project Structure
```
+-- src
  +-- client
    +-- public (build files)
    +-- src
      +-- components
  +-- server
    +-- server.js
+-- package.json
```


## Project Plan
---
For this project, I choose to not use [Redux](https://redux.js.org/) (As I normally use for state management) and instead choose to implement [React Hooks](https://reactjs.org/docs/hooks-reference.html). This was my first project implementing this technology.
