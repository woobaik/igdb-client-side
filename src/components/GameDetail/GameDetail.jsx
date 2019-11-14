import React from "react"
import axios from "axios"
import { API_KEY } from "../../.config"
class GameDetail extends React.Component {
  state = {
    gameDetail: []
  }

  componentDidMount() {
    axios({
      url: "/search",
      method: "POST",
      headers: {
        Accept: "application/json",
        "user-key": API_KEY
      },
      data: "fields *; search 'sonic the hedgehog'; limit 50;"
    })
      .then(response => {
        console.log(response.data)
      })
      .catch(err => {
        console.error(err)
      })
  }
  render() {
    console.log(API_KEY)
    return <div>Slug</div>
  }
}

export default GameDetail
