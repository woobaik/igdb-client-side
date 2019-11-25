import React, { Fragment } from "react"
import axios from "axios"
import { API_KEY } from "../../.config"
import { withRouter } from "react-router"
import classes from "./GameDetail.module.css"

import platformIdFinder from "../../script/platformFinder"
import GameDetailCard from "./GameDetailCard/GameDetailCard"
import GameDetailBody from "./GameDetailBody/GameDetailBody"
import Loader from "../UI/Loader"
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
      data: `fields cover.url, id, name, genres.name, screenshots.url,summary, release_dates.date,release_dates.human ,platforms.name; where slug = "${this.props.match.params.gameTitle}";`
    })
      .then(response => {
        this.setState({ gameDetail: response.data, loading: false })
      })
      .catch(err => {
        console.error(err)
      })
  }

  gettingCoverStyle = () => {
    let coverImageUrl
    if (this.state.gameDetail[0].screenshots) {
      coverImageUrl =
        "https:" +
        this.state.gameDetail[0].screenshots[0].url.replace(
          "t_thumb",
          "t_screenshot_big"
        )
    } else {
      coverImageUrl =
        "https://images.unsplash.com/photo-1496989981497-27d69cdad83e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=844&q=80"
    }

    let coverImageStyle = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${coverImageUrl})`
    }

    return coverImageStyle
  }

  getReleaseDateString() {
    let today13th = Date.now().toString()
    let today10th = parseInt(today13th.slice(0, 10))

    if (this.state.gameDetail[0].release_dates[0].date <= today10th) {
      return "Released on "
    } else {
      return "Will Be Released on "
    }
  }

  renderDetail() {
    if (this.state.loading) {
      return <div>ITS LOADING</div>
    } else {
      let gameDetails = this.state.gameDetail[0]
      let screenShots
      if (gameDetails.screenshots) {
        screenShots = gameDetails.screenshots.map(screenshot => {
          return <div key={screenshot.id}>ScreenShot URL: {screenshot.url}</div>
        })
      } else {
        screenShots = <div>No Screen Shot</div>
      }

      return (
        <div>
          <div
            className={classes.coverImg}
            style={this.gettingCoverStyle()}
          ></div>

          <div className={classes.headerWrapper}>
            <div className={classes.gameDetailCard}>
              <GameDetailCard
                coverUrl={
                  this.state.loading
                    ? "loading"
                    : this.state.gameDetail[0].cover.url
                }
              />
            </div>
            <div className={classes.headerTextChunk}>
              <div className={classes.gameName}>{gameDetails.name}</div>
              <div className={classes.releaseDate}>
                {this.getReleaseDateString()}
                {gameDetails.release_dates[0].human}
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  renderWholeDetailPage() {
    return (
      <Fragment>
        <div>{this.renderDetail()}</div>
      </Fragment>
    )
  }

  render() {
    console.log(this.state.gameDetail[0])
    return (
      <div className={classes.GameDetail}>
        {this.state.loading ? <Loader /> : this.renderWholeDetailPage()}
        <div className={classes.gameDetailBody}>
          <GameDetailBody />
        </div>

        <div className={classes.bodyWrapper}></div>
      </div>
    )
  }
}

export default withRouter(GameDetail)
