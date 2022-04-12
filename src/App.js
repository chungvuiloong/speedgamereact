import './App.css';
import Header from './Components/Header';
import Circle from './Components/Circle';
import Button from './Components/Button';
import Overlay from './Components/Overlay';
import React, { Component } from "react";

class App extends Component {
  state = {
    value: '',
    name:'',
    counter: 0,
    
  };
  // counter +1 
  // coounter
   startGame = () => {
    console.log("game started");
    }

     endGame = () => {
      console.log("game Ended");
      }

     clickHandler = (e) => {
      console.log("Button is clicked", e.target.value, e.target.name);
      this.setState({
        [e.target.name]: e.target.value
      })
    };

  render() {
    // this.clickHandler = this.clickHandler.bind(this);

    
 

    return (
      <div className="App">
        <Header score={this.state.score}/>
        <Circle onClick={this.clickHandler}/>
        <Button startGame={this.startGame} endGame={this.endGame}/>
        <Overlay/>
      </div>
    );
  }


}

export default App;
