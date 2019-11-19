import React, { Fragment } from "react"
import Carousel from "../components/popularCarousel/slick-carousel/Carousel"
import LandingPage from "../components/LandingPage/LandingPage"
import classes from "./Homepage.module.css"
const homepage = () => {
  return (
    <div classNamee={classes.Homepage}>
      <LandingPage />

      <div className={classes.carousel} id='carousel'>
        <Carousel />
      </div>
    </div>
  )
}

export default homepage
