import styled from 'styled-components'

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
