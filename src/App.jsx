import React, { Component } from 'react';
import './App.css';
import APIRequest from './APIRequest';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <APIRequest />
        </div>
      </div>
    );
  }
}

export default App;
