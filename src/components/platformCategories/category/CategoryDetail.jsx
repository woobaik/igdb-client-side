import React, { Component } from "react"
import { withRouter } from "react-router"
import axios from "axios"
import { API_KEY } from "../../../.config"
import comingSoon from "../../../assets/images/comingSoon.jpg"
import platformFinder from "../../../script/platformFinder"

import GamePreview from "../../GamePreview/GamePreview"
// import Loader from "../../UI/Loader"

import classes from "./CategoryDetail.module.css"
// import FloatingButton from "../../UI/floatingButton/floatingButton"

class categoryDetail extends Component {
  state = {
    games: [],
    categoryName: "",
    loading: true
  }

  componentDidMount() {
    let platform = this.props.match.params.platform
    let platformId = platformFinder(platform)
    let todayMili = new Date().getTime()

    this.setState({ categoryName: platform.toUpperCase() })

    axios({
      url: "/release_dates",
      method: "POST",
      headers: {
        Accept: "application/json",
        "user-key": API_KEY
      },
      data:
        // fields *; where game.platforms = 48 & date < 1538129354; sort date desc;

        `fields category,date,game, game.name, game.popularity, game.slug, 
                game.screenshots, game.cover.url ,platform, game.slug; 
          where game.platforms = ${platformId} & region = 2 
                & date < ${todayMili} & game.popularity > 5; 
          sort date desc; limit 20;`
    })
      .then(response => {
        this.setState({ games: response.data, loading: false })
      })
      .catch(err => {
        console.error(err)
      })
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    if (this.props.match.params.platform !== prevProps.match.params.platform) {
      let platform = this.props.match.params.platform
      let platformId = platformFinder(platform)
      let todayMili = new Date().getTime()

      this.setState({ categoryName: platform.toUpperCase(), loading: true })

      axios({
        url: "/release_dates",
        method: "POST",
        headers: {
          Accept: "application/json",
          "user-key": API_KEY
        },
        data:
          // fields *; where game.platforms = 48 & date < 1538129354; sort date desc;

          `fields category,date,game, game.name, game.popularity, game.slug, game.genres
                game.screenshots, game.cover.url ,platform, game.slug; 
          where game.platforms = ${platformId} & region = 2 
                & date < ${todayMili} & game.popularity > 5; 
          sort date desc; limit 20;`
      })
        .then(response => {
          this.setState({ games: response.data, loading: false })
        })
        .catch(err => {
          console.error(err)
        })
    }
  }

  gameContainer = () => {
    return this.state.games.map(({ game }) => {
      let coverUrl = game.cover ? game.cover.url : comingSoon

      return (
        <GamePreview
          popularity={game.popularity}
          key={game.id}
          name={game.name}
          cover={coverUrl}
          slug={game.slug}
        ></GamePreview>
      )
    })
  }
  render() {
    return (
      <div className={classes.CategoryDetail}>
        <div>CATEGORY DETAIL</div>
        <div>NAME : {this.props.match.params.platform}</div>
        <div className={classes.gameContainer}>{this.gameContainer()}</div>
      </div>
    )
  }
}

export default withRouter(categoryDetail)
