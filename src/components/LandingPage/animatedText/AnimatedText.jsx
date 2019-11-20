import React from "react"
import TextLoop from "react-text-loop"
import classes from "./AnimatedText.module.css"

const animatedText = () => {
  return (
    <div className={classes.AnimatedText}>
      <TextLoop mask={true} fade={false} className={classes.textChunk}>
        <span className={classes.text}>Hi! </span>
        <span className={classes.text}>A FULL STACK DEVELOPER</span>
        <span className={classes.text}>THIS IS</span>
        <span className={classes.text}>THIS PAGE IS</span>
        <span className={classes.text}>PLEASE</span>
      </TextLoop>
      <TextLoop delay={800} mask={true} fade={false}>
        <span className={classes.text}>MY NAME IS</span>
        <span className={classes.text}>LIVES IN</span>
        <span className={classes.text}>MY PORTFOLIO</span>
        <span className={classes.text}>BUILT WITH</span>
        <span className={classes.text}>ENJOY</span>
      </TextLoop>
      <TextLoop
        delay={1600}
        mask={true}
        fade={false}
        className={classes.textChunk}
      >
        <span className={classes.text}>JOUNGWOO BAIK.</span>
        <span className={classes.text}>SAN FRANCISCO.</span>
        <span className={classes.text}>WEBSITE.</span>
        <span className={classes.text}>React.js</span>
        <span className={classes.text}>MY WORK! :)</span>
      </TextLoop>
    </div>
  )
}

export default animatedText
