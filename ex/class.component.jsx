import React, { Component } from 'react'

export default class ClassComponent extends Component { // React.Component

  render() {
    return (
      <h1>I'm in a component! {this.props.value}</h1>
    )
  }

}