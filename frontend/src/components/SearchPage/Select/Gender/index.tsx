import React from 'react'
import Select from '..'

export enum EnumGender {
  ALL,
  MALE,
  FEMALE
}

export function getGender(value: string): EnumGender {
  switch (value) {
    case 'ALL':
      return EnumGender.ALL
    case 'MALE':
      return EnumGender.MALE
    case 'FEMALE':
      return EnumGender.FEMALE
    default:
      return EnumGender.ALL
  }
}

function getLabel(value: EnumGender): string {
  switch (value) {
    case EnumGender.MALE:
      return 'Masculino'
    case EnumGender.FEMALE:
      return 'Feminino'
    case EnumGender.ALL:
      return 'Unissex'
    default:
      return 'Unissex'
  }
}

interface GenderSelectProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  SelectProps?: any
}

export default function GenderSelect({ SelectProps }: GenderSelectProps): JSX.Element {
  const genderOptions = [
    { value: EnumGender.ALL, label: getLabel(EnumGender.ALL) },
    { value: EnumGender.MALE, label: getLabel(EnumGender.MALE) },
    { value: EnumGender.FEMALE, label: getLabel(EnumGender.FEMALE) }
  ]

  return (
    <Select
      options={genderOptions}
      SelectProps={{
        ...SelectProps,
        value: { value: SelectProps.value, label: getLabel(SelectProps.value) }
      }}
    />
  )
}
