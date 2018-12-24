import React, { Component } from 'react';
import "./Notes.css"

class Notes extends Component {
    render() {
      return (
          <div id="NotesComponent">
            <div id="notes" contentEditable="true">
                <p id="boilerplateHeader"><u>Enter any notes here</u> </p>
                <div id="boilerplateBody">
                    <p>- This is a section for you to enter some notes while you study</p>
                    <p>- Just edit this section by clicking on anything</p>
                </div>
            </div>
          </div>
      );
    }
  }
  
  export default Notes;