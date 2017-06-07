import React from 'react';
import Day from './Day';
import '../styles/Month.scss';

class Month extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected:null
    }
  }

  handleClick (e){
    var tDate = Number(e.currentTarget.className.slice(4)) - 1;
    this.setState({selected:tDate});
    console.log('month');
  }

  render() {
    //Get amount of days in the current month
    var t = new Date(this.props.year,this.props.month,0);
    //for every day in the month....
    var numDays = t.getDate();
    //hold onto state for every day in the month

    console.log(this.state);
    return (
      <div className="Month">

        <h3>{t.toDateString().slice(4,7).toUpperCase()} {t.toDateString().slice(11)}</h3>

        <ul className="day-name">
          <li>mon</li>
          <li>tue</li>
          <li>wed</li>
          <li>thu</li>
          <li>fri</li>
          <li>sat</li>
          <li>sun</li>
        </ul>
        {Array(numDays).fill(1).map((el,i) =>

          <Day key={i+1} date={i+1} clickHandler={this.handleClick.bind(this)} sel={ i === this.state.selected }/>
        )}
      </div>
    );
  }
}

// {Array(numDays).fill(1).map((el, i) => {
//   <Day />
// })}

export default Month;
