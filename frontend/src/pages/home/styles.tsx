import styled, { keyframes } from 'styled-components'

const fadeInFirst = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const fadeInImage = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 0.25;
  }
`

const fadeInSecond = keyframes`
  0% {
    opacity: 0;
  }
  66% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const fadeInThird = keyframes`
  0% {
    opacity: 0;
  }
  75% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const HomePageMainDiv = styled.div`
  width: 100%;
  margin: 0;
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
`

export const BackGroundImage = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0.25;
  position: absolute;
  z-index: -1;
  animation: ${fadeInImage} 1s linear;
  box-shadow: 0 0 10px 10px #e2dbc1;
`

export const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  animation: ${fadeInFirst} 2s ease-in;
`

export const Logo = styled.img`
  box-sizing: border-box;
  display: block;
`

export const Title = styled.h1`
  text-align: center;
  color: black;
  font-size: 28px;
  font-weight: 200;
  animation: ${fadeInSecond} 3s ease-in;
`

export const LocationForm = styled.form`
  padding: 20px;
  display: grid;
  grid-template-columns: 400px 200px;
  gap: 20px;
  margin-left: auto;
  margin-right: auto;
  animation: ${fadeInThird} 4s ease-in;

  @media (max-width: 600px) {
    grid-template-columns: 400px;
  }

  @media (max-width: 414px) {
    grid-template-columns: 300px;
  }

  @media (max-width: 320px) {
    grid-template-columns: 250px;
    gap: 10px;
    padding: 10px;
  }
`

export const LocationTextField = styled.input`
  width: calc(100% - 40px);
  padding: 20px;
  border: 2px solid rgba(193, 194, 190, 0.6);
  border-radius: 20px;
  outline: none;
  font-size: 16px;
  :focus {
    border-color: rgba(193, 194, 190, 1);
  }

  @media (max-width: 600px) {
    text-align: center;
  }
`

export const SearchButton = styled.button`
  background-color: rgba(89, 194, 182, 0.6);
  width: calc(100% - 40px);
  border: none;
  border: 2px solid rgba(89, 194, 182, 0.8);
  border-radius: 20px;
  padding: 10px;
  outline: none;
  font-size: 16px;
  color: black;
  font-weight: 400;
  transition: 500ms;
  :hover {
    cursor: pointer;
    background-color: rgba(89, 194, 182, 0.8);
    border-color: rgba(89, 194, 182, 1);
  }
  :focus {
    border-color: #48aa9f;
  }

  @media (max-width: 600px) {
    margin-left: auto;
    margin-right: auto;
  }
`
