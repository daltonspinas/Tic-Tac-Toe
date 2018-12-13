const express = require('express')
const app = express()
const path = require('path')
const server = app.listen(3000, () => console.log('listening'));
const io = require('socket.io')(server)


app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, '..', 'public', '/index.html'));
});

 io.on('connection', (client) => console.log(client.id));
