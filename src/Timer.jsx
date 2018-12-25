import React, { Component } from 'react';
import "./Timer.css";

class Timer extends Component {
    constructor(){
        super();
        this.state = {minutes: 25, seconds: 0, currTime:"25min", started: false}
    }

    componentDidMount(){
        this.updateCanvas();
        this.timerID = setInterval(
            () => this.tick(),
            1000
          );
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    updateCanvas = (e) => {
        const ctx = this.refs.canvas.getContext('2d');
        //ctx.fillRect(0,0, 100, 100);
        ctx.font = "120px Impact";
        ctx.fillRect(30, 30, 415, 200);
        ctx.clearRect(30, 30, 415, 200);
        ctx.fillText(this.timeToString(), 110, 160);
        console.log(this.timeToString());
    }


    timeToString = (e) =>{
        var secondString;
        var minuteString;
        if(this.state.minutes < 10){
            minuteString = "0" + this.state.minutes;
        } else {
            minuteString = this.state.minutes;
        }
        if(this.state.seconds < 10){
            secondString = "0" + this.state.seconds;
        } else {
            secondString = this.state.seconds;
        }
        return String(minuteString + ":" + secondString);
    }

    tick(){
        if(this.state.started){
            this.subOne();
            this.updateCanvas();
        }
    }

    subOne = (e) => {
        var totalSeconds = this.state.minutes*60 + this.state.seconds;
        totalSeconds -= 1;
        //console.log(totalSeconds)
        //console.log(Math.trunc(totalSeconds/60));
        //console.log(totalSeconds%60)
        this.setState({
            minutes: Math.trunc(totalSeconds / 60),
            seconds: totalSeconds % 60
        });
    }

    set25 = (e) =>{
        this.setState({
            minutes: 25,
            seconds: 0,
            currTime: "25min",
            started:false
        });
        this.updateCanvas();
    }

    set5 = (e) =>{
        this.setState({
            minutes: 5,
            seconds: 0,
            currTime: "5min",
            started:false
        });
        this.updateCanvas();
    }

    set15 = (e) =>{
        this.setState({
            minutes: 15,
            seconds: 0,
            currTime: "15min",
            started:false
        });
        this.updateCanvas();
    }

    restart = (e) =>{
        if(this.state.currTime === "25min"){
            this.setState({
                minutes: 25,
            });
        }else if(this.state.currTime === "15min"){
            this.setState({
                minutes: 15,
            })
        }else if(this.state.currTime === "5min"){
            this.setState({
                minutes: 5,
            })
        }
        this.setState({started:false, seconds:0})
        this.updateCanvas();
    }

    startTime = (e) =>{
        this.setState({started:true})
    }


    render() {
      return (
          <div >
            <div id="description">
                <p> The <b><span id="pomodoroText"> Pomodoro Timer </span></b> is a tool to help you focus on your work </p>
                <p> Pomodoro: 25 min | <span id="breakText">Short Break</span>: 5 min | <span id="breakText">Long Break</span>: 15 min</p>
                <p>After each <b>Pomodoro</b> take a break | After 3 <b>Short</b> breaks take 1 <b>Long</b> break</p>
            </div>
           <canvas ref="canvas" width={500} height={220}/>
           <div id="buttons">
                <button type="button" className="btn btn-success" id="StartButton" onClick={this.startTime}>Start</button>
                <button type="button" className="btn btn-dark" id="TwentyFiveMinButton" onClick={this.set25}>25 Minutes</button>
                <button type="button" className="btn btn-warning" id="FiveMinButton" onClick={this.set5}>5 Minutes</button>
                <button type="button" className="btn btn-warning" id="FifteenMinButton" onClick={this.set15}>15 Minutes</button>
                <button type="button" className="btn btn-danger" id="RestartButton" onClick={this.restart}>Restart</button>
            </div>
          </div>
      );
    }
  }
  
  export default Timer;