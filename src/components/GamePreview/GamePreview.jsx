import React from "react"
import classes from "./GamePreview.module.scss"
import { withRouter } from "react-router"

const gamePreview = ({ name, cover, match, history, slug }) => {
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
      onClick={() => history.push(`/games/${slug}`)}
    >
      <div
        className={classes.gameImage}
        style={{ backgroundImage: `url(${coverImg})` }}
      >
        <div className={classes.gameDetail}>
          <div className={classes.gameTitle}>{name}</div>
          <div className={classes.releaseDate}>RELEASE DATE</div>
          <div className={classes.more}> CLICK TO SEE MORE</div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(gamePreview)
