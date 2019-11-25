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

  comingOrRecent = () => {
    if (this.props.match.path.indexOf("upcoming") === 1) {
      const category = { operator: ">", order: "asc" }
      return category
    } else if (this.props.match.path.indexOf("recent") === 1) {
      const category = { operator: "<", order: "desc" }
      return category
    } else {
      return false
    }
  }

  componentDidMount() {
    let platform = this.props.match.params.platform
    let platformId = platformFinder(platform)
    let todayUni = new Date().getTime().toString()
    let todayLimit = todayUni.slice(0, 10)
    let condition = this.comingOrRecent()
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

        `fields category, game.name, game.popularity, game.slug, 
                game.screenshots, game.cover.url, game.platforms; 
          where date ${condition.operator} ${todayLimit} & game.platforms = ${platformId} & game.cover != null & game.popularity != null; sort date ${condition.order}; limit 20;

          `
    })
      .then(response => {
        this.setState({ games: response.data, loading: false })
      })
      .catch(err => {
        console.error(err)
      })
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log("params", this.props.match)

    if (this.props.match !== prevProps.match) {
      let platform = this.props.match.params.platform
      let platformId = platformFinder(platform)
      let todayUni = new Date().getTime().toString()
      let todayLimit = todayUni.slice(0, 10)
      let condition = this.comingOrRecent()

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

          `fields category, game.name, game.popularity, game.slug, 
                game.screenshots, game.cover.url, game.platforms; 
          where date ${condition.operator} ${todayLimit} & game.platforms = ${platformId} & game.cover != null & game.screenshots != null; sort date ${condition.order}; limit 20;
          
          `
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
      let coverUrl = game ? game.cover.url : comingSoon
      return (
        <GamePreview
          popularity={game.popularity}
          key={game.slug}
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
