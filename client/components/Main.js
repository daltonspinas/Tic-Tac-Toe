import React, { Component } from 'react';

export default class Main extends Component {
constructor() {
  super()
  this.state = {
    board: ['x', null, null, null, null, null, null, null, 'x'],
    activePlayer: ''
  }
}
  render () {
    console.log(this.state.activePlayer)
    return (
      <div>
        <table id='table'>
        <tbody>
          <tr>
            <td id='cell'>{this.state.board[0]}</td>
            <td id='cell'>{this.state.board[1]}</td>
            <td id='cell'>{this.state.board[2]}</td>
          </tr>
          <tr>
          <td id='cell'>{this.state.board[3]}</td>
          <td id='cell'>{this.state.board[4]}</td>
          <td id='cell'>{this.state.board[5]}</td>
          </tr>
          <tr>
          <td id='cell'>{this.state.board[6]}</td>
          <td id='cell'>{this.state.board[7]}</td>
          <td id='cell'>{this.state.board[8]}</td>
          </tr>
        </tbody>
        </table>
      </div>
    );
  }
}
