import React from 'react'
import ReactDOM from "react-dom"

import DefaultComponent, { Second} from "./component";

ReactDOM.render(
  <div>
    <DefaultComponent value="Severo" />
    <Second />
  </div>
, document.getElementById('app'))