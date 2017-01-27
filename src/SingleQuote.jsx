import React, { Component } from 'react';
import './App.css';

class SingleQuote extends Component {

  render() {
    return(
      <div className="container" id={this.props.index}>
        <div>{this.props.quote}</div>
        <form action="submit">
          <div id="dictators">
              <label for="DonnyT">
                <input type="radio" name="speaker" id="DonnyT" value="trump" onChange={(event) => this.checkAnswer(event)} /><img src="../trump.png" />
              </label>
              <label for="AdyH">
                <input type="radio" name="speaker" id="AdyH" value="hitler" onChange={(event) => this.checkAnswer(event)} /><img src="../hitler.png" />
              </label>
          </div>
        </form>
      </div>
    );
  }

  checkAnswer(e) {
    e.preventDefault();
    let actualName = this.props.name;
    let guessedName = e.target.value;
    if (guessedName === actualName) {
      this.props.tickScore();
    }
  }


}

export default SingleQuote;
