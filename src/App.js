import React, { Component } from 'react';
import Notes from "./Notes"
import Timer from "./Timer"
import './App.css';
import Tasks from './Tasks';

class App extends Component {
  render() {
    return (
        <div className="App">
          <div className="col-md-6 col-s-6 col-lg-6">
            <div id="tasks">
              <Tasks></Tasks>
            </div>
          </div>
          <div className="col-md-6 col-s-6 col-lg-6">
            <div id="pomodoro">
              <Timer></Timer>
            </div>
          </div>
          <div className="col-md-12 col-s-12 col-lg-12" id="notes">
            <div id="notes">
              <Notes></Notes>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
