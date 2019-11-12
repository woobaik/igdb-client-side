import React, { Component } from "react"
import { withRouter } from "react-router"
import axios from "axios"
import { API_KEY } from "../../../.config"
import comingSoon from "../../../assets/images/comingSoon.jpg"

import GameDetail from "../../gameDetail/GameDetail"
import classes from "./CategoryDetail.module.css"

class categoryDetail extends Component {
  state = {
    games: [],
    categoryName: "",
    loading: true
  }

  componentDidMount() {
    console.log(this.props.match)
    let platform = this.props.match.params.platform
    let platformId = ""
    let todayMili = new Date().getTime()
    console.log(todayMili)
    switch (platform) {
      case "pc":
        console.log("PC IS DETECTED")
        platformId = "6"
        break
      case "playstation4":
        console.log("PS4 IS DETECTED")
        platformId = "48"
        break

      case "nintendo":
        console.log("Nintendo IS DETECTED")
        platformId = "130"
        break

      case "xbox":
        console.log("Xbox IS DETECTED")
        platformId = "11"
        break

      case "etc":
        console.log("ETC IS DETECTED")
        break
      default:
        platform = "No Match"
        console.log("No Match man")
    }

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

        `fields category,date,game, game.name, game.popularity, game.screenshots,game.cover.url,m,platform,y; where game.platforms = ${platformId} & date < ${todayMili}; sort date desc; limit 20;`
    })
      .then(response => {
        this.setState({ games: response.data, loading: false })
        console.log(this.state)
      })
      .catch(err => {
        console.error(err)
      })
  }

  gameContainer = () => {
    return this.state.games.map(({ game }) => {
      let coverUrl = game.cover ? game.cover.url : comingSoon

      return (
        <GameDetail
          key={game.id}
          name={game.name}
          cover={coverUrl}
        ></GameDetail>
      )
    })
  }
  render() {
    return (
      <div className={classes.CategoryDetail}>
        <div>CATEGORY DETAIL</div>
        <div>NAME : {this.state.categoryName}</div>
        <div className={classes.gameContainer}>
          {this.state.loading ? <div>LOADING</div> : this.gameContainer()}
        </div>
      </div>
    )
  }
}

export default withRouter(categoryDetail)
