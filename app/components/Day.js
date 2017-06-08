import React from 'react';
import '../styles/Day.scss';

class Day extends React.Component {
  constructor(props){
    super(props);
    // this.state = {
    //   done: false,
    //   dispClass: "Day-decorator",
    //   messages:[],
    //   score: 0
    // };
  }

  render() {
    var dispClass = null;
    if(this.props.sel){
      dispClass = 'Day-current';
    }else if(this.props.notmonth){
      dispClass = 'Day-notmonth';
    }
    return (
    <div className={"Day " + this.props.date + " " + dispClass} onClick={this.props.clickHandler}>
      <div className="Day-decorator" >
        <h3>{this.props.date}</h3>
      </div>
    </div>);
  }
}

export default Day;
