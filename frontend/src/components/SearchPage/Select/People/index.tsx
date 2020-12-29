import React from 'react'
import Select from '..'

export enum EnumPeople {
  ONE,
  TWO,
  THREE,
  FOUR_PLUS,
  ALL
}

export function getPeople(value: string): EnumPeople {
  switch (value) {
    case 'ALL':
      return EnumPeople.ALL
    case 'ONE':
      return EnumPeople.ONE
    case 'TWO':
      return EnumPeople.TWO
    case 'THREE':
      return EnumPeople.THREE
    case 'FOUR_PLUS':
      return EnumPeople.FOUR_PLUS
    default:
      return EnumPeople.ALL
  }
}

function getLabel(value: EnumPeople): string {
  switch (value) {
    case EnumPeople.ONE:
      return '1 Pessoa'
    case EnumPeople.TWO:
      return '2 Pessoas'
    case EnumPeople.THREE:
      return '3 Pessoas'
    case EnumPeople.FOUR_PLUS:
      return '4 ou mais'
    case EnumPeople.ALL:
      return 'Qualquer'
    default:
      return 'Qualquer'
  }
}

interface PeopleSelectProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  SelectProps?: any
}

export default function PeopleSelect({ SelectProps }: PeopleSelectProps): JSX.Element {
  const peopleOptions = [
    { value: EnumPeople.ONE, label: getLabel(EnumPeople.ONE) },
    { value: EnumPeople.TWO, label: getLabel(EnumPeople.TWO) },
    { value: EnumPeople.THREE, label: getLabel(EnumPeople.THREE) },
    { value: EnumPeople.FOUR_PLUS, label: getLabel(EnumPeople.FOUR_PLUS) },
    { value: EnumPeople.ALL, label: getLabel(EnumPeople.ALL) }
  ]

  return (
    <Select
      options={peopleOptions}
      SelectProps={{
        ...SelectProps,
        value: { value: SelectProps.value, label: getLabel(SelectProps.value) }
      }}
    />
  )
}
