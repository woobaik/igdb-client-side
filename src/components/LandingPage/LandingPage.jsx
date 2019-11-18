import React from "react"
import classes from "./LandingPage.module.css"

const LandingPage = () => {
  return (
    <div className={classes.LandingPage}>
      <div className={classes.landingHeader}>BAIK's Game Finder</div>
      <div className={classes.landingSubHeader}>
        A Full Stack Developer Lives in San Francisco
      </div>

      <div className={classes.button}>Button</div>
    </div>
  )
}

export default LandingPage
