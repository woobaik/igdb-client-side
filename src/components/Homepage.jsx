import React from "react"
import classes from "./Homepage.module.css"
import PlatformCategories from "./platformCategories/PlatformCategories"

const homepage = () => {
  return (
    <div className={classes.homepage}>
      <PlatformCategories />
    </div>
  )
}

export default homepage
