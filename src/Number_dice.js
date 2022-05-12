import React, { Component } from "react";
// import { Button, Container } from "@mui/material";
class Number_dice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      die1: 6,
      die2: 6,
      attempts: 15,
      usedAttempts: 0,
      remaining: 15,
      points: 0,
    };
  }
  updation = (x, y) => {
    let remaining = this.state.remaining;
    let usedAttempts = this.state.usedAttempts;
    this.pointsCalc(x, y);
    this.setState({
      die1: x,
      die2: y,
      remaining: remaining - 1,
      usedAttempts: usedAttempts + 1,
    });
  };
  pointsCalc = (x, y) => {
    let die1 = x;
    let die2 = y;
    let points = this.state.points;
    switch (true) {
      case x === 0 && y === 0:
        points += 0;
        break;
      case x === 1 && y === 1:
        points += 10;
        break;
      case x === 2 && y === 2:
        points += 0;
        break;
      case x === 3 && y === 3:
        points += 0;
        break;
      case x === 4 && y === 5:
        points += 1;
        break;
      case x === 5 && y === 6:
        points += 2;
        break;
      case x === 4 && y === 4:
        points += 4;
        break;
      case x === 5 && y === 5:
        points += 6;
        break;
      case x === 6 && y === 6:
        points += 8;
        break;
      default:
        points += 0;
    }
    this.setState({
      points: points,
    });
  };
  rolldice = () => {
    let die1 = Math.floor(Math.random() * 7);
    let die2 = Math.floor(Math.random() * 7);
    this.updation(die1, die2);
  };
  again = () => {};
  render() {
    let dice = this.state;
    let final =
      dice.points < 20
        ? "You Lost!!!"
        : dice.points < 35
        ? "You Won Bronze!!!"
        : dice.points < 50
        ? "You won Silver!!!"
        : "You Won Gold!!!";
    return (
      <>
        <div>
          <p>
            {dice.die1} &nbsp;
            {dice.die2}
          </p>
          {dice.remaining === 0 ? (
            <>
               <button onClick={this.again}>Game Over!</button>
            </>
          ) : (
            <button variant="contained" onClick={this.rolldice}>
              Roll Dice
            </button>
          )}
          <p>Total Attempts: {dice.attempts}</p>
          <p>Used Attempts: {dice.usedAttempts}</p>
          <p>Attempts Left: {dice.remaining}</p>
          <p>Points: {dice.points}</p>
          {dice.remaining === 0 ? final : <></>}
        </div>
      </>
    );
  }
}
export default Number_dice;