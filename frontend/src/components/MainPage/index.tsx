import React from 'react'
import { Route } from 'react-router-dom'
import About from '../AboutPage'
import Home from '../HomePage'
import { MainDiv, NavBar, NavBarLink, ContentDiv } from './styles'
import { AnimatedSwitch } from 'react-router-transition'

const MainPage: React.FC = () => {
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

export default MainPage
