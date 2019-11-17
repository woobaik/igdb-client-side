import React, { Fragment } from "react"
import Carousel from "../components/popularCarousel/slick-carousel/Carousel"
import LoadingPage from "../components/UI/Loader"
import classes from "./Homepage.module.css"
const homepage = () => {
  return (
    <Fragment>
      <div className={classes.Homepage}>
        <Carousel />
      </div>
    </Fragment>
  )
}

export default homepage
