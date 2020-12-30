import styled from 'styled-components'

export const MainDiv = styled.div`
  width: 100%;
  background-color: white;
  border-top: 4px solid #2684ff;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
`

export const SearchDiv = styled.div`
  width: calc(100% - 40px);
`

export const SearchTitle = styled.h2`
  font-weight: 700;
  color: #20123a;
  font-size: 30px;
  margin: 0;
  padding: 20px;
`

export const ResultsDiv = styled.div`
  width: 100%;
  flex: 1 0;
  background-color: #f9f9fa;
  border-top: 4px solid #2684ff;
`
