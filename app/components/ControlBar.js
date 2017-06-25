import React from 'react';
import '../styles/ControlBar.scss'
import FacebookButton from './FacebookButton';

class ControlBar extends React.Component {
  render(){
    return (
      <div className="ControlBar">
        <FacebookButton />
        <h3>FAIL</h3>
        <form>

        <section title=".roundedOne">
          <div className="roundedOne">
            <input type="checkbox" value="reject" id="roundedOne" name="check" />
            <label htmlFor="roundedOne"></label>
          </div>
        </section>

        <br />
        <label>
          you did:
          <input type="text" name="name" />
        </label>

        </form>
      </div>
    );
  }
}

export default ControlBar;
