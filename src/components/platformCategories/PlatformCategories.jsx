import React, { Component } from "react"
import classes from "./PlatformCategories.module.css"
import Category from "./category/Category"
import { BASE_URL, API_KEY } from "../../.config"
import axios from "axios"
class PlatformCategory extends Component {
  state = {
    categories: [
      { name: "PC" },
      { name: "Playstation" },
      { name: "Xbox" },
      { name: "Nintendo" },
      { name: "etc" }
    ],
    game: []
  }

  componentDidMount() {
    axios({
      url: BASE_URL,
      method: "POST",
      headers: {
        Accept: "application/json",
        "user-key": API_KEY
      },

      data:
        "fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,collection,cover,created_at,dlcs,expansions,external_games,first_release_date,follows,franchise,franchises,game_engines,game_modes,genres,hypes,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,popularity,pulse_count,rating,rating_count,release_dates,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,time_to_beat,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;"
    })
      .then(response => {
        this.setState({ game: response.data })
      })
      .catch(err => {
        console.error(err)
      })
  }

  componentDidUpdate() {
    console.log(this.state)
  }

  render() {
    const category = this.state.categories.map(category => {
      return <Category key={category.name} name={category.name} />
    })

    return <div className={classes.PlatformCategory}>{category}</div>
  }
}

export default PlatformCategory
