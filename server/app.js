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
let activePlayer = true;

function toggleTurn () {
  if(activePlayer){
    activePlayer = false;
  }
  else {
    activePlayer = true;
  }
}


 io.on('connection', (client) => {
   playerArray.push(client.id)
  console.log(playerArray)
   if(playerArray.length === 1){
     client.emit('player-one')
   }
   else if(playerArray.length === 2){
     client.emit('player-two')
   }

   client.on('turn-change', (gameState) => {
    if(activePlayer){
      io.emit('player-one-turn', gameState)
    }
    else{
      io.emit('player-two-turn', gameState)
    }
    toggleTurn()
   })

   client.on('disconnect', () => {
    playerArray = [];
  })
 });

