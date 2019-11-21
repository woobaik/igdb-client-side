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
          { name: "PC", icon: "MdComputer" },
          { name: "PS4", icon: "FaPlayStation" },
          { name: "Xbox", icon: "FaXbox" },
          { name: "NINTENDO", icon: "FaNintendoSwitch" }
        ]
      },
      {
        title: "RECENTLY RELEASED",
        lists: [
          { name: "PC", icon: "MdComputer" },
          { name: "PS4", icon: "FaPlayStation" },
          { name: "Xbox", icon: "FaXbox" },
          { name: "NINTENDO", icon: "FaNintendoSwitch" }
        ]
      },
      {
        title: "ABOUT ME",
        lists: [
          { name: "Github", icon: "FaGithub" },
          { name: "LinkedIn", icon: "FaLinkedin" },
          { name: "WEBSITE", icon: "" },
          { name: "RESUME", icon: "MdPictureAsPdf" }
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
        <div className={classes.navLogo}>
          <NavLink exact to='/' className={classes.logo}></NavLink>
        </div>

        {this.renderWrapper()}
        {/* <div className={classes.navLinks}>
          <NavLink exact to='/platforms/pc' className={classes.navLink}>
  FaPlayStation  C
          FaPlayStation/NavLink>
          <FaXbox
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
        </div> */}
      </div>
    )
  }
}

export default Navigation
