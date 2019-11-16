import React from "react"
import classes from "./Navigation.module.css"
import { NavLink } from "react-router-dom"
const navigation = () => {
  return (
    <div className={classes.Navigation}>
      <NavLink exact to='/' className={(classes.navLogo, classes.navLink)}>
        WOOBAIK's Game Tracker
      </NavLink>
      <div className={classes.navLinks}>
        <NavLink exact to='/platforms/pc' className={classes.navLink}>
          PC
        </NavLink>
        <NavLink exact to='/platforms/playstation4' className={classes.navLink}>
          PS4
        </NavLink>
        <NavLink exact to='/platforms/xbox' className={classes.navLink}>
          Xbox
        </NavLink>
        <NavLink exact to='/platforms/nintendo' className={classes.navLink}>
          NINTENDO
        </NavLink>
      </div>
    </div>
  )
}

export default navigation
