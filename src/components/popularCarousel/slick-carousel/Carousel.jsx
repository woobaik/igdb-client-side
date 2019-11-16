import React, { Component } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import classes from "./Carousel.module.css"

import axios from "axios"
import { API_KEY } from "../../../.config"
class SimpleSlider extends Component {
  state = {
    popularGames: []
  }
  //  getting popular games
  componentDidMount() {
    axios({
      url: "games",
      method: "POST",
      headers: {
        Accept: "application/json",
        "user-key": API_KEY
      },
      data:
        "fields artworks,category,cover.url,genres,name,popularity,rating,rating_count,release_dates,slug,url; sort popularity desc; limit 12;"
    })
      .then(response => {
        console.log(response.data)
        this.setState({ popularGames: response.data })
      })
      .catch(err => {
        console.error(err)
      })
  }

  render() {
    const popularGames = this.state.popularGames.map(game => {
      const url = `http:${game.cover.url}`.replace("t_thumb", "t_720p")

      const imgstyle = { backgroundImage: `url(${url})` }

      return (
        <div className={classes.cover} key={game.id}>
          <div className={classes.coverImg} style={imgstyle}></div>
        </div>
      )
    })

    const settings = {
      dots: true,
      infinite: true,
      speed: 900,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
    return (
      <div className={classes.Carousel}>
        <h2> Popular Games Right Now</h2>
        <Slider {...settings}>{popularGames}</Slider>
      </div>
    )
  }
}

export default SimpleSlider
