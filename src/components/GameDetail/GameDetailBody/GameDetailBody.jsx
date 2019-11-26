import React, { useState, useEffect } from "react"
import classes from "./GameDetailBody.module.css"
const GameDetailBody = props => {
  const genreMapper = () => {
    return props.genres.map(genre => {
      return <div key={genre.id}>{genre.name}</div>
    })
  }

  const platformsMapper = () => {
    return props.platforms.map(platform => {
      return <div key={platform.id}>{platform.name}</div>
    })
  }

  //   const websiteMapper = () => {
  //      const filteredProps = props.websites.filter(website => {
  //       website.category === 1 || website.category === 3
  //     })

  // return    filteredProps.map(website => {
  //       <div key={website.id}><button><a href={`${website.url} _blank`}></a></button></div>
  //     })
  //   }

  return (
    <div className={classes.GameDetailBody}>
      <div className={classes.bodyHeader}>
        ABOUT {props.name ? props.name.toUpperCase() : ""}
      </div>
      <div className={classes.bodyDetail}>
        <div className={classes.platforms}>
          <span className={classes.bold}>Platforms: </span>{" "}
          {props.platforms ? platformsMapper() : ""}
        </div>
        <div className={classes.genres}>
          <span className={classes.bold}>Genre :</span>{" "}
          {props.genres ? genreMapper() : ""}
        </div>
        {/* <div className={classes.websites}>
          <span className={classes.bold}>Websites :</span>{" "}
          {props.genres ? genreMapper() : ""}
        </div> */}

        <div className={classes.summary}>
          {props.summary ? props.summary : ""}
        </div>
      </div>
    </div>
  )
}

export default GameDetailBody
