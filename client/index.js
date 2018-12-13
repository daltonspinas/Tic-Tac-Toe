import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main.js';
import io from 'socket.io-client';

const socket = io(window.location.origin);

socket.on('connect', () => {
  console.log('I am now connected to the server!');
});

ReactDOM.render(
      <Main />,
  document.getElementById('app')
);