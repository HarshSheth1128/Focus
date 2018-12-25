import React, { Component } from 'react';
import "./TaskObj.css";
import buttonImage from './assets/error.png'

class TaskObj extends Component {
    constructor(props){
        super(props);
        this.state = {key:this.props.key, identification:this.props.identification, subj: this.props.subj}
    }

    myfunction = (e)=>{
        this.props.removeFn(this.props.identification);
    }

    render() {
      return (
          <div className="row">
            <div className="col-lg-10" id="taskBullet">
                <div><p>- {this.state.subj}</p></div>
            </div>
            <div className="col-lg-2" id="taskButtons">
                <button id="taskButton"><img src={buttonImage} onClick={this.myfunction} /></button>
            </div>
          </div>
      );
    }
  }
  
  export default TaskObj;