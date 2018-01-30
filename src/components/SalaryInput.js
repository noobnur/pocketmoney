import React, { Component } from 'react';
import {render} from 'react-dom';
import './SalaryInput.css';


class SalaryInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 3000,
      savingsValue: 0,
      expensesValue: 0,
      wealthValue: 0
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
      this.setState({
        value: event.target.value,
        savingsValue: (event.target.value) * 0.45,
        expensesValue: (event.target.value) * 0.5,
        wealthValue: (event.target.value) * 0.05
      });

    }


  render () {
    return (
         <div className="big-budget">
           <div className="full-salary">
            <form>
              <label>SalaryInput: $ </label>
              <input type="text" name="name" placeholder="eg. 3000" value={this.state.salaryInput} onChange={this.handleChange} />
            </form>
           </div>
           <div className="all-budgets">
             <div className="savings-percentage">
               {/* <form>
                 <input type="number" name="savings-num" min="0" max="100" placeholder="45" />
                 <label> % : Savings </label>
               </form>
               */}
               <div className="savings-num">45% : Savings</div>
               <div className="savings-budget">{this.state.savingsValue}</div>
             </div>
              <div className="expenses-percentage">
               {/*<form>
                 <input type="number" name="expenses-num" min="0" max="100" placeholder="50" />
                 <label> % : Expenses </label>
               </form>
               */}
               <div className="savings-num">50% : Expenses</div>
               <div className="expenses-budget">{this.state.expensesValue}</div>
             </div>
             <div className="wealth-percentage">
               {/*<form>
                 <input type="number" name="wealth-num" min="0" max="100" placeholder="5"  />
                 <label> % : Wealth/Experience </label>
               </form>
               */}
               <div className="savings-num">5% : Experience/Wealth</div>
               <div className="wealth-budget">{this.state.wealthValue}</div>
             </div>



           </div>
          </div>
    )
  }
};


export default SalaryInput;
