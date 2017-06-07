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
    var dispClass = 'Day-decorator';
    if(this.props.sel){
      dispClass = 'Day-current';
    }
    return (
    <div className={"Day " + this.props.date} onClick={this.props.clickHandler}>
      <div className={dispClass} >
        <h3>{this.props.date}</h3>
      </div>
    </div>);
  }
}

export default Day;
