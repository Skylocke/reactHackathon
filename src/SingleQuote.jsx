import React, { Component } from 'react';
import './App.css';

class SingleQuote extends Component {

  render() {
    return(
      <div className="container">
      <h1> Home </h1>
        <div> {this.props.messages}</div>
        <button className="btn btn-primary">Click Me</button>
      </div>
    );
  }

}

export default SingleQuote;
