import React, { Component } from 'react';
import RollDice from './RollDice';
import Die from './Die';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Die /><Die />
        <RollDice />
      </div>
    );
  }
}

export default App;
