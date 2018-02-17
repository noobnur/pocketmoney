import React, { Component } from 'react';
import { Button } from 'react-bootstrap';


class PersonalSavings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalGoal: 0,
    }

    this.confirmVal = this.confirmVal.bind(this);
  }

  componentWillReceiveProps(nextProps) {
      this.setState({
        personalGoal: (nextProps.savingsFromParent * (nextProps.personalGoalPercentage/100)).toFixed(2)
      })
    }


confirmVal() {
  var personalData = this.state.personalGoal
  this.props.saveGoal(personalData)
}

  render () {
    return (
      <div>
      <label><h5> {this.state.personalGoal}</h5></label>
      <Button onClick={this.confirmVal}><h4>confirm?</h4></Button>
      <div>

      </div>
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

    this.confirmVal = this.confirmVal.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps)
      this.setState({
        coupleGoal: (nextProps.savingsFromParent * (nextProps.coupleGoalPercentage/100)).toFixed(2)
      })
  }

  confirmVal() {
    var coupleGoal = this.state.coupleGoal
    this.props.coupleGoalCall(coupleGoal)
    // console.log(personalData)
  }

  render () {
    return (
      <div>
      <label><h5> {this.state.coupleGoal}</h5></label>
      <Button onClick={this.confirmVal}><h4>confirm?</h4></Button>
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

    this.confirmVal = this.confirmVal.bind(this);
  }

  componentWillReceiveProps(nextProps) {
      this.setState({
        emergencyFund: (nextProps.savingsFromParent * (nextProps.emergencyFundPercentage/100)).toFixed(2)
      })
  }

  confirmVal() {
    var emergencyFund = this.state.emergencyFund
    this.props.emergencyCall(emergencyFund)
  }

  render () {
    return (
      <div>
      <label><h5> {this.state.emergencyFund}</h5></label>
      <Button onClick={this.confirmVal}><h4>confirm?</h4></Button>
      </div>
    )
  }
}


export {PersonalSavings, CoupleSavings, EmergencyFund };
