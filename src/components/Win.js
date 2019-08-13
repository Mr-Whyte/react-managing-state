import React, { Component } from "react";
import "./Win.css";
import "../App.css";

const Card = () => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        Choose your fate
        <div className="flip-card-front"/>
        <div className="flip-card-back">
          <Result />
        </div>
      </div>
    </div>
  );
};

function Result() {
  var Array = ["You Win", "You Lose", "You Lose"]; 
  var random = Math.floor(Math.random() * Array.length);
   return Array[random]; 
}

class Cardies extends Component {
  state = {
    winner: {}
  };

  render() {
    return (
      <div>
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

export default Cardies;
