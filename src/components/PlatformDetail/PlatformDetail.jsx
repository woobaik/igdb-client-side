import React, { Fragment } from "react"
import classes from "./GameDetail.module.css"
import { withRouter } from "react-router"

const gameDetail = ({ name, cover, match, history, location }) => {
  let coverImg =
    "https://" +
    cover
      .split("")
      .splice(2)
      .join("")
  coverImg = coverImg.replace("t_thumb", "t_1080p")

  return (
    <div
      className={classes.PlatformDetail}
      style={{ backgroundImage: `url(${coverImg})` }}
    >
      <div className={classes.gameImage}></div>
      <div className={classes.gameDetail}>{name}</div>
    </div>
  )
}

export default withRouter(gameDetail)
