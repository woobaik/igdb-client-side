import React from "react"
import axios from "axios"
import { API_KEY } from "../../.config"
import { withRouter } from "react-router"

import platformIdFinder from "../../script/platformFinder"
class GameDetail extends React.Component {
  state = {
    gameDetail: [],
    loading: true
  }

  componentDidMount() {
    let platformId = platformIdFinder(this.props.match.params.platform)

    axios({
      url: "/games",
      method: "POST",
      headers: {
        Accept: "application/json",
        "user-key": API_KEY
      },
      data: `fields cover.url, id, name, genres.name, screenshots.url,summary, release_dates,platforms.name; where slug = "${this.props.match.params.gameTitle}" & platforms = ${platformId};`
    })
      .then(response => {
        this.setState({ gameDetail: response.data, loading: false })
      })
      .catch(err => {
        console.error(err)
      })
  }

  componentWillUnmount() {
    console.log("UNMOUNTING!!!")
  }

  renderDetail() {
    if (this.state.loading) {
      return <div>ITS LOADING</div>
    } else {
      let gameDetails = this.state.gameDetail[0]
      let screenShots = gameDetails.screenshots.map(screenshot => {
        return <div key={screenshot.id}>ScreenShot URL: {screenshot.url}</div>
      })

      let platforms = gameDetails.platforms.map(screenShot => {
        return <div key={screenShot.name}>{screenShot.name}</div>
      })

      let genres = gameDetails.genres.map(genre => {
        return <div key={genre.name}>{genre.name}</div>
      })
      return (
        <div>
          <div>id : {gameDetails.id}</div>
          <div>name : {gameDetails.name}</div>
          <div>cover URL : {gameDetails.cover.url}</div>
          {screenShots}
          <div>Summary : {gameDetails.summary}</div>
          <div>Platform : {platforms}</div>
          <div>Summary : {gameDetails.summary}</div>
          <div>Genre : {genres}</div>
        </div>
      )
    }
  }
  render() {
    console.log("State", this.state.gameDetail[0])

    return (
      <div className='GameDetail'>
        <div>{this.renderDetail()}</div>
      </div>
    )
  }
}

export default withRouter(GameDetail)
