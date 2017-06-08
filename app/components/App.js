import React from 'react';
import ReactDOM from 'react-dom';
import ControlBar from './ControlBar';
import Day from './Day';
import Month from './Month';
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
        }
      }
      this.decrementMonth = this.decrementMonth.bind(this);
      this.incrementMonth = this.incrementMonth.bind(this);
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
      var mon = this.state.display.month;
      var year = this.state.display.year;
      if(mon >= 12){
        mon = 1;
        year++;
      }else{
        mon++;
      }
      var disp = {
        year:year,
        month:mon,
        day:this.state.display.day
      }

      this.setState({display:disp});
    }


    render(){

      var month = String(this.state.display.month);
      var year = String(this.state.display.year);
      var mChange = {left:this.decrementMonth,right:this.incrementMonth};
      var tickObj = this.state.days[year][month];
      //undefined not reserved hence chekc with typeof
      if(typeof(tickObj) == 'undefined'){
        tickObj = {};
      }
      // if(this.state.days[year] != null && this.state.days[year][month] != null){
      //   tickObj = this.state.days[year][month];
      // }
      return(
        <div>
          <ControlBar />
          <Month year={year} month={month} ticked={tickObj} handleClick={mChange} />
        </div>
      );
    }
}

export default App;
