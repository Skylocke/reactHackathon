import React, { Component } from 'react';
import $ from 'jquery';
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
        <form onSubmit={(event) => this.checkAnswers(event)}>
          {this.quoteDeck()}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

  tickScore() {
     let score = this.state.score;
     score++;
     this.setState({score: score});
  }

  checkAnswers(e) {
    e.preventDefault();
    let answers = [];
    let score = false;
    this.props.deck.forEach(function(card, i) {
      let name = "speaker" + i;
      let inputVal = ($("input[name=" +name+ "]:checked").val() === "true");
      console.log(inputVal);

      if (inputVal === undefined) {
        answers.push(false);
        score+=false;
      } else {
        answers.push(inputVal);
        score+=inputVal;
      }

    })
    console.log(answers);
    console.log(score);
  }

   quoteDeck() {
     console.log(this.props.deck)
     return this.props.deck.map((card, index) =>
       <SingleQuote key={card.quote} index={index} quote={card.quote} name={card.name}
         tickScore={() => this.tickScore()} />)
   }
  }
    export default Score;
