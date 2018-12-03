import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Number from './Component/Number.js';
import Line from './Component/Line.js';

class App extends Component {
  state = {number: 1, numberArray: new Array(1).fill(0)}
  updateNumber = ()=> {
    this.setState({
      number: this.props.onClickApp(this.state.number), 
      numberArray: new Array(this.state.number).fill(0)
    })
    //alert('now you know how to handle onclick event')
    
  }
    render() {
    return (
      <div>       
          <button onClick={this.updateNumber}>Hello World!</button>

          <Number/>{this.state.number}   
          {this.state.numberArray.map((v, i) =>(<Line key={i}/>))}
      </div>
    );
  }
}
  

export default App;
