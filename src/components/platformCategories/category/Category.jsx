import React from "react"
import classes from "./Category.module.css"
import { withRouter } from "react-router"
import { Link } from "react-router-dom"
const Category = props => {
  console.log(props.match)
  return (
    <Link to={`/platforms/${props.url}`} className={classes.Category}>
      <div>
        {props.name}
        <div>{props.name}</div>
      </div>
    </Link>
  )
}
export default withRouter(Category)
