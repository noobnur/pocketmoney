import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './SavingsInput.css';
import { PersonalSavings, CoupleSavings, EmergencyFund } from './FinalSavingsAmt';
import './AppFunctions.js'
import * as firebase from 'firebase';


class SavingsInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personalGoalPercentage: 50,
      coupleGoalPercentage: 40,
      emergencyFundPercentage: 10
    }

    this.anotherFn = this.anotherFn.bind(this);
    this.personalGoalPercentageChange = this.personalGoalPercentageChange.bind(this);
    this.coupleGoalPercentageChange = this.coupleGoalPercentageChange.bind(this);
    this.emergencyFundPercentageChange = this.emergencyFundPercentageChange.bind(this);
    // this.setNewState = this.setNewState.bind(this)
    // this.fn = this.fn.bind(this)

  }
//
// setNewState(e, goalVar) {
//   this.setState({
//   goalVar: e.target.value
// })
// console.log(this.state.personalGoalPercentage)
// }

// fn(event) {
//   this.setState({
//     personalGoalPercentage: event.target.value
//   });
// }



personalGoalPercentageChange(event) {
  this.setState({
    personalGoalPercentage: event.target.value,
})
}

coupleGoalPercentageChange(event) {
  console.log(event.target.value)
  this.setState({
    coupleGoalPercentage: event.target.value,
})
}

emergencyFundPercentageChange(event) {
  this.setState({
    emergencyFundPercentage: event.target.value,
})
}

savingsCallBack = (val) => {
  this.setState({
    personalVal: val
  })
}

coupleCallBack = (val) => {
  this.setState({
    coupleVal: val
  })
}

emergencyCallBack = (val) => {
  this.setState({
    emergencyVal: val
  })
}

anotherFn = () => {

  var newVals = {
    personalSavingsGoal:this.state.personalVal,
    coupleSavingsGoal:this.state.coupleVal,
    emergencyFund:this.state.emergencyVal
  }

    console.log(newVals)

  firebase.database().ref().child('fb-savings').push({
    date: new Date(Date.now()).toLocaleString(),
    personalSavingsGoal:"$"+this.state.personalVal,
    coupleSavingsGoal:"$"+this.state.coupleVal,
    emergencyFund:"$"+this.state.emergencyVal
  })
}



  render () {
    return (
      <div>
      <h4>My savings {this.props.savingsFromParent}</h4>

      <form onSubmit={this.handleSubmit}>
       <h5>
        <input type="number" name="personalGoal-num" min="0" max="100" placeholder="50" value={this.state.personalGoalPercentage} onChange={this.personalGoalPercentageChange}/>
      </h5>
        <h5> %
        <input type="text" name="newGoal" placeholder="Personal Goals"/>: $
          <PersonalSavings
               savingsFromParent = {this.props.savingsFromParent}
               personalGoalPercentage = {this.state.personalGoalPercentage}
               saveGoal = {this.savingsCallBack}
               />
            </h5>

      <div>
        <input type="number" name="personalGoal-num" min="0" max="100" placeholder="50" value={this.state.coupleGoalPercentage} onChange={this.coupleGoalPercentageChange}/>
        <h5> %
         <input type="text" name="newGoal" placeholder="Couple Goals"/>: $
        <CoupleSavings
           savingsFromParent = {this.props.savingsFromParent}
           coupleGoalPercentage = {this.state.coupleGoalPercentage}
           coupleGoalCall = {this.coupleCallBack}
           />
           </h5>
      </div>

       <div>
        <input type="number" name="personalGoal-num" min="0" max="100" placeholder="50" value={this.state.emergencyFundPercentage} onChange={this.emergencyFundPercentageChange}/>
        <h5> %
        <input type="text" name="newGoal" placeholder="Emergency Fund"/>: $
        <EmergencyFund
           savingsFromParent = {this.props.savingsFromParent}
           emergencyFundPercentage = {this.state.emergencyFundPercentage}
           emergencyCall = {this.emergencyCallBack}/>
        </h5>
      </div>



      </form>

      <Button onClick={this.anotherFn} bsStyle="success">Save the amounts</Button>



      </div>
    )
  }
}

export default SavingsInput;
