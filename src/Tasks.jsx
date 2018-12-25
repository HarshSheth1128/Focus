import React, { Component } from 'react';
import "./Tasks.css"
import TaskObj from './TaskObj.jsx';


class Tasks extends Component {
    constructor(){
        super();
        this.state = {tasks: [<TaskObj subj={"test"}/>], currTaskTime:{hour:0, min:0, seconds:0}}
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
          );
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick = (e) =>{
        var totalSeconds = this.state.seconds + this.state.min * 60 + this.state.hour * 3600;
        totalSeconds++;
        this.setState({
            currTaskTime : {
                hour: Math.trunc(totalSeconds % 3600),
                min : Math.trunc((totalSeconds%3600)/60),
                seconds: Math.trunc(totalSeconds%60)
            }
        });
        this.state.currTaskTime++;
    }

    render() {
      return (
          <div className="row">
            <div className="col-lg-12">
                <p id="taskTitle"><u>Tasks</u></p>
                {this.state.tasks}
            </div>
            <div id="timer">Time spent on current task: </div>
          </div>
      );
    }
  }
  
  export default Tasks;