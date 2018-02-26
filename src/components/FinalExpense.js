import React, { Component } from 'react';

class TotalBills extends Component {
  constructor(props) {
    super(props)

    this.state = {
      updatedTotalBill: 450,
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    this.setState({
      updatedTotalBill: Number(nextProps.TFLbillamount) + Number(nextProps.GAbillamount) + Number(nextProps.PhoneBillamount),
    })
  }

  render () {
    return (
      <div>
      <h4>{this.state.updatedTotalBill}</h4>
      </div>
    )
  }
}

export {TotalBills}
