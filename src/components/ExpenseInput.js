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
      GALoan:100,
      PhoneBill:100,
      totalBill: 450,
      FamilyExpenses:0,
      FoodExpenses:0,
      TransportExpenses:0,
      OtherExpenses:0
    }

    this.payBillTFL = this.payBillTFL.bind(this);
    this.payBillGA = this.payBillGA.bind(this);
    this.payBillPhone = this.payBillPhone.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    this.setState({
      ExpenseBudget: nextProps.expenseFromParent,
      totalBill: this.state.TuitionFeeLoan + this.state.GALoan + this.state.PhoneBill
    })
  }

  payBillTFL() {
    this.setState({
      ExpenseBudget: this.state.ExpenseBudget - this.state.TuitionFeeLoan,
  })
}
payBillGA() {
  this.setState({
    ExpenseBudget: this.state.ExpenseBudget - this.state.GALoan,
})
}
payBillPhone() {
  this.setState({
    ExpenseBudget: this.state.ExpenseBudget - this.state.PhoneBill,
})
}

  render () {
    return (
      <div>
        <h4>Total Budget {this.props.expenseFromParent}</h4>
        <h5> TFL ${this.state.TuitionFeeLoan} <Button>edit</Button> <Button onClick={this.payBillTFL}>pay</Button></h5>
        <h5> GA Loan ${this.state.GALoan} <Button>edit</Button> <Button onClick={this.payBillGA}>pay</Button></h5>
        <h5> Phone Bill ${this.state.PhoneBill} <Button>edit</Button> <Button onClick={this.payBillPhone}>pay</Button></h5>
        <h4> Total Bills: {this.state.totalBill} </h4>
        <h4>After Bills Expense Budget {this.state.ExpenseBudget}</h4>

      <Button bsStyle="danger">Confirm Expense Budget</Button>



      </div>
    )
  }
}

export default ExpenseInput;
