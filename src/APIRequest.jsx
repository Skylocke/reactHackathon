import React, { Component } from 'react';
import SingleQuote from './SingleQuote';

class APIRequest extends Component {
  constructor() {
  super();
    this.state = {
      results: []
    };
     this.performAPIRequest();
  }

  performAPIRequest() {
    var that = this;
    fetch("https://api.whatdoestrumpthink.com/api/v1/quotes/")
    .then(response => {
      response.json().then(data => {
        console.log('data ', data)
        that.setState({results: data});
      });
    }).catch(error => {
      console.log(error);
      that.setState({results: []});
    });
}

render () {
  return (
    <div>
      <h1>API Works </h1>
      {this.results()}
    </div>
  );
}

results() {
  return this.state.results.map(result =>
    <SingleQuote messages={result.messages} />
  );
}
}

module.exports = APIRequest;
