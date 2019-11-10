import React from "react"
import classes from "./Category.module.css"

const Category = props => {
  return <div className={classes.Category}>{props.name}</div>
}

export default Category
