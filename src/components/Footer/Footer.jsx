import React from "react"

import classes from "./Footer.module.css"
import skills from "../../chipSet"
import Chip from "@material-ui/core/Chip"

import { MdCopyright } from "react-icons/md"

const footer = () => {
  const chipIterator = skills.map(chip => {
    return (
      <Chip
        key={chip.name}
        style={{
          backgroundColor: chip.color,
          color: "white",
          margin: "0.5rem",
          padding: "0.4rem"
        }}
        varient='outlined'
        size='small'
        label={
          <div>
            {chip.icon} {chip.name}
          </div>
        }
      ></Chip>
    )
  })

  return (
    <div className={classes.Footer} id='footer'>
      <div className={classes.footerTitle}>ABOUT ME</div>
      <div className={classes.cards}>
        <div className={classes.card}>
          <div className={classes.cardTitle}>JOUNGWOO BAIK</div>
          <div className={classes.cardBody}>
            <div>Full Stack Developer</div>
            <div>Based in San Francisco</div>
            <div>joungwoo.baik@gmail.com</div>
            <div>415 - 766 - 1431</div>
          </div>
        </div>
        <div className={[classes.card, classes.skills].join(" ")}>
          <div className={classes.cardTitle}>TECH STACK</div>
          <div className={classes.cardChips}>{chipIterator}</div>
        </div>
        <div className={classes.card}>
          <div className={classes.cardTitle}>RELATED LINKS</div>
          <div className={classes.cardBody}>
            <div
              className={classes.link}
              onClick={() =>
                window.open("https://www.linkedin.com/in/baik/", "_blank")
              }
            >
              LinkedIn
            </div>
            <div
              className={classes.link}
              onClick={() =>
                window.open("https://www.github.com/woobaik", "_blank")
              }
            >
              GitHub
            </div>
            <div
              className={classes.link}
              onClick={() => window.open("https://www.jbaik.com", "_none")}
            >
              Website
            </div>
            <div
              className={classes.link}
              onClick={() =>
                window.open(
                  require("../../assets/pdf/Joungwoo Baik-Resume.pdf"),
                  "_none"
                )
              }
            >
              Resume
            </div>
          </div>
        </div>
      </div>
      <div className={classes.copyright}>
        <MdCopyright /> <div>{"  "} Joungwoo Baik. All Rights Reserved.</div>
      </div>
    </div>
  )
}

export default footer
