import React, { Component } from 'react';
import SingleQuote from './SingleQuote';
import hitler from './hitler_quotes.json';

class APIRequest extends Component {
  constructor() {
  super();
    this.state = {
      trumps: [],
      hitlers: hitler,
    };
     this.performAPIRequest();
  }

  performAPIRequest() {
    var that = this;
    fetch("https://api.whatdoestrumpthink.com/api/v1/quotes/")
    .then(response => {
      response.json().then(data => {
        let trumps = [];
        data.messages.non_personalized.forEach(function(quote) {
          trumps.push({
            name: "trump",
            quote: quote
          })
        })
        that.setState({trumps: trumps});
      });
    }).catch(error => {
      console.log(error);
      that.setState({trumps: []});
    });
}

  render () {
    
    return (
      <div>
        <h1>API Works </h1>
        {this.randomQuotes()}
      </div>
    );
  }

  randomQuotes() {
    var shuffleTwoArrays = function(arr1, arr2, deckSize) {
      var collection = arr1.concat(arr2);
      var deck = [];
      for (var i=0; i<deckSize; i++) {
        var randomIndex = Math.floor(Math.random()*collection.length);
        deck.push(collection[randomIndex]);
        collection.splice(randomIndex, 1);
      }
      return deck;
    }

    let trumps = this.state.trumps;
    let hitlers = this.state.hitlers;

    let deck = shuffleTwoArrays(hitlers, trumps, 15);

    return deck.map(card => <SingleQuote quote={card.quote} name={card.name} />)

  }

  trumps() {
    return this.state.trumps.map(trump =>
      <SingleQuote trump={trump.quote} />
    );
  }
  hitlers() {
    return this.state.hitlers.map(hitler =>
      <SingleQuote hitler={hitler.quote} />
    );
  }

}

module.exports = APIRequest;
