import React from "react"
import classes from "./Navigation.module.css"
import { NavLink } from "react-router-dom"
const navigation = () => {
  return (
    <div className={classes.Navigation}>
      <NavLink exact to='/'>
        Navigation
      </NavLink>
      <NavLink exact to='/platforms/pc'>
        PC
      </NavLink>
      <NavLink exact to='/platforms/playstation4'>
        PS4
      </NavLink>
      <NavLink exact to='/platforms/xbox'>
        Xbox
      </NavLink>
      <NavLink exact to='/platforms/nintendo'>
        NINTENDO
      </NavLink>
    </div>
  )
}

export default navigation
