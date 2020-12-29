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
      borderColor: 'hsl(0, 0%, 70%)',
      boxShadow: 'hsl(0, 0%, 50%)',
      ':hover': {
        borderColor: 'hsl(0, 0%, 20%)'
      }
    })
  }

  return <SelectOptions options={options} styles={customStyles} {...SelectProps} />
}
