import React from "react"
import classes from "./Homepage.module.css"
import PlatformCategory from "./platformCategory/PlatformCategory"

const homepage = () => {
  return (
    <div className={classes.homepage}>
      <PlatformCategory />
    </div>
  )
}

export default homepage
