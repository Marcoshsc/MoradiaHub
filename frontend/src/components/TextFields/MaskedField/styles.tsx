import MaskedInput from 'react-text-mask'
import styled from 'styled-components'

export const MaskedTextField = styled(MaskedInput)`
  padding: 10px;
  border: 1px solid hsl(0, 0%, 70%);
  border-radius: 4px;
  outline: none;
  font-size: 14px;
  width: 150px;

  :hover {
    border-color: #2684ff;
  }

  :focus {
    margin: -1px;
    border-width: 2px;
    border-color: #2684ff;
  }

  @media (max-width: 325px) {
    width: 140px;
  }
`
