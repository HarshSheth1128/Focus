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

    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        //ctx.fillRect(0,0, 100, 100);
        ctx.font = "120px Impact";
        ctx.fillRect(30, 30, 415, 150);
        ctx.clearRect(30, 30, 415, 150);
        ctx.fillText(this.timeToString(), 110, 140);
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
           <canvas ref="canvas" width={500} height={150}/>
           <div id="buttons">
                <button type="button" class="btn btn-success" id="StartButton" onClick={this.startTime}>Start</button>
                <button type="button" class="btn btn-primary" id="TwentyFiveMinButton" onClick={this.set25}>25 Minute</button>
                <button type="button" class="btn btn-primary" id="FiveMinButton" onClick={this.set5}>5 Minute</button>
                <button type="button" class="btn btn-primary" id="FifteenMinButton" onClick={this.set15}>15 Minute</button>
                <button type="button" class="btn btn-danger" id="RestartButton" onClick={this.restart}>Restart</button>
            </div>
          </div>
      );
    }
  }
  
  export default Timer;