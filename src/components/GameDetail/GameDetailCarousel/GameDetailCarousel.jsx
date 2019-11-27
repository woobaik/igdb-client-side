import React from "react"
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"

const screenShotMapper = array => {
  const screenShots = []
  for (let element of array) {
    let screenShot = {}

    let baseUrl = element.url.slice(2)
    screenShot["thumbnail"] = "https://" + baseUrl
    screenShot["original"] =
      "https://" + baseUrl.replace("t_thumb", "t_original")
    screenShots.push(screenShot)
  }

  return screenShots
}

const GameDetailCarousel = props => {
  let screenShotAll = []
  if (props.screenshots) {
    screenShotAll = screenShotMapper(props.screenshots)
  }

  return <ImageGallery items={screenShotAll} />
}

export default GameDetailCarousel
