import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import MainComponent from './pages/main'

const App: React.FunctionComponent = () => {
  return (
    <Router basename="/">
      <MainComponent />
    </Router>
  )
}

export default App
