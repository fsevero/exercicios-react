import React from 'react'
import ReactDOM from "react-dom"

import ClassComponent from './class.component'

ReactDOM.render(
  <ClassComponent initialValue={10} label="I'm from the props" />
, document.getElementById('app'))