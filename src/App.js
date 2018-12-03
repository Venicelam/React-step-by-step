import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Number from './Component/Number.js';

class App extends Component {
  state = {number: 1}
  updateNumber = ()=> {
    this.setState({number: this.props.onClickApp(this.state.number)})
    alert('now you know how to handle onclick event')
  }
    render() {
    return (
      <div>       
          <button onClick={this.updateNumber}>Hello World!</button>
          <Number/>   
      </div>
    );
  }
}
  

export default App;
