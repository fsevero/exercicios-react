import React, { Component } from 'react'

class Field extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: props.initialValue,
      value2: 'try changing!!',
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  render() {
    return (
      <div>
        <label>{this.state.value}</label><br />
        <input type="text" value={this.state.value} onChange={this.handleChange} /><br />
        <input type="text" value={this.state.value2} /><br />
        <input type="text" /> <br />
      </div>
    )
  }
}

export default Field