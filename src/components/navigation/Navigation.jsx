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
          { name: "PC", icon: "MdComputer", url: "/upcoming-games/pc" },
          {
            name: "PS4",
            icon: "FaPlaystation",
            url: "/upcoming-games/playstation4"
          },
          { name: "Xbox", icon: "FaXbox", url: "/upcoming-games/xbox" },
          {
            name: "NINTENDO",
            icon: "FaNintendoSwitch",
            url: "/upcoming-games/nintendo"
          }
        ]
      },
      {
        title: "RECENTLY RELEASED",
        lists: [
          { name: "PC", icon: "MdComputer", url: "/recent/pc" },
          { name: "PS4", icon: "FaPlaystation", url: "/recent/playstation4" },
          { name: "Xbox", icon: "FaXbox", url: "/recent/xbox" },
          {
            name: "NINTENDO",
            icon: "FaNintendoSwitch",
            url: "/recent/nintendo"
          }
        ]
      }
    ]
  }

  renderWrapper = () => {
    return this.state.groups.map(({ title, lists }) => {
      return <NavWrapper title={title} lists={lists} key={title} />
    })
  }

  render() {
    return (
      <div className={classes.Navigation}>
        <div className={classes.logoContainer}>
          <div className={classes.navLogo}>
            <NavLink exact to='/' className={classes.logo}></NavLink>
          </div>
        </div>

        <div className={classes.navMenu}>{this.renderWrapper()}</div>
      </div>
    )
  }
}

export default Navigation
