import React, { useState, useEffect } from "react"
import classes from "./GameDetailBody.module.css"
const GameDetailBody = props => {
  const genreMapper = () => {
    return props.genres.map(genre => {
      return (
        <div className={classes.genreItem} key={genre.id}>
          {genre.name}
        </div>
      )
    })
  }

  const platformsMapper = () => {
    return props.platforms.map(platform => {
      return (
        <div className={classes.platformItem} key={platform.id}>
          {platform.name}
        </div>
      )
    })
  }

  const websitesMapper = () => {
    let filteredWebsites
    if (props.websites) {
      filteredWebsites = props.websites.filter(website => {
        return website.category === 1 || website.category === 3
      })

      if (filteredWebsites.length === 0) {
        return <div className={classes.noWebsiteYet}>Coming Soon!</div>
      }
      return filteredWebsites.map(website => {
        let enumMatcher =
          website.category === 1 ? "OFFICAL WEBSITE" : "Wikipedia"

        return (
          <div
            key={website.url}
            className={classes.websiteItem}
            onClick={() => window.open(website.url, "_blank")}
          >
            {enumMatcher}
          </div>
        )
      })
    }
  }

  return (
    <div className={classes.GameDetailBody}>
      <div className={classes.bodyHeader}>
        ABOUT {props.name ? props.name.toUpperCase() : ""}
      </div>
      <div className={classes.bodyDetail}>
        <div className={classes.platforms}>
          <span className={classes.bold}>Platforms</span>
          <div className={classes.platformList}>
            {props.platforms ? platformsMapper() : ""}
          </div>
        </div>
        <div className={classes.genres}>
          <span className={classes.bold}>Genre</span>
          <div className={classes.genresList}>
            {props.genres ? genreMapper() : ""}
          </div>
        </div>

        <div className={classes.websites}>
          <span className={classes.bold}>Websites :</span> {websitesMapper()}
        </div>

        <div className={classes.summary}>
          {props.summary ? props.summary : ""}
        </div>
      </div>
    </div>
  )
}

export default GameDetailBody
