import React from "react"
import classes from "./GameDeatilCard.module.css"
const gameDetailCard = props => {
  let imageStyle = `https:${props.coverUrl}`.replace("t_thumb", "t_cover_big")

  return (
    <div className={classes.gameDetailCard}>
      <div
        className={classes.gameDetailImage}
        style={{ backgroundImage: `url(${imageStyle})` }}
      ></div>
    </div>
  )
}

export default gameDetailCard
