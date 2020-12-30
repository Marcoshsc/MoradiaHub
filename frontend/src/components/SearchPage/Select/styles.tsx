import styled from 'styled-components'
import Select from 'react-select'

export const SelectOptions = styled(Select)`
  min-width: 172px;
  width: 172px;

  @media (max-width: 325px) {
    width: 162px;
    min-width: 162px;
  }
`
