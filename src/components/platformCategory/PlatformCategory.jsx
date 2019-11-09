import React, { Component } from "react"
import classes from "./PlatformCategory.module.css"

class PlatformCategory extends Component {
  render() {
    return (
      <div className={classes.PlatformCategory}>
        <div className={classes.category}>PC</div>
        <div className={classes.category}>Playstation</div>
        <div className={classes.category}>Xbox</div>
        <div className={classes.category}>Nintendo</div>
        <div className={classes.category}>etc</div>
      </div>
    )
  }
}

export default PlatformCategory
