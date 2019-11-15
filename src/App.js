import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import PlatformCategory from "./components/platformCategories/PlatformCategories"
import Navigation from "./components/navigation/Navigation"
import CategoryDetail from "./components/platformCategories/category/CategoryDetail"
import GameDetail from "./components/GameDetail/GameDetail"
import "./App.css"

function App() {
  return (
    <Router>
      <div className='App'>
        <Navigation />
        <Switch>
          <Route exact path='/platforms/:platform' component={CategoryDetail} />
          >
          <Route
            exact
            path='/platforms/:platform/:gameTitle'
            component={GameDetail}
          />
          <Route exact path='/' component={PlatformCategory} />>
        </Switch>
      </div>
    </Router>
  )
}

export default App
