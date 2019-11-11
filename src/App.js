import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Homepage from "./components/Homepage"
import Navigation from "./components/navigation/Navigation"
import Category from "./components/platformCategories/category/Category"

import "./App.css"

function App() {
  return (
    <Router>
      <div className='App'>
        <Navigation />
        <Switch>
          <Route exact path='/'>
            <Homepage />
          </Route>
          <Route exact path='/platforms'>
            <Homepage />
          </Route>
          <Route exact path='/platforms/:platform'>
            <Category />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
