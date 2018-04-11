import React from "react"

export default props => (
  <div>
    <h1>Hello from a component!</h1>
    <h2>{props.value}</h2>
  </div>
)

export const Second = props => (
  <h1>Another component appears</h1>
)