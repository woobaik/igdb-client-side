import React from "react"
import classes from "./GamePreview.module.css"
import { withRouter } from "react-router"

const gamePreview = ({ name, cover, match, history, slug }) => {
  let coverImg =
    "https://" +
    cover
      .split("")
      .splice(2)
      .join("")
  coverImg = coverImg.replace("t_thumb", "t_1080p")
  console.log(match)
  return (
    <div
      className={classes.PlatformDetail}
      onClick={() => history.push(`/games/${slug}`)}
    >
      <div
        className={classes.gameImage}
        style={{ backgroundImage: `url(${coverImg})` }}
      ></div>
      <div className={classes.gameDetail}>{name}</div>
    </div>
  )
}

export default withRouter(gamePreview)
