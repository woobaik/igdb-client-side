import React, { Component } from "react"
import classes from "./NavWrapper.module.css"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"

class NavWrapper extends Component {
  state = {
    isOpen: true
  }

  handleWrapperClick = () => {
    console.log("clicked")
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <div className={classes.NavWrapper}>
        <div className={classes.navTitleWrapper}>
          <div
            className={classes.navTitle}
            onClick={() => this.handleWrapperClick()}
          >
            WRPPER TITLE{" "}
            {this.state.isOpen ? <ExpandMoreIcon /> : <ExpandLessIcon />}
          </div>
        </div>

        {this.state.isOpen ? (
          <div className={classes.navListsWrapper}>
            <ul className={classes.navListWrapperUl}>
              <li className={classes.navList}>ITEM 1</li>
              <li className={classes.navList}>ITEM 2</li>
              <li className={classes.navList}>ITEM 3</li>
              <li className={classes.navList}>ITEM 4</li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    )
  }
}

export default NavWrapper
