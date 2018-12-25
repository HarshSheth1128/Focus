import React, { Component } from 'react';
import "./Tasks.css"
import TaskObj from './TaskObj.jsx';



class Tasks extends Component {
    constructor(){
        super();
        this.state = {tasks: [<TaskObj key={1} subj={"Demo task!"} identification={1} removeFn={this.removeTask}/>], currTaskTime:{hour:0, min:0, seconds:0}}
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
        var totalSeconds = this.state.currTaskTime.seconds + this.state.currTaskTime.min * 60 + this.state.currTaskTime.hour * 3600;
        totalSeconds++;
        this.setState({
            currTaskTime : {
                hour: Math.trunc(totalSeconds / 3600),
                min : Math.trunc((totalSeconds%3600)/60),
                seconds: totalSeconds%60
            }
        });
    }
    
    getTime(){
        var hourString = (this.state.currTaskTime.hour < 10) ? "0" + this.state.currTaskTime.hour: this.state.currTaskTime.hour;
        var minString = (this.state.currTaskTime.min < 10) ? "0" + this.state.currTaskTime.min: this.state.currTaskTime.min; 
        var secondString = (this.state.currTaskTime.seconds < 10) ? "0" + this.state.currTaskTime.seconds : this.state.currTaskTime.seconds;
        return(hourString + ":" + minString + ":" + secondString);
    }

    removeTask = (id,e)=>{
        let tmpArray;
        console.log(id);
        for(var i = 0; i < this.state.tasks.length; i++){
            if(this.state.tasks[i].props.identification === id){
                console.log(i);
                tmpArray = [...this.state.tasks]
                tmpArray.splice(i, 1);
            }
        }
        this.setState({
            tasks:tmpArray,
            currTaskTime:{hour:0, min:0, seconds:0}
        })
    }

    handleSubmit = (e)=>{
        var id = Math.random();
        let tmpTasks = [...this.state.tasks,<TaskObj key={id} identification={id} subj={this.state.value} removeFn={this.removeTask}/>];
        this.setState({
            tasks: tmpTasks,
            value: ''
        });
        console.log(this.state.tasks);
        e.preventDefault();
    }

    handleChange = (e) =>{
        this.setState({value: e.target.value});
    }

    moveTaskUp(index){}

    render() {
      return (
          <div className="row">
            <div className="col-lg-12">
                <p id="taskTitle"><u>Tasks</u></p>
                {this.state.tasks}
                <div id="buttons">{this.state.buttons}</div>
            </div>
            <div className="col-lg-4">
            <div className="form-group" id="taskForm">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} placeholder="New task here"/>
                </form>
            </div>
            </div>
            <div id="timer">Time spent on current task: {this.getTime()} </div>
          </div>
      );
    }
  }
  
  export default Tasks;