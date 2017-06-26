import React from 'react';
import Day from './Day';
import MonthClick from './MonthClick';
import '../styles/Month.scss';

class Month extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //Get amount of days in the current month
    var t = new Date(this.props.year,this.props.month,0);

    //number of days in the current month
    //this is a mess! remember to clean it!!
    var numDays = t.getDate();
    var p = new Date(this.props.year,this.props.month-1, 1);
    var dateArray = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
    var preDays = p.getDay() - 1; //number of days to preceed the first day
    var preDayList = [];

    for (var i = 0; i < preDays; i++){
      p.setDate(p.getDate() - 1);
      preDayList.unshift(<Day notmonth={true} date={p.getDate()} />);

    }

    return (
      <div className="Month">
        <div className="topbar">
          <MonthClick pos={"left"} handleClick={this.props.handleClick.left}/>
          <h3>{t.toDateString().slice(4,7).toUpperCase()} {t.toDateString().slice(11)}</h3>
          <MonthClick pos={"right"} handleClick={this.props.handleClick.right}/>
        </div>
        <ul className="day-name">
          <li>mon</li>
          <li>tue</li>
          <li>wed</li>
          <li>thu</li>
          <li>fri</li>
          <li>sat</li>
          <li>sun</li>
        </ul>
        {preDayList}
        {Array(numDays).fill(1).map((el,i) =>
          <Day key={i+1} date={i+1} clickHandler={this.props.handleDayClick} sel={ i === this.props.day-1 } rej={typeof this.props.ticked != 'boolean' && this.props.ticked[i+1] ? true : false }/>
        )}
      </div>
    );
  }
}

export default Month;
