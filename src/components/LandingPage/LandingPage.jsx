import React from "react"
import classes from "./LandingPage.module.css"
import { Link } from "react-scroll"

import AnimatedText from "./animatedText/AnimatedText"
const LandingPage = () => {
  return (
    <div className={classes.LandingPage}>
      <div className={classes.landingHeader}>IGDB CLONE</div>
      <div className={classes.landingSubHeader}>
        <AnimatedText />
      </div>

      <Link
        activeClass='active'
        className={classes.button}
        to='carousel'
        spy={true}
        smooth={true}
        duration={700}
        isDynamic={true}
      >
        <span>LET'S EXPLORE</span>
      </Link>
    </div>
  )
}

export default LandingPage
