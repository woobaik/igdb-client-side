import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Homepage from "./components/Homepage"
import Navigation from "./components/navigation/Navigation"
import CategoryDetail from "./components/platformCategories/category/CategoryDetail"

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
            <CategoryDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
