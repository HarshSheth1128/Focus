import React, { Component } from 'react';
import "./TaskObj.css";
import deleteButtonImage from './assets/error.png'
import moveButtonImage from './assets/arrow-up.png'

class TaskObj extends Component {
    constructor(props){
        super(props);
        this.state = {key:this.props.key, identification:this.props.identification, subj: this.props.subj}
    }

    removeTask = (e)=>{
        this.props.removeFn(this.props.identification);
    }

    moveTask = (e)=>{
        this.props.moveFn(this.props.identification);
    }

    render() {
      return (
          <div className="row">
            <div className="col-lg-10" id="taskBullet">
                <div><p>- {this.state.subj}</p></div>
            </div>
            <div className="col-lg-2" id="taskButtons">
                <button id="moveButton"><img src={moveButtonImage} onClick={this.moveTask} /></button>
                <button id="taskButton"><img src={deleteButtonImage} onClick={this.removeTask} /></button>
            </div>
          </div>
      );
    }
  }
  
  export default TaskObj;