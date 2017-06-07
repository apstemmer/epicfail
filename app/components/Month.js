import React from 'react';
import Day from './Day';
import '../styles/Month.scss';

class Month extends React.Component {
  render() {
    //Get amount of days in the current month
    var t = new Date(this.props.year,this.props.month,0);
    //for every day in the month....
    console.log(t);
    var numDays = t.getDate();

    return (
      <div className="Month">
        <h3>{t.toDateString().slice(4,7)}</h3>
        {Array(numDays).fill(1).map((el,i) =>
          <Day key={i+1} date={i+1} />
        )}
      </div>
    );
  }
}

// {Array(numDays).fill(1).map((el, i) => {
//   <Day />
// })}

export default Month;
