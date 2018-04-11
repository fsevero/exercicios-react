import React, { Component } from 'react'

export default class ClassComponent extends Component { // React.Component

  constructor (props) {
    super(props)
    this.state = { value: props.initialValue }
  }

  sum(delta) {
    this.setState({ value: this.state.value + delta })
  }

  render() {
    return (
      <div>
        <h1>{this.props.label}</h1>
        <p>Props: {this.props.initialValue}</p>
        <p>State: {this.state.value}</p>
        <p><button onClick={() => this.sum(1)}>ADD ONE</button></p>
        <p><button onClick={() => this.sum(-1)}>ADD ONE</button></p>
      </div>
    )
  }

}