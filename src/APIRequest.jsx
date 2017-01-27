import React, { Component } from 'react';
import SingleQuote from './SingleQuote';
import hitler from './hitler_quotes.json';

class APIRequest extends Component {
  constructor() {
  super();
    this.state = {
      trumps: [],
      hitlers: [],
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
      {this.trumps()}
    </div>
  );
}

trumps() {
  return this.state.trumps.map(trump =>
    <SingleQuote trump={trump.quote} />
  );
  return this.state.hitlers.map(hitler =>
  <SingleQuote hitler={hitler} />
);
}
}

module.exports = APIRequest;
