import MaskedInput from 'react-text-mask'
import styled from 'styled-components'

export const MaskedTextField = styled(MaskedInput)`
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
