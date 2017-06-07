import React from 'react';
import '../styles/Day.scss';

class Day extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state{
  //     done: null
  //   }
  // }
  render() {
    return (
    <div className="Day">
      <h3>{this.props.date}</h3>
    </div>);
  }
}

export default Day;
