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

      data: "fields category,game,trusted,url;"
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
