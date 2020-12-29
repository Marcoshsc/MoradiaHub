import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import AreaField from '../../TextFields/AreaField'
import CurrencyField from '../../TextFields/CurrencyField'
import FieldWithLabel from '../../TextFields/FieldWithLabel'
import GenderSelect, { EnumGender } from '../Select/Gender'
import PeopleSelect, { EnumPeople } from '../Select/People'
import { SearchComponentDiv, SearchForm, TextField } from './styles'

interface SearchFormProps {
  onSubmit(values: SearchFormValues): void
  values: SearchFormValues
}

export interface SearchFormValues {
  city: string
  neighbourhood: string
  gender: EnumGender
  minValue: string
  maxValue: string
  minArea: string
  maxArea: string
  people: EnumPeople
}

export default function SearchFormComponent({ onSubmit, values }: SearchFormProps): JSX.Element {
  const { register, handleSubmit, control } = useForm()

  const city = values.city
  const neighbourhood = values.neighbourhood
  const gender = values.gender
  const minValue = values.minValue
  const maxValue = values.maxValue
  const minArea = values.minArea
  const maxArea = values.maxArea
  const people = values.people

  return (
    <SearchForm onSubmit={handleSubmit(onSubmit)}>
      <SearchComponentDiv>
        <FieldWithLabel labelFor="city-field" label="Cidade">
          <TextField ref={register} defaultValue={city} id="city-field" type="text" name="city" placeholder="Cidade" />
        </FieldWithLabel>
        <FieldWithLabel labelFor="neighbourhood-field" label="Bairro">
          <TextField
            ref={register}
            defaultValue={neighbourhood}
            id="neighbourhood-field"
            type="text"
            name="neighbourhood"
            placeholder="Bairro"
          />
        </FieldWithLabel>
      </SearchComponentDiv>
      <SearchComponentDiv>
        <FieldWithLabel labelFor="gender-field" label="Gênero">
          <Controller
            name="gender"
            defaultValue={gender}
            control={control}
            render={({ onChange, value }) => (
              <GenderSelect
                SelectProps={{
                  id: 'gender-field',
                  onChange: (e) => onChange(e.value),
                  value: value
                }}
              />
            )}
          />
        </FieldWithLabel>
        <FieldWithLabel labelFor="people-field" label="Pessoas/Quarto">
          <Controller
            name="people"
            defaultValue={people}
            control={control}
            render={({ onChange, value }) => (
              <PeopleSelect
                SelectProps={{
                  id: 'people-field',
                  onChange: (e) => onChange(e.value),
                  value: value
                }}
              />
            )}
          />
        </FieldWithLabel>
      </SearchComponentDiv>
      <SearchComponentDiv>
        <FieldWithLabel labelFor="minValue-field" label="Valor Mínimo">
          <Controller
            name="minValue"
            defaultValue={minValue}
            control={control}
            render={({ onChange, value }) => (
              <CurrencyField
                locale="pt"
                MaskedInputProps={{
                  id: 'minValue-field',
                  onChange: onChange,
                  value: value,
                  placeholder: 'R$0,00'
                }}
              />
            )}
          />
        </FieldWithLabel>
        <FieldWithLabel labelFor="maxValue-field" label="Valor Máximo">
          <Controller
            name="maxValue"
            defaultValue={maxValue}
            control={control}
            render={({ onChange, value }) => (
              <CurrencyField
                locale="pt"
                MaskedInputProps={{
                  id: 'maxValue-field',
                  onChange: onChange,
                  value: value,
                  placeholder: 'R$0,00'
                }}
              />
            )}
          />
        </FieldWithLabel>
      </SearchComponentDiv>
      <SearchComponentDiv>
        <FieldWithLabel labelFor="minArea-field" label="Área mínima">
          <Controller
            name="minArea"
            defaultValue={minArea}
            control={control}
            render={({ onChange, value }) => (
              <AreaField
                MaskedInputProps={{
                  id: 'minArea-field',
                  onChange: onChange,
                  value: value,
                  placeholder: '0m²'
                }}
              />
            )}
          />
        </FieldWithLabel>
        <FieldWithLabel labelFor="maxArea-field" label="Área máxima">
          <Controller
            name="maxArea"
            defaultValue={maxArea}
            control={control}
            render={({ onChange, value }) => (
              <AreaField
                MaskedInputProps={{
                  id: 'maxArea-field',
                  onChange: onChange,
                  value: value,
                  placeholder: '0m²'
                }}
              />
            )}
          />
        </FieldWithLabel>
      </SearchComponentDiv>
      <button type="submit">Submit</button>
    </SearchForm>
  )
}
