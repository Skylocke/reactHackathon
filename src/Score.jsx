import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import SingleQuote from './SingleQuote';

class Score extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
    }
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.checkAnswers(event)}>
          {this.quoteDeck()}
          <button onClick={() => this.showScore()} id="button" type="submit">Submit</button>
        </form>
        <div id="scoreBoard">
          <h1> Your score: {this.state.score}/5 </h1>
        </div>
      </div>
    );
  }

  showScore() {
    $('html, body').animate({
          scrollTop: document.getElementById('scoreBoard').offset().top
        }, 1000);
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
    this.setState({score: score})
  }

   quoteDeck() {
     console.log(this.props.deck)
     return this.props.deck.map((card, index) =>
       <SingleQuote key={card.quote} index={index} quote={card.quote} name={card.name}
         tickScore={() => this.tickScore()} />)
   }



  }
    export default Score;
