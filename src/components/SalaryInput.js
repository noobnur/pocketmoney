import React, { Component } from 'react';
import './SalaryInput.css';
import { Grid, Row, Col } from 'react-bootstrap';
import SavingsInput from './SavingsInput';



class SalaryInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 3000,
      savingsValue: 0,
      expensesValue: 0,
      wealthValue: 0,
      savingsPercentage: 45,
      expensesPercentage: 50,
      wealthPercentage:5
    }

    this.handleChange = this.handleChange.bind(this);
    this.savingsPercentageChange = this.savingsPercentageChange.bind(this);
    this.expensesPercentageChange = this.expensesPercentageChange.bind(this);
    this.wealthPercentageChange = this.wealthPercentageChange.bind(this);
  }

  handleChange(event) {
      this.setState({
        salaryInput: event.target.value,
        savingsValue: (event.target.value) * (this.state.savingsPercentage/100),
        expensesValue: (event.target.value) * (this.state.expensesPercentage/100),
        wealthValue: (event.target.value) * (this.state.wealthPercentage/100)
      });
    }

    savingsPercentageChange(event) {
      this.setState({
        savingsPercentage: event.target.value,
        savingsValue: this.state.salaryInput * (event.target.value/100)
      })
    }

    expensesPercentageChange(event) {
      this.setState({
        expensesPercentage: event.target.value,
        expensesValue: this.state.salaryInput * (event.target.value/100)
      })
    }

    wealthPercentageChange(event) {
      this.setState({
        wealthPercentage: event.target.value,
        wealthValue: this.state.salaryInput * (event.target.value/100)
      })
    }


  render () {
    return (
         <div className="big-budget">
           <div className="full-salary">
            <form>
              <label><h4>Salary: $ </h4></label>
              <input type="text" name="name" placeholder="eg. 3000" value={this.state.salaryInput} onChange={this.handleChange} />
            </form>
           </div>
           <div className="all-budgets">

           <Grid>

             <Row className="budget-percentage">
              <Col xs={7} md={6}>
               <form className="budget-form">
                 <input type="number" name="savings-num" min="0" max="100" placeholder="45" value={this.state.savingsPercentage} onChange={this.savingsPercentageChange}/>
                 <label><h5> % : Savings </h5></label>
               </form>
               </Col>
               <Col xs={5} md={3}>
               <div className="budget-value">
                  <h5>$ {this.state.savingsValue}</h5>
                  </div>
               </Col>
             </Row>

              <Row className="budget-percentage">
               <Col xs={7} md={6}>
                <form className="budget-form">
                  <input type="number" name="expenses-num" min="0" max="100" placeholder="50" value={this.state.expensesPercentage} onChange={this.expensesPercentageChange}/>
                  <label><h5> % : Expenses </h5></label>
                </form>
                </Col>
                <Col xs={5} md={3}>
                  <div className="budget-value">
                    <h5>$ {this.state.expensesValue}</h5>
                  </div>
                 </Col>
             </Row>


             <Row className="budget-percentage">
              <Col xs={7} md={6}>
               <form className="budget-form">
                 <input type="number" name="wealth-num" min="0" max="100" placeholder="5" value={this.state.wealthPercentage} onChange={this.wealthPercentageChange}  />
                 <label><h5> % : Wealth/Experience </h5></label>
               </form>
               </Col>
               <Col xs={5} md={3}>
                <div className="budget-value">
                  <h5>$ {this.state.wealthValue}</h5>
               </div>
               </Col>
             </Row>

             </Grid>

             <div className="MiniBudget">
               <SavingsInput savingsFromParent = {this.state.savingsValue}/>
             </div>

           </div>
          </div>
    )
  }
};


export default SalaryInput;
