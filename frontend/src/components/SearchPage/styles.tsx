import styled from 'styled-components'

export const MainDiv = styled.div`
  width: calc(100% - 40px);
  /* background-color: rgba(255, 255, 255, 0.8); */
  border-radius: 15px;
  height: calc(100% - 40px);
  /* border: 4px solid rgba(89, 194, 182, 0.2); */
  padding: 20px;
  overflow: auto;
  display: flex;
  flex-direction: row;
`

export const SearchDiv = styled.div`
  width: calc(30% - 40px);
  height: 100%;
  /* border-right: 4px solid rgba(89, 194, 182, 0.2); */
`

export const ResultsDiv = styled.div`
  width: 70%;
  height: 100%;
`
