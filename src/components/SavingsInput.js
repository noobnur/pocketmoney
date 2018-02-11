import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './SavingsInput.css';
import { FinalSavings, CoupleSavings, EmergencyFund } from './FinalSavingsAmt';


class SavingsInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personalGoalPercentage: 50,
      coupleGoalPercentage: 40,
      emergencyFundPercentage: 10,
    }

    // this.handleSubmit = this.handleSubmit.bind(this);
    this.personalGoalPercentageChange = this.personalGoalPercentageChange.bind(this);
    this.coupleGoalPercentageChange = this.coupleGoalPercentageChange.bind(this);
    this.emergencyFundPercentageChange = this.emergencyFundPercentageChange.bind(this);
  }

personalGoalPercentageChange(event) {
  this.setState({
    personalGoalPercentage: event.target.value,
})
}

coupleGoalPercentageChange(event) {
  this.setState({
    coupleGoalPercentage: event.target.value,
})
}

emergencyFundPercentageChange(event) {
  this.setState({
    emergencyFundPercentage: event.target.value,
})
}

// handleSubmit(e) {
//   e.preventDefault();
//   const itemsRef = firebase.database().ref('items');
//   const item = {
//     title: this.state.currentItem,
//     user: this.state.username
//   }
//   itemsRef.push(item);
//   this.setState({
//     currentItem: '',
//     username: ''
//   });
// }



  render () {
    return (
      <div>
      <h4>My savings {this.props.savingsFromParent}</h4>

      <form onSubmit={this.handleSubmit}>
       <div>
        <input type="number" name="personalGoal-num" min="0" max="100" placeholder="50" value={this.state.personalGoalPercentage} onChange={this.personalGoalPercentageChange}/>
      </div>

        <div><label><h5> % Personal Goals: $
          <FinalSavings
            savingsFromParent = {this.props.savingsFromParent}
            personalGoalPercentage = {this.state.personalGoalPercentage}/>
            </h5></label></div>

      <div>
        <input type="number" name="personalGoal-num" min="0" max="100" placeholder="50" value={this.state.coupleGoalPercentage} onChange={this.coupleGoalPercentageChange}/>
        <label><h5> % Couple Goals: $ <CoupleSavings
        savingsFromParent = {this.props.savingsFromParent}
        coupleGoalPercentage = {this.state.coupleGoalPercentage}/> </h5></label>
        </div>

       <div>
        <input type="number" name="personalGoal-num" min="0" max="100" placeholder="50" value={this.state.emergencyFundPercentage} onChange={this.emergencyFundPercentageChange}/>
        <label><h5> % Emergency Fund: $ <EmergencyFund
        savingsFromParent = {this.props.savingsFromParent}
        emergencyFundPercentage = {this.state.emergencyFundPercentage}/> 
        </h5></label>
        </div>



        <Button bsStyle="success">Save the amounts</Button>


      </form>


      </div>
    )
  }
}

export default SavingsInput;
