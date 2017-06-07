import React from 'react';
import ReactDOM from 'react-dom';
import ControlBar from './ControlBar';
import Day from './Day';
import Month from './Month';
import '../styles/App.scss';

class App extends React.Component {
    render(){
      return(
        <div>

        <ControlBar />
        <Month year="2017" month="6"/>
        </div>
      );
    }
}

export default App;
