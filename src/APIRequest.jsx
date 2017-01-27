import React, { Component } from 'react';
import SingleQuote from './SingleQuote';
import hitler from './hitler_quotes.json';

class APIRequest extends Component {
  constructor() {
  super();
    this.state = {
      trumps: [],
      hitlers: hitler
    };
     this.performAPIRequest();
     this.scrape(hitler);
  }

  scrape(obj) {
    console.log(obj);
  }

  performAPIRequest() {
    var that = this;
    fetch("https://api.whatdoestrumpthink.com/api/v1/quotes/")
    .then(response => {
      response.json().then(data => {
        that.setState({trumps: data.messages.non_personalized});
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
    <SingleQuote trump={trump} />
  );
}
}

module.exports = APIRequest;
