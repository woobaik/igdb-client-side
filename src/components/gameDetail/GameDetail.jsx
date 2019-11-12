import React from "react"
import classes from "./GameDetail.module.css"
import { withRouter } from "react-router"

const gameDetail = ({ name, cover, match, history, location }) => {
  console.log("gameDetail name", name)
  console.log("gameDetail cover", cover)
  console.log("gameDetail match", match)
  console.log("gameDetail history", history)
  console.log("gameDetail location", location)
  let coverImg =
    "https://" +
    cover
      .split("")
      .splice(2)
      .join("")
  coverImg = coverImg.replace("t_thumb", "t_1080p")
  console.log("cover imageee", coverImg)
  return (
    <div
      className={classes.gameDetail}
      style={{ backgroundImage: `url(${coverImg})` }}
    >
      <div>{name}</div>
      <div>{name}</div>
    </div>
  )
}

export default withRouter(gameDetail)
