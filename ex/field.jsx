import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeValue } from "./field.actions";

class Field extends Component {
  render() {
    return (
      <div>
        <label>{this.props.value}</label><br />
        <input type="text" value={this.props.value} onChange={this.props.changeValue} /><br />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    value: state.field.value,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({changeValue}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Field)