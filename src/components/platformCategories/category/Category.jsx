import React from "react"
import classes from "./Category.module.css"
import { withRouter } from "react-router"
import { Link } from "react-router-dom"
const Category = props => {
  console.log(props)
  return (
    <Link to={`/platforms/${props.url}`} className={classes.Category}>
      <div
        className={classes.platformImg}
        style={{ backgroundImage: `url(${props.imageUrl})` }}
      ></div>
      <div className={classes.platformImgHover}>
        <div className={classes.platformName}>{props.name}</div>
      </div>
    </Link>
  )
}
export default withRouter(Category)
