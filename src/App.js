import React, { Component } from 'react';
import './App.css';
import SalaryInput from './components/SalaryInput';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Pocket Money App </h1>
      <h4>Save before you spend! <br/>
      <strong>Pocket Money App</strong> will help you calculate and track your savings and expenditure. <br/>
      Never miss out on your savings goal again! </h4>
        <div className="BudgetApp">
          <SalaryInput />
        </div>
      </div>
    );
  }
}

export default App;
