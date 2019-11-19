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
      <div className={classes.landingHeader}>BAIK's Game Finder</div>
      <div className={classes.landingSubHeader}>
        A Full Stack Developer Lives in San Francisco
      </div>

      <div className={classes.button}>
        <Link
          activeClass='active'
          className={classes.button}
          to='carousel'
          spy={true}
          smooth={true}
          duration={700}
          isDynamic={true}
        >
          Let's explore!
        </Link>
      </div>
    </div>
  )
}

export default LandingPage
