import React, { Component } from "react"
import onClickOutside from "react-onclickoutside"

import classes from "./NavWrapper.module.css"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import { Link } from "react-router-dom"
import { MdComputer, MdPerson, MdPictureAsPdf } from "react-icons/md"
import {
  FaPlaystation,
  FaXbox,
  FaNintendoSwitch,
  FaGithub,
  FaLinkedin
} from "react-icons/fa"

class NavWrapper extends Component {
  state = {
    isOpen: false
  }

  components = {
    MdComputer: <MdComputer />,
    FaPlaystation: <FaPlaystation />,
    FaXbox: <FaXbox />,
    FaNintendoSwitch: <FaNintendoSwitch />,
    FaGithub: <FaGithub />,
    FaLinkedin: <FaLinkedin />,
    MdPictureAsPdf: <MdPictureAsPdf />
  }

  handleWrapperClick = () => {
    console.log("clicked")
    this.setState({ isOpen: !this.state.isOpen })
  }

  handleClickOutside = evt => {
    this.setState({ isOpen: false })
  }
  renderLists = () => {
    return this.props.lists.map(list => {
      const IconComponent = this.components[list.icon]
      return (
        <div key={list.name} className={classes.navList}>
          <Link to={"/"} key={list.name}>
            <div className={classes.icon}>
              {list.name} {IconComponent}
            </div>
          </Link>
        </div>
      )
    })
  }

  render() {
    return (
      <div className={classes.NavWrapper}>
        <div className={classes.navTitleWrapper}>
          <div
            className={classes.navTitle}
            onClick={() => this.handleWrapperClick()}
          >
            <div>
              {this.props.title}{" "}
              {!this.state.isOpen ? <ExpandMoreIcon /> : <ExpandLessIcon />}
            </div>
          </div>
        </div>

        {this.state.isOpen ? (
          <div className={classes.navListsWrapper}>{this.renderLists()}</div>
        ) : (
          ""
        )}
      </div>
    )
  }
}

export default onClickOutside(NavWrapper)
