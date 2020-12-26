import React from 'react'
import { Link, Route } from 'react-router-dom'
import About from '../about'
import Home from '../home'
import { MainDiv, NavBar, ContentDiv, NavBarLink } from './styles'

const MainComponent: React.FC = () => {
  return (
    <MainDiv>
      <NavBar>
        <NavBarLink to="/">Home</NavBarLink>
        <NavBarLink to="/about">Sobre</NavBarLink>
      </NavBar>
      <ContentDiv>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </ContentDiv>
    </MainDiv>
  )
}

export default MainComponent
