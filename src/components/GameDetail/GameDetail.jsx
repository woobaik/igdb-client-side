import React from "react"
import axios from "axios"
import { API_KEY } from "../../.config"
import { withRouter } from "react-router"

import platformIdFinder from "../../script/platformFinder"
class GameDetail extends React.Component {
  state = {
    gameDetail: []
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
      data: `fields *; where slug = "${this.props.match.params.gameTitle}" & platforms = ${platformId};`
    })
      .then(response => {
        this.setState({ gameDetail: response.data })
      })
      .catch(err => {
        console.error(err)
      })
  }
  render() {
    console.log("State", this.state.gameDetail[0])
    return (
      <div className='GameDetail'>
        <div>hi</div>
      </div>
    )
  }
}

export default withRouter(GameDetail)
