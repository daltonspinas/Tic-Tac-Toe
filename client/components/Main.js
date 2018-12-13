import React, { Component } from 'react';

export default class Main extends Component {
constructor() {
  super()
  this.state = {
    board: [null, null, null, null, null, null, null, null, null],
    activePlayer: ''
  }
}
  render () {
    console.log(this.state.activePlayer)
    return (
      <div>
        <table>
        <tbody>
          <tr>
            <td>lalala</td>
          </tr>
        </tbody>
        </table>
      </div>
    );
  }
}
