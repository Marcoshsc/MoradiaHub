import styled from 'styled-components'

export const FieldsDiv = styled.div`
  width: 100%;
  display: flex;
  flex: 1 0;
  flex-flow: wrap;
`

export const SubmitDiv = styled.div`
  display: flex;
  margin: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 200px;
`

export const SubmitButton = styled.button`
  background-color: rgb(0, 96, 223);
  width: 100%;
  height: 50px;
  border: none;
  outline: none;
  color: white;
  font-size: 16px;
  font-weight: 600;
  border-radius: 5px;

  transition: 200ms ease-in;

  :hover {
    cursor: pointer;
    background-color: #0250bb;
    border-color: transparent;
    color: #fff;
  }

  :focus {
    background-color: #0250bb;
    border-color: transparent;
    color: #fff;
  }
`

export const SearchForm = styled.form`
  width: 100%;
  display: flex;
  flex: 1 0;
  flex-direction: column;
  padding: 10px;

  @media (max-width: 325px) {
    padding: 8px;
  }
`

export const TextField = styled.input`
  padding: 10px;
  border: 1px solid hsl(0, 0%, 70%);
  border-radius: 4px;
  outline: none;
  font-size: 14px;
  margin: -1px;
  width: 150px;

  :hover {
    border-color: #2684ff;
  }

  :focus {
    border-width: 2px;
    border-color: #2684ff;
  }

  @media (max-width: 325px) {
    width: 140px;
  }
`
