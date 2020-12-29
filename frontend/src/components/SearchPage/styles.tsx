import MaskedInput from 'react-text-mask'
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

export const SearchComponentDiv = styled.div`
  width: 100%;
  display: grid;
  gap: 20px;
  grid-template-columns: calc(50% - 10px) calc(50% - 10px);

  @media (max-width: 1820px) {
    grid-template-columns: 100%;
  }
`

export const SearchForm = styled.form`
  width: calc(100% - 60px);
  display: grid;
  gap: 20px;
  padding: 10px;
  grid-template-columns: 100%;
`

export const TextField = styled.input`
  width: 100%;
  padding: 10px;
  border: 2px solid rgba(193, 194, 190, 0.6);
  border-radius: 10px;
  outline: none;
  font-size: 14px;
  :focus {
    border-color: rgba(193, 194, 190, 1);
  }
`

export const ResultsDiv = styled.div`
  width: 70%;
  height: 100%;
`
