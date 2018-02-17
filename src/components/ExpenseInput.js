import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './ExpenseInput.css';
import * as firebase from 'firebase';


class ExpenseInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ExpenseBudget: 0,
      TuitionFeeLoan:250,
      GeneralAssemblyLoan:0,
      PhoneBill:0,
      FamilyExpenses:0,
      FoodExpenses:0,
      TransportExpenses:0,
      OtherExpenses:0
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    this.setState({
      ExpenseBudget: nextProps.expenseFromParent - this.state.TuitionFeeLoan
    })
  }

  render () {
    return (
      <div>
        <h4>Total Budget {this.props.expenseFromParent}</h4>
        <h4>After Bills Expense Budget {this.state.ExpenseBudget}</h4>

      <Button bsStyle="danger">Confirm Expense Budget</Button>



      </div>
    )
  }
}

export default ExpenseInput;
