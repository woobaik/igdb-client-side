import React from "react"
import classes from "./Navigation.module.css"
import { Link } from "react-router-dom"
const navigation = () => {
  return (
    <div className={classes.Navigation}>
      <Link to='/'>Navigation</Link>
    </div>
  )
}

export default navigation
