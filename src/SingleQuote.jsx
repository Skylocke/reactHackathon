import React, { Component } from 'react';
import './App.css';

class SingleQuote extends Component {

  render() {
    return(
      <div className="container">
        <div> {this.props.trump}</div>
        <div> {this.props.hitler}</div>
        <form action="submit">
          <input type="radio" name="gender" value="A" />
          <input type="radio" name="gender" value="B" />
        </form>
      </div>
    );
  }

}

export default SingleQuote;
