import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';

class SingleQuote extends Component {



  render() {
    return(
      <div id="outer">
      <div className="bubble container" id={this.props.index}>
        <div id="quoteText">{this.props.quote}</div>
        <div id="dictators">
          <label for="DonnyT">
            <input type="radio" name={"speaker" + this.props.index} id="DonnyT" value={this.props.name === 'trump'} onClick={() => this.nextDivScroll()} /><img id="trupmPic" src="../trump.png" />
          </label>
          <label for="AdyH">
            <input type="radio" name={"speaker" + this.props.index} id="AdyH" value={this.props.name === 'hitler'} onClick={() => this.nextDivScroll()} /><img id="hitlerPic" src="../hitler.png" />
          </label>
        </div>
      </div>
      </div>

    );
  }

  nextDivScroll() {
    let nextDivId = "#" + (this.props.index + 1);
    let nextDiv = $(nextDivId)
    $('html, body').animate({
          scrollTop: nextDiv.offset().top
        }, 1000);
  }

}
export default SingleQuote;
