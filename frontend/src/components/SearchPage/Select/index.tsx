import React from 'react'
import { SelectOptions } from './styles'

interface Option {
  value: unknown
  label: string
}

interface SelectProps {
  options: Option[]
  SelectProps: unknown
}

export default function Select({ options, SelectProps }: SelectProps): JSX.Element {
  const customStyles = {
    control: (provided) => ({
      ...provided,
      ':hover': {
        borderColor: '#2684ff'
      }
    })
  }

  return <SelectOptions options={options} styles={customStyles} {...SelectProps} />
}
