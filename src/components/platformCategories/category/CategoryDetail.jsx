import React, { Component, Fragment } from "react"
import { withRouter } from "react-router"
import axios from "axios"
import { API_KEY } from "../../../.config"
import comingSoon from "../../../assets/images/comingSoon.jpg"
import platformFinder from "../../../script/platformFinder"

import GamePreview from "../../GamePreview/GamePreview"
import Loader from "../../UI/Loader"

import classes from "./CategoryDetail.module.css"

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
    window.scrollTo(0, 0)

    let platform = this.props.match.params.platform
    let platformId = platformFinder(platform)
    let todayUni = new Date().getTime().toString()
    let todayLimit = todayUni.slice(0, 10)
    let condition = this.comingOrRecent()
    this.setState({ categoryName: platform.toUpperCase() })

    axios({
      url:
        "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/release_dates",
      method: "POST",
      headers: {
        Accept: "application/json",
        "user-key": API_KEY
      },
      data:
        // fields *; where game.platforms = 48 & date < 1538129354; sort date desc;

        `fields category, game.name, game.popularity, game.slug, 
                game.screenshots, game.cover.url, game.platforms; 
          where game.platforms = ${platformId} & date ${condition.operator} ${todayLimit} & game.cover != null; sort date ${condition.order}; limit 20;

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
    window.scrollTo(0, 0)

    if (this.props.match !== prevProps.match) {
      let platform = this.props.match.params.platform
      let platformId = platformFinder(platform)
      let todayUni = new Date().getTime().toString()
      let todayLimit = todayUni.slice(0, 10)
      let condition = this.comingOrRecent()

      this.setState({ categoryName: platform.toUpperCase(), loading: false })

      axios({
        url:
          "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/release_dates",
        method: "POST",
        headers: {
          Accept: "application/json",
          "user-key": API_KEY
        },
        data:
          // fields *; where game.platforms = 48 & date < 1538129354; sort date desc;

          `fields category, game.name, game.popularity, game.slug, 
                game.screenshots, game.cover.url, game.platforms; 
          where game.platforms = ${platformId} & date ${condition.operator} ${todayLimit} & game.cover != null & game.screenshots != null; sort date ${condition.order}; limit 20;
          
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
    return this.state.games.map(game => {
      let coverUrl = game.game ? game.game.cover.url : comingSoon
      return (
        <GamePreview
          popularity={game.game.popularity}
          key={game.id}
          name={game.game.name}
          cover={coverUrl}
          slug={game.game.slug}
        ></GamePreview>
      )
    })
  }

  titleName = () => {
    if (this.props.match.path.indexOf("recent") === 1) {
      return "RECENTLY ADDED GAME"
    } else if (this.props.match.path.indexOf("upcoming") === 1) {
      return "UPCOMING GAME"
    }
  }

  render() {
    return (
      <div className={classes.CategoryDetail}>
        {this.state.loading ? (
          <Loader />
        ) : (
          <Fragment>
            <div className={classes.categoryDetailTitle}>
              {this.titleName()} FOR{" "}
              {this.props.match.params.platform.toUpperCase()}
            </div>

            <div className={classes.gameContainer}>{this.gameContainer()}</div>
          </Fragment>
        )}
      </div>
    )
  }
}

export default withRouter(categoryDetail)
