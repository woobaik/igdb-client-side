import React from "react"
import Carousel from "../components/popularCarousel/slick-carousel/Carousel"
import LandingPage from "../components/LandingPage/LandingPage"
import FloatingButton from "../components/UI/floatingButton/floatingButton"
import ReactPlayer from "react-player"
import { Link } from "react-scroll"
import classes from "./Homepage.module.css"
const homepage = () => {
  let videoArray = [
    "8EgWpFoOeYk",
    "M9FGaan35s0",
    "0SSYzl9fXOQ",
    "LembwKDo1Dk",
    "LDBojdBAjXU"
  ]

  let randomNumber = Math.floor(Math.random() * videoArray.length)

  return (
    <div className={classes.Homepage}>
      <LandingPage />

      <div className={classes.carousel} id='carousel'>
        <Carousel />
      </div>
      <Link
        activeClass='active'
        className={classes.button}
        to='youtube'
        spy={true}
        smooth={true}
        duration={700}
        isDynamic={true}
      >
        <span>Check Random YouTube Video! </span>
      </Link>
      <div className={classes.youtubeContainer} id='youtube'>
        <h2 className={classes.youtubeHeading}>RECOMMENDED RANDOM VIDEO</h2>
        <div className={classes.youtubeBody}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoArray[randomNumber]}`}
            width='100%'
          />
        </div>
      </div>

      <Link
        activeClass='active'
        className={classes.button}
        to='footer'
        spy={true}
        smooth={true}
        duration={800}
        isDynamic={true}
      >
        {" "}
        <span>Wanna Know About Me? </span>
      </Link>

      <div className={classes.floatingBtn}>
        <FloatingButton />
      </div>
    </div>
  )
}

export default homepage
