import React from 'react'
import ReactDOM from "react-dom"

import Family from './family'
import Member from './member'

ReactDOM.render(
  <Family>
    <Member name="Fabrício" lastName="Severo" />
  </Family>
, document.getElementById('app'))