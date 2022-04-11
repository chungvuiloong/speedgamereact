import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Circle from './Components/Circle';
import Button from './Components/Button';
import Overlay from './Components/Overlay';
import React, { Component } from "react";

class App extends Component {
  state = {
    counter: 0,
  };



  // counter +1 
  // coounter

 




  render() {
    const circles = document.querySelectorAll(".circle");

    const getRndInt = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    // circles.forEach((circle, i) => {
    //   circle.addEventListener("click", () => clickedCircle(i));
    // });

    // const clickedCircle = (i) => {
    //   // i += 1;
    //   console.log("circle was clicked", i);
    //   bump.play();
    
    //   if (i !== active) {
    //     endGame();
    //   } else {
    //     score++;
    //     rounds--;
    
    //     scoreText.textContent = score;
    //   }
    // };

    return (
      <div className="App">
        <Header/>
        <Circle/>
        <Button/>
        <Overlay/>
      </div>
    );
  }


}

export default App;
