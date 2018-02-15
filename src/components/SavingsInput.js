import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './SavingsInput.css';
import { PersonalSavings, CoupleSavings, EmergencyFund } from './FinalSavingsAmt';
import firebase from '../firebase.js';


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

savingsCallBack = (val) => {
  console.log(val)
  this.setState({
    personalVal: val
  })
}

coupleCallBack = (val) => {
  console.log(val)
  this.setState({
    coupleVal: val
  })
}

emergencyCallBack = (val) => {
  console.log(val)
  this.setState({
    emergencyVal: val
  })
}

anotherFn = () => {
  console.log(this.state.personalVal),
  console.log(this.state.coupleVal),
  console.log(this.state.emergencyVal)
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


// componentWillMount() {
//   this.firebaseREf = new Firebase("https://pocketmoney-4afe9.firebaseio.com")
// }
//
// componentDidMount() {
//   console.log(this.props.children)
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
          <PersonalSavings
               savingsFromParent = {this.props.savingsFromParent}
               personalGoalPercentage = {this.state.personalGoalPercentage}
               saveGoal = {this.savingsCallBack}
               />
            </h5></label></div>

      <div>
        <input type="number" name="personalGoal-num" min="0" max="100" placeholder="50" value={this.state.coupleGoalPercentage} onChange={this.coupleGoalPercentageChange}/>
        <label><h5> % Couple Goals: $
        <CoupleSavings
           savingsFromParent = {this.props.savingsFromParent}
           coupleGoalPercentage = {this.state.coupleGoalPercentage}
           coupleGoalCall = {this.coupleCallBack}
           />
           </h5></label>
      </div>

       <div>
        <input type="number" name="personalGoal-num" min="0" max="100" placeholder="50" value={this.state.emergencyFundPercentage} onChange={this.emergencyFundPercentageChange}/>
        <label><h5> % Emergency Fund: $
        <EmergencyFund
           savingsFromParent = {this.props.savingsFromParent}
           emergencyFundPercentage = {this.state.emergencyFundPercentage}
           emergencyCall = {this.emergencyCallBack}/>
        </h5></label>
      </div>



      </form>

      <Button onClick={this.anotherFn} bsStyle="success">Save the amounts</Button>

      <div> Button </div>


      </div>
    )
  }
}

export default SavingsInput;
