import React from 'react'

import { childrenWithProps } from "../utils/react.utils";

export default props => (
  <div>
    <h1>Family</h1>
    { childrenWithProps(props) }
  </div>
)