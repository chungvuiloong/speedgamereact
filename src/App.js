import './App.css';
import Header from './Components/Header';
import Circle from './Components/Circle';
import Button from './Components/Button';
import Overlay from './Components/Overlay';
import React, { Component } from "react";

class App extends Component {
  state = {
    value: '',
    counter: 0,
  };
  // counter +1 
  // coounter

  render() {
    

    const getRndInt = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const startGame = () => {
    console.log("game started");
    }

    const endGame = () => {
      console.log("game Ended");
      }

    const clickHandler = (e) => {
      console.log("Button is clicked", e.target.value);
      this.setState({
        value: e.target.value
      })
    };

    return (
      <div className="App">
        <Header score={this.state.score}/>
        <Circle onClick={clickHandler}/>
        <Button startGame={startGame} endGame={endGame}/>
        <Overlay/>
      </div>
    );
  }


}

export default App;
