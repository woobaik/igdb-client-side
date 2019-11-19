import React from "react"
import classes from "./LandingPage.module.css"
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll"

const LandingPage = () => {
  return (
    <div className={classes.LandingPage}>
      <div className={classes.landingHeader}>IGDB CLONE</div>
      <div className={classes.landingSubHeader}>
        A Full Stack Developer Lives in San Francisco
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
        <a>LET'S EXPLORE</a>
      </Link>
    </div>
  )
}

export default LandingPage
