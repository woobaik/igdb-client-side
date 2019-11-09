import React from "react"
import Homepage from "./components/Homepage"
import Navigation from "./components/navigation/Navigation"
import "./App.css"

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Homepage />
    </div>
  )
}

export default App
