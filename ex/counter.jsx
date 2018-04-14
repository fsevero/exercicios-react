import React from 'react'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { inc, dec, stepChanged } from "./counter.actions";

const Counter = (props) => (
  <div>
    <h1>{props.counter.number}</h1>
    <p><input type="number" value={props.counter.step} onChange={props.stepChanged} /></p>
    <p>
      <button onClick={props.inc}>ADD</button>
      <button onClick={props.dec}>DEC</button>
    </p>
  </div>
)

const mapStateToProps = state => ({ counter: state.counter })
const mapDispatchToProps = dispatch => bindActionCreators({ inc, dec, stepChanged }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Counter)