import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './ExpenseInput.css';
import * as firebase from 'firebase';


class ExpenseInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      TuitionFeeLoan:0,
      GeneralAssemblyLoan:0,
      PhoneBill:0,
      FamilyExpenses:0,
      FoodExpenses:0,
      TransportExpenses:0,
      OtherExpenses:0
    }

  }

  render () {
    return (
      <div>
        <h4>My Expense Budget {this.props.expenseFromParent}</h4>

      <Button bsStyle="danger">Confirm Expense Budget</Button>



      </div>
    )
  }
}

export default ExpenseInput;
