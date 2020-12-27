import React from 'react'
import { Link, Route } from 'react-router-dom'
import About from '../about'
import Home from '../home'
import { MainDiv, NavBar, ContentDiv, NavBarLink } from './styles'
import { AnimatedSwitch } from 'react-router-transition'

const MainComponent: React.FC = () => {
  return (
    <MainDiv>
      <NavBar>
        <NavBarLink to="/">Home</NavBarLink>
        <NavBarLink to="/about">Sobre</NavBarLink>
      </NavBar>
      <ContentDiv>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </AnimatedSwitch>
      </ContentDiv>
    </MainDiv>
  )
}

export default MainComponent
