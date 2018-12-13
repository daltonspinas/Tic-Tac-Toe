const express = require('express')
const app = express()
const path = require('path')
const server = app.listen(3000, () => console.log('listening'));
const io = require('socket.io')(server)


app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, '..', 'public', '/index.html'));
});


let playerArray = [];

 io.on('connection', (client) => {
   console.log(client.id)
   playerArray.push(client.id)
  console.log(playerArray)
   if(playerArray.length === 1){
     client.emit('player-one')
   }
   else if(playerArray.length === 2){
     client.emit('player-two')
      io.emit('game-start', playerArray[0])
   }


   client.on('disconnect', () => {
    console.log('disconnected')
    playerArray = [];
  })
 });

