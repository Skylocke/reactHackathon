import React, { Component } from 'react';
import SingleQuote from './SingleQuote';
import Score from './Score';
import hitler from './hitler_quotes.json';

class APIRequest extends Component {
  constructor() {
    super();

    this.state = {
      trumps: [],
      hitlers: hitler
    };
    this.performAPIRequest();

  }

  performAPIRequest() {
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
        this.setState({trumps: trumps});
      });
    }).catch(error => {
      console.log(error);
      this.setState({trumps: []});
    });
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
    let deck = shuffleTwoArrays(hitlers, trumps, 1);
    return (<Score key="quotes" deck={deck} />)
  }

  render () {
    return (
      <div>
        <h1>API Works </h1>
        {this.randomQuotes()}
      </div>
    );
  }

}

module.exports = APIRequest;
