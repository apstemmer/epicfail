import React from 'react';
import '../styles/ControlBar.scss'
import FacebookButton from './FacebookButton';

class ControlBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      checked: false,
      text: null
    };

    this.handleCheck = this.handleCheck.bind(this);
    this.handleWrite = this.handleWrite.bind(this);
  }

  handleCheck(e){
      this.setState({checked:e.target.checked});

  }

  handleWrite(e){
    this.setState({text:e.target.value})
  }

  render(){
    let year = this.props.date.year;
    let month = this.props.date.month;
    let day = this.props.date.day;
    return (
      <div className="ControlBar">
        <FacebookButton />
        <p>{day} / {month} / {year}</p>

        <form>

        <section title=".roundedOne">
          <div className="roundedOne">
            <input type="checkbox" value="reject" id="roundedOne" name="check" onChange={this.handleCheck} unchecked/>
            <label htmlFor="roundedOne"></label>
          </div>
        </section>

        <br />
        <label>
          you did:
          <input type="text" name="name" onChange={this.handleWrite} />
        </label>

        </form>
      </div>
    );
  }
}

export default ControlBar;
