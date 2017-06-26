import React from 'react';
import ReactDOM from 'react-dom';
import ControlBar from './ControlBar';
import Day from './Day';
import Month from './Month';
import FacebookButton from './FacebookButton';
import '../styles/App.scss';

class App extends React.Component {
    constructor(props){
      super(props);
      var year = 2017;
      var month = 6;
      var day = 10;
      this.state = {
        days:{
          2017:{
              6:{
                15:{
                done: true,
                msg: "I did it!"
              }
            }
          }
        },
        display:{
          year:year,
          month:month,
          day:day
        },
        session:{
          login:false
        }
      }
      this.decrementMonth = this.decrementMonth.bind(this);
      this.incrementMonth = this.incrementMonth.bind(this);
      this.handleDayChange = this.handleDayChange.bind(this);
  }

    decrementMonth() {

      var mon = this.state.display.month;
      var year = this.state.display.year;
      if(mon <= 1){
        mon = 12;
        year--;
      }else{
        mon--;
      }
      var disp = {
        year:year,
        month:mon,
        day:this.state.display.day
      }

      this.setState({display:disp});
    }

    incrementMonth(){
      console.log('gothere');
      var mon = this.state.display.month;
      var year = this.state.display.year;
      console.log(mon, year);
      if(mon >= 12){
        mon = 0;
        year++;
      }else{
        mon++;
      }
      var disp = {
        year: year,
        month: mon,
        day:this.state.display.day
      }

      this.setState({display:disp});
    }

    handleDayChange(e){
      var tDate = Number(e.currentTarget.className.slice(4,6));
      var newState = this.state;
      newState.display.day = tDate;
      this.setState(newState);
      console.log(this.state);
    }

    render(){

      var month = String(this.state.display.month);
      var year = String(this.state.display.year);
      var mChange = {left:this.decrementMonth,right:this.incrementMonth};

      //get the inputs for the current year
      var tickObj = this.state.days[year];

      //undefined not reserved hence check with typeof

      if(typeof tickObj == 'undefined'){
        tickObj = 'yolo';
      }else{
        var tickObj = tickObj[month];
      }

      if(typeof tickObj == 'undefined'){
        tickObj = false;
      }
      //var monthObj = tickObj[month];
      //tickObj is an object with all the dates that have been done.
      return(
        <div>
          <ControlBar date={this.state.display}/>
          <Month year={year} month={month} day={this.state.display.day} ticked={tickObj} handleClick={mChange} handleDayClick={this.handleDayChange}/>
        </div>
      );
    }
}

export default App;
