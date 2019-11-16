import React, { Component, Fragment } from "react"
import classes from "./PlatformCategories.module.css"
import Category from "./category/Category"

class PlatformCategory extends Component {
  state = {
    categories: [
      {
        name: "PC",
        url: "pc",
        imageUrl:
          "https://storage.googleapis.com/webdesignledger.pub.network/WDL/6f050e39-windows_10_logoblue.svg-copy_windows.jpg"
      },
      {
        name: "Playstation",
        url: "playstation4",
        imageUrl:
          "https://i.pinimg.com/originals/ca/be/7a/cabe7a7e2371300bc8efa3f19e4808a2.jpg"
      },
      {
        name: "Xbox",
        url: "xbox",
        imageUrl:
          "https://pmcvariety.files.wordpress.com/2014/03/xbox-logo1.jpg?w=994"
      },
      {
        name: "Nintendo",
        url: "nintendo",
        imageUrl:
          "https://imgix.bustle.com/mic/tjfwyfk8g5dphn7nbayunnvogynzaw409gary3xj2omqwsbrn2fcvjopsysstdez.jpg?w=1020&h=576&fit=crop&crop=faces&auto=format&q=70"
      }
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

  render() {
    const category = this.state.categories.map(category => {
      return (
        <Category
          key={category.name}
          name={category.name}
          url={category.url}
          imageUrl={category.imageUrl}
        />
      )
    })

    return (
      <Fragment>
        <div className={classes.PlatformCategory}>Platform {category}</div>
      </Fragment>
    )
  }
}

export default PlatformCategory
