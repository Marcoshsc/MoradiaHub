import React from 'react'
import { FieldLabelDiv } from './styles'

interface FieldWithLabelProps {
  labelFor: string
  label: string
  children: React.ReactNode
}

export default function FieldWithLabel({ labelFor, label, children }: FieldWithLabelProps): JSX.Element {
  return (
    <FieldLabelDiv>
      <label htmlFor={labelFor}>{label}</label>
      {children}
    </FieldLabelDiv>
  )
}
