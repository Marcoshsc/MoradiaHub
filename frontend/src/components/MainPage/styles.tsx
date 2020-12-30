import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  justify-content: left;
  height: auto;
  flex: 0.05 0;
`

export const MainDiv = styled.div`
  width: 100%;
  height: calc(100vh - 10px);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`

export const ContentDiv = styled.div`
  width: 100%;
  display: flex;
  flex: 0.95 0;
  /* padding: 20px; */
`

export const NavBarLink = styled(Link)`
  font-size: 20px;
  padding: 25px;
  padding-top: 15px;
  /* color: black; */
  font-weight: 500;
  color: #20123a;
  text-decoration: underline;
  text-decoration-color: transparent;
  transition: 500ms;
  :hover {
    text-decoration-color: #20123a;
  }

  @media (max-width: 350px) {
    font-size: 16px;
  }
`
