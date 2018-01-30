import React, { Component } from 'react';
import './App.css';
import SalaryInput from './components/SalaryInput';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Hello World</h1>
        <div className="BudgetApp">
          <h3>Test</h3>
          <SalaryInput />
        </div>
      </div>
    );
  }
}

export default App;
