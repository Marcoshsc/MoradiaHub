import MaskedInput from 'react-text-mask'
import styled from 'styled-components'

export const MaskedTextField = styled(MaskedInput)`
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
