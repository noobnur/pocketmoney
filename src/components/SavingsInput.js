import React, { Component } from 'react';


class SavingsInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalGoalPercentage: 50,
      coupleGoalPercentage: 40,
      emergencyFundPercentage: 10,
      // coupleGoal: 0,
      // emergencyFund: 0
    }

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



  render () {
    return (
      <div>
      <h4>My savings {this.props.savingsFromParent}</h4>
      <form>
        <input type="number" name="personalGoal-num" min="0" max="100" placeholder="50" value={this.state.personalGoalPercentage} onChange={this.personalGoalPercentageChange}/>
        <label><h5> % Personal Goals: $ { this.props.savingsFromParent * (this.state.personalGoalPercentage/100)}</h5></label>
      </form>

      <form>
        <input type="number" name="personalGoal-num" min="0" max="100" placeholder="50" value={this.state.coupleGoalPercentage} onChange={this.coupleGoalPercentageChange}/>
        <label><h5> % Couple Goals: $ { this.props.savingsFromParent * (this.state.coupleGoalPercentage/100)}</h5></label>
      </form>

      <form>
        <input type="number" name="personalGoal-num" min="0" max="100" placeholder="50" value={this.state.emergencyFundPercentage} onChange={this.emergencyFundPercentageChange}/>
        <label><h5> % Emergency Fund: $ { this.props.savingsFromParent * (this.state.emergencyFundPercentage/100)}</h5></label>
      </form>


      </div>
    )
  }
}

export default SavingsInput;
