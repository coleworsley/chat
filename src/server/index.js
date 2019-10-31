const express = require('express');
const http = require('http');
const app = express();
const path = require('path');
const server = http.createServer(app);
const io = require('socket.io')(server);
const PORT = process.env.PORT || 8080;

// Priority Serve the main react file
app.use(express.static(path.resolve(__dirname, '../client/build')));

io.on('connection', function(socket){
  console.log('a user connected');
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
