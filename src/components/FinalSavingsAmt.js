import React, { Component } from 'react';
import { Button } from 'react-bootstrap';


class FinalSavings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalGoal: 0,
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
      this.setState({
        personalGoal: nextProps.savingsFromParent * (nextProps.personalGoalPercentage/100)
      })
  }

  render () {
    return (
      <div>
      <label><h5> {this.state.personalGoal}</h5></label>
      </div>
    )
  }
}

class CoupleSavings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coupleGoal: 0,
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
      this.setState({
        coupleGoal: nextProps.savingsFromParent * (nextProps.coupleGoalPercentage/100)
      })
  }

  render () {
    return (
      <div>
      <label><h5> {this.state.coupleGoal}</h5></label>
      </div>
    )
  }
}

class EmergencyFund extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emergencyFund: 100,
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
      this.setState({
        emergencyFund: nextProps.savingsFromParent * (nextProps.emergencyFundPercentage/100)
      })
  }

  render () {
    return (
      <div>
      <label><h5> {this.state.emergencyFund}</h5></label>
      </div>
    )
  }
}


export {FinalSavings, CoupleSavings, EmergencyFund };
