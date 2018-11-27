import React, { Component } from 'react';
import Hour from './components/Hour.js';
import Descriptions from './components/Descriptions.js';
import './styles/style.css';
class App extends Component {
  render() {
    return (<div className =" container"> 
      <Hour/>
      <Descriptions/>
    </div>
    );
  }
}

export default App;
