import React, { Component } from 'react';
import './App.css';

class SingleQuote extends Component {

  render() {
    return(
      <div id="bubble" className="container">
        <div> {this.props.trump}</div>
        <div> {this.props.hitler}</div>
        <form action="submit">
          <div id="dictators">
              <label for="DonnyT">
                <input type="radio" name="speaker" id="DonnyT" value="A" /><img src="../trump.png" />
              </label>
              <label for="AdyH">
                <input type="radio" name="speaker" id="AdyH" value="B" /><img src="../hitler.png" />
              </label>
          </div>
        </form>
      </div>
    );
  }

}

export default SingleQuote;
