import React from "react"
import { HashRouter as Router, Switch, Route } from "react-router-dom"

import HomePage from "./pages/Homepage"
import PlatformCategory from "./components/platformCategories/PlatformCategories"
import Navigation from "./components/navigation/Navigation"
import CategoryDetail from "./components/platformCategories/category/CategoryDetail"
import GameDetail from "./components/GameDetail/GameDetail"
import FloatingButton from "./components/UI/floatingButton/floatingButton"
import Footer from "./components/Footer/Footer"
import "./App.css"

function App() {
  return (
    <Router>
      <div className='App'>
        <Navigation />
        <Switch>
          <Route
            basename={process.env.PUBLIC_URL}
            exact
            path='/upcoming-games/:platform'
            component={CategoryDetail}
          />
          >
          <Route exact path='/recent/:platform' component={CategoryDetail} />>
          <Route exact path='/games/:gameTitle' component={GameDetail}></Route>
          <Route exact path='/platforms' component={PlatformCategory} />>
          <Route exact path='/' component={HomePage} />>
        </Switch>
      </div>
      <div className='floatingBtn'>
        <FloatingButton />
      </div>
      <Footer />
    </Router>
  )
}

export default App
