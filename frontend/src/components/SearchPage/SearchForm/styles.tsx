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
  border: 1px solid hsl(0, 0%, 70%);
  border-radius: 4px;
  outline: none;
  font-size: 14px;

  :hover {
    border-color: hsl(0, 0%, 50%);
  }

  :focus {
    border-color: hsl(0, 0%, 20%);
  }
`
