import React from 'react';
import '../styles/MonthClick.scss';

class MonthClick extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    var direct = "<";

    return (
      <div className={this.props.pos + " navbutton"} onClick={this.props.handleClick}>
        {this.props.pos === "left" ? "<" : ">"}
      </div>
    );
  }
}

export default MonthClick;
