import React from 'react'
import { BrowserRouter as Router, HashRouter } from 'react-router-dom'
import MainComponent from './pages/main'

const App: React.FunctionComponent = () => {
  return process.env.REACT_APP_DEPLOY_ENVIRONMENT && process.env.REACT_APP_DEPLOY_ENVIRONMENT === 'github' ? (
    <HashRouter>
      <MainComponent />
    </HashRouter>
  ) : (
    <Router>
      <MainComponent />
    </Router>
  )
}

export default App
