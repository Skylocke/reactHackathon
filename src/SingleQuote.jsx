import React, { Component } from 'react';
import './App.css';

class SingleQuote extends Component {



  render() {
    return(
      <div className="bubble container" id={this.props.index}>
        <div id="quoteText">{this.props.quote}</div>
        <div id="dictators">
          <label for="DonnyT">
            <input type="radio" name={"speaker" + this.props.index} id="DonnyT" value={this.props.name === 'trump'} /><img id="trupmPic" src="../trump.png" />
          </label>
          <label for="AdyH">
            <input type="radio" name={"speaker" + this.props.index}  id="AdyH" value={this.props.name === 'hitler'} /><img id="hitlerPic" src="../hitler.png" />
          </label>
        </div>

      </div>
    );
  }
}
export default SingleQuote;
