import React from "react"
import Carousel from "../components/popularCarousel/slick-carousel/Carousel"
import LandingPage from "../components/LandingPage/LandingPage"
import FloatingButton from "../components/UI/floatingButton/floatingButton"
import classes from "./Homepage.module.css"
const homepage = () => {
  return (
    <div className={classes.Homepage}>
      <LandingPage />

      <div className={classes.carousel} id='carousel'>
        <Carousel />
        <Carousel />
      </div>
      <div className={classes.floatingBtn}>
        <FloatingButton />
      </div>
    </div>
  )
}

export default homepage
