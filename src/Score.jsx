import React, { Component } from 'react';
import './App.css';
import SingleQuote from './SingleQuote';

class Score extends Component {
  constructor() {
    super();
    this.state = {
      score: 0
    }
  }

  render() {
    return(
      <div>score test: {this.state.score}
      {this.quoteDeck()}</div>
    );
  }

  tickScore() {
     let score = this.state.score;
     score++;
     this.setState({score: score});
   }

   quoteDeck() {
     console.log(this.props.deck)
     return this.props.deck.map((card, index) =>
       <SingleQuote key={card.quote} index={card.index} quote={card.quote} name={card.name}
         tickScore={() => this.tickScore()} />)
   }
  }
    export default Score;
