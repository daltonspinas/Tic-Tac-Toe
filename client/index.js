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


ReactDOM.render(
      <Main />,
  document.getElementById('app')
);