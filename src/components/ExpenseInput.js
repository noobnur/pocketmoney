import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './ExpenseInput.css';
// import * as firebase from 'firebase';
import { TotalBills} from './FinalExpense';


class ExpenseInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ExpenseBudget: 0,
      TuitionFeeLoan: 250,
      GALoan: 100,
      PhoneBill: 50,
      TFLpaid: false,
      GApaid: false,
      Phonepaid: false
    }

    this.updateTFL = this.updateTFL.bind(this);
    this.updateGA = this.updateGA.bind(this);
    this.updatePhone = this.updatePhone.bind(this);

    this.payBillTFL = this.payBillTFL.bind(this);
    this.payBillGA = this.payBillGA.bind(this);
    this.payBillPhone = this.payBillPhone.bind(this);

    this.handleReset = this.handleReset.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    this.setState({
      ExpenseBudget: nextProps.expenseFromParent,
    })
  }

  updateTFL(event) {
    this.setState({
      TuitionFeeLoan: event.target.value,
    })
  }
  updateGA(event) {
    this.setState({
      GALoan: event.target.value,
    })
  }
  updatePhone(event) {
    this.setState({
      PhoneBill: event.target.value,
    })
  }
  payBillTFL() {
    this.setState({
      ExpenseBudget: this.state.ExpenseBudget - this.state.TuitionFeeLoan,
      TFLpaid: true,
    })
  }
  payBillGA() {
    this.setState({
      ExpenseBudget: this.state.ExpenseBudget - this.state.GALoan,
      GApaid: true,
    })
  }
  payBillPhone() {
    this.setState({
      ExpenseBudget: this.state.ExpenseBudget - this.state.PhoneBill,
      Phonepaid: true,
    })
  }

  handleReset() {
    this.setState({
      TFLpaid: false,
      GApaid: false,
      Phonepaid: false,
      ExpenseBudget: this.props.expenseFromParent,
    })
  }

  render () {
    let TFLbutton = null;
    const TFLpaid =this.state.TFLpaid;

    let GAbutton = null;
    const GApaid = this.state.GApaid;

    let Phonebutton = null;
    const Phonepaid = this.state.Phonepaid;

    if (!TFLpaid) {
      TFLbutton = <Button onClick={this.payBillTFL}>pay</Button>
    }

    if (!GApaid) {
      GAbutton = <Button onClick={this.payBillGA}>pay</Button>
    }

    if (!Phonepaid) {
      Phonebutton = <Button onClick={this.payBillPhone}>pay</Button>
    }

    return (
      <div>
        <h4>Total Budget {this.props.expenseFromParent}</h4>
        <h5> TFL $ <input type="number" min="0" max="1000" placeholder="50" value={this.state.TuitionFeeLoan} onChange={this.updateTFL}/>
        {TFLbutton}
        </h5>

        <h5> GA Loan $<input type="number" min="0" max="1000" placeholder="50" value={this.state.GALoan} onChange={this.updateGA}/>
        {GAbutton}
        </h5>


        <h5> Phone Bill $<input type="number" min="0" max="1000" placeholder="50" value={this.state.PhoneBill} onChange={this.updatePhone}/>
        {Phonebutton}
        </h5>


        <h4> Total Bills:
        <TotalBills
        TFLbillamount = {this.state.TuitionFeeLoan}
        GAbillamount = {this.state.GALoan}
        PhoneBillamount = {this.state.PhoneBill}
        />
         </h4>

        <h4>After Bills Expense Budget: {this.state.ExpenseBudget}</h4>

      <Button bsStyle="danger" onClick={this.handleReset}>Reset Expense Budget</Button>



      </div>
    )
  }
}

export default ExpenseInput;
