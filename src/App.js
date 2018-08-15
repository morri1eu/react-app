import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ScoreBar from "./components/score_bar/ScoreBar"
import Jumbotron from "./components/Jumbotron"
import Game from "./components/game_board/game"

class App extends Component {
  render() {
    return (
      <div>
        <Game />
      </div>
    );
  }
}

export default App;
