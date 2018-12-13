import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main.js';
import io from 'socket.io-client';

const socket = io(window.location.origin);

socket.on('connect', () => {
  console.log('I am now connected to the server!', socket.id);
});

socket.on('player-one', () => {
  ReactDOM.render(
    <h1>You are Player 1</h1>,
    document.getElementById('player-select')
  )
})

socket.on('player-two', () => {
  ReactDOM.render(
    <h1>You are Player 2</h1>,
    document.getElementById('player-select')
  )
})

socket.on('game-start', id => {
  console.log(id)
  if(socket.id === id){
    ReactDOM.render(
      <h3>it is your turn</h3>
    ),
    document.getElementById('player-turn')
  }
  else{
    ReactDOM.render(
      <h3>it is the other player's turn</h3>
      ),
      document.getElementById('player-turn')
  }
})

ReactDOM.render(
      <Main />,
  document.getElementById('app')
);