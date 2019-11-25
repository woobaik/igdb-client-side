import React, { useEffect } from "react"
import classes from "./GameDeatilCard.module.css"
const GameDetailCard = props => {
  let imageStyle = `https:${props.coverUrl}`.replace("t_thumb", "t_cover_big")

  useEffect(() => {
    window.scroll(0, 0)
  })
  return (
    <div className={classes.gameDetailCard}>
      <div
        className={classes.gameDetailImage}
        style={{ backgroundImage: `url(${imageStyle})` }}
      ></div>
    </div>
  )
}

export default GameDetailCard
