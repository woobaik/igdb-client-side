import React, { Component } from "react"
import classes from "./NavWrapper.module.css"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import { Link } from "react-router-dom"

class NavWrapper extends Component {
  state = {
    isOpen: true
  }

  handleWrapperClick = () => {
    console.log("clicked")
    this.setState({ isOpen: !this.state.isOpen })
  }

  renderLists = () => {
    return this.props.lists.map(list => {
      return (
        <div key={list.name} className={classes.navList}>
          <Link to={"/"} key={list.name}>
            {list.name}
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
            <div>{this.props.title}</div>
            <div className={classes.fontIcon}>
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

export default NavWrapper
