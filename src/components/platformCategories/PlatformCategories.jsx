import React, { Component } from "react"
import classes from "./PlatformCategories.module.css"
import Category from "./category/Category"
import { API_KEY } from "../../.config"
import axios from "axios"
class PlatformCategory extends Component {
  state = {
    categories: [
      { name: "PC", url: "pc" },
      { name: "Playstation", url: "playstation4" },
      { name: "Xbox", url: "xbox" },
      { name: "Nintendo", url: "nintendo" },
      { name: "etc", url: "etc" }
    ],
    game: []
  }

  componentDidMount() {
    // let today = new Date().getTime()
    // console.log(today)
    // axios({
    //   url: "/release_dates",
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "user-key": API_KEY
    //   },
    //   data: `fields game.name, game.release_dates, game.genres, game.slug, game.storyline, game.url; where game.platforms = 48 & date < ${today}; sort date desc;`
    // })
    //   .then(response => {
    //     console.log("games")
    //     console.log(response.data)
    //   })
    //   .catch(err => {
    //     console.error(err)
    //   })
  }

  componentDidUpdate() {}

  render() {
    const category = this.state.categories.map(category => {
      return (
        <Category key={category.name} name={category.name} url={category.url} />
      )
    })

    return <div className={classes.PlatformCategory}>{category}</div>
  }
}

export default PlatformCategory
