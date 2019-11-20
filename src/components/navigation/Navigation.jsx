import React, { Component } from "react"
import classes from "./Navigation.module.css"
import { NavLink } from "react-router-dom"

import NavWrapper from "./navigationWrapper/NavWrapper"

class Navigation extends Component {
  state = {
    groups: [
      {
        title: "UPCOMING GAMES",
        lists: [
          { name: "PC", icon: "icon" },
          { name: "PS4", icon: "icon" },
          { name: "Xbox", icon: "icon" },
          { name: "NINTENDO", icon: "icon" }
        ]
      },
      {
        title: "RECENTLY RELEASED",
        lists: [
          { name: "PC", icon: "icon" },
          { name: "PS4", icon: "icon" },
          { name: "Xbox", icon: "icon" },
          { name: "NINTENDO", icon: "icon" }
        ]
      },
      {
        title: "ABOUT ME",
        lists: [
          { name: "Github" },
          { name: "LinkedIn" },
          { name: "WEBSITE" },
          { name: "RESUME" }
        ]
      }
    ]
  }

  renderWrapper() {
    this.state.groups.map(group => {
      return <NavWrapper title={group.title} lists />
    })
  }

  render() {
    return (
      <div className={classes.Navigation}>
        <div className={classes.navLogo}>
          <NavLink exact to='/' className={classes.logo}></NavLink>
        </div>

        <NavWrapper />
        <div className={classes.navLinks}>
          <NavLink exact to='/platforms/pc' className={classes.navLink}>
            PC
          </NavLink>
          <NavLink
            exact
            to='/platforms/playstation4'
            className={classes.navLink}
          >
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
}

export default Navigation
