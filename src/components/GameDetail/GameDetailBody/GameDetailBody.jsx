import React from "react"
import classes from "./GameDetailBody.module.css"
const GameDetailBody = props => {
  return (
    <div className={classes.GameDetailBody}>
      <div className={classes.bodyHeader}>About</div>
      <div className={classes.bodyDetail}>
        <div> Genre : Adventure, Indie</div>
        <div> Platforms: Linux, PC(Microsoft Windows), Mac</div>
        <div className={classes.summary}>
          A group of friends is going to have a party in a space motel. If only
          they knew that they're characters of a story-driven game based on
          slasher and sci-fi movies... Their fate is in your hands - make
          decisions that alter the game, like totally!
        </div>
      </div>
    </div>
  )
}

export default GameDetailBody
