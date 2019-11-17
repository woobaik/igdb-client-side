import React from "react"
import { css } from "@emotion/core"
import classes from "./Loader.module.css"
import PacmanLoader from "react-spinners/PacmanLoader"

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  border-color: pink;
`

class AwesomeComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }
  render() {
    return (
      <div
        className={`${classes.Loader} ${
          this.props.loading ? classes.visible : ""
        } `}
      >
        <PacmanLoader
          css={override}
          sizeUnit={"px"}
          size={100}
          color={"#F9A602"}
          loading={this.props.loading}
        />
      </div>
    )
  }
}

export default AwesomeComponent
