import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  updateInput(val){
    this.setState({input: val})
  }


  render() {
    return (
      <div className="App">
          <input onChange={(e) => this.updateInput(e.target.value)}></input>
          <p>{this.state.input}</p>
      </div>
    );
  }
}

export default App;
