import React, { Component } from 'react';
import Notes from "./Notes"
import Timer from "./Timer"
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <div className="col-md-6 col-s-6 col-lg-6">
            <div id="tasks">
              <p>This section is reserved for tasks</p>
            </div>
          </div>
          <div className="col-md-6 col-s-6 col-lg-6">
            <div id="pomodoro">
              <p>This section is reserved for a pomodoro</p>
              <Timer></Timer>
            </div>
          </div>
          <div className="col-md-12 col-s-12 col-lg-12" id="notes">
            <div id="notes">
              <p>This spot is reserved for a notes section</p>
              <Notes></Notes>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
