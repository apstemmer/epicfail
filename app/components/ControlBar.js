import React from 'react';
import '../styles/ControlBar.scss'

class ControlBar extends React.Component {
  render(){
    return (
      <div className="ControlBar">
        <div className="login-button">
          logins
        </div>
        <h3>FAIL?</h3>
        <form>
        <input type="checkbox" value="Reject" />
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
