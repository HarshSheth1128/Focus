import React, { Component } from 'react';
import "./TaskObj.css";

class TaskObj extends Component {
    constructor(props){
        super(props);
        this.state = {id:this.props.identification, subj: this.props.subj}
    }

    render() {
      return (
          <div className="row">
            <div className="col-lg-10" id="taskBullet">
                <div><p>- {this.state.subj}</p></div>
            </div>
            <div className="col-lg-2" id="test1">
                <p>Hello</p>
                <p>Hi</p>
            </div>
          </div>
      );
    }
  }
  
  export default TaskObj;