import React, { Component } from "react"
import {
  FloatingMenu,
  MainButton,
  ChildButton
} from "react-floating-button-menu"
import MdAdd from "@material-ui/icons/Add"
import MdClose from "@material-ui/icons/Clear"

import PersonIcon from "@material-ui/icons/Person"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"

import classes from "./floatingButton.module.css"

class FloatingButton extends Component {
  state = {
    isOpen: false
  }
  render() {
    return (
      <div className={classes.Floating}>
        <FloatingMenu
          slideSpeed={700}
          direction='left'
          spacing={8}
          isOpen={this.state.isOpen}
        >
          <MainButton
            iconResting={<MdAdd style={{ fontSize: 20 }} nativecolor='white' />}
            iconActive={
              <MdClose style={{ fontSize: 20 }} nativecolor='white' />
            }
            backgroundColor='black'
            onClick={() => this.setState({ isOpen: !this.state.isOpen })}
            size={56}
          />
          <ChildButton
            icon={<PersonIcon style={{ fontSize: 20 }} nativecolor='white' />}
            backgroundColor='white'
            size={40}
            onClick={() => window.open("https://www.jbaik.com", "_blank")}
          />

          <ChildButton
            icon={<LinkedInIcon style={{ fontSize: 20 }} nativecolor='white' />}
            backgroundColor='white'
            size={40}
            onClick={() =>
              window.open("https://www.linkedin.com/in/baik/", "_blank")
            }
          />
          <ChildButton
            icon={<GitHubIcon style={{ fontSize: 20 }} nativecolor='white' />}
            backgroundColor='white'
            size={40}
            onClick={() =>
              window.open("https://www.github.com/woobaik", "_blank")
            }
          />
        </FloatingMenu>
      </div>
    )
  }
}

export default FloatingButton
