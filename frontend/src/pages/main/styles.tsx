import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  justify-content: left;
  height: auto;
  height: 5%;
`

export const MainDiv = styled.div`
  width: 100%;
  height: calc(100vh - 40px);
`

export const ContentDiv = styled.div`
  width: calc(100% - 40px);
  height: calc(95% - 40px);
  padding: 20px;
`

export const NavBarLink = styled(Link)`
  font-size: 20px;
  padding: 25px;
  padding-top: 15px;
  color: black;
  text-decoration: underline;
  text-decoration-color: transparent;
  transition: 500ms;
  :hover {
    text-decoration-color: black;
  }
`
