import React from 'react';
import '../styles/MonthClick.scss';

class MonthClick extends React.Component{
  render(){
    var direct = "<";

    return (
      <div className={this.props.pos + " navbutton"}>
        {this.props.pos === "left" ? "<" : ">"}
      </div>
    );
  }
}

export default MonthClick;
