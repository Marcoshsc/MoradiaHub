import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import AreaField from '../../TextFields/AreaField'
import CurrencyField from '../../TextFields/CurrencyField'
import FieldWithLabel from '../../TextFields/FieldWithLabel'
import { SearchComponentDiv, SearchForm, TextField } from './styles'

interface SearchFormProps {
  onSubmit(values: SearchFormValues): void
  values: SearchFormValues
}

export interface SearchFormValues {
  city: string
  neighbourhood: string
  gender: string
  minValue: string
  maxValue: string
  minArea: string
  maxArea: string
  people: string
}

export default function SearchFormComponent({ onSubmit, values }: SearchFormProps): JSX.Element {
  const { register, handleSubmit, control } = useForm()

  const city = values.city
  const neighbourhood = values.neighbourhood
  const gender = values.gender || 'Todos'
  const minValue = values.minValue
  const maxValue = values.maxValue
  const minArea = values.minArea
  const maxArea = values.maxArea
  const people = values.people

  return (
    <SearchForm onSubmit={handleSubmit(onSubmit)}>
      <SearchComponentDiv>
        <FieldWithLabel labelFor="city-field" label="Cidade">
          <TextField ref={register} value={city} id="city-field" type="text" name="city" placeholder="Cidade" />
        </FieldWithLabel>
        <FieldWithLabel labelFor="neighbourhood-field" label="Bairro">
          <TextField ref={register} id="neighbourhood-field" type="text" name="neighbourhood" placeholder="Bairro" />
        </FieldWithLabel>
      </SearchComponentDiv>
      <SearchComponentDiv>
        <FieldWithLabel labelFor="gender-field" label="Gênero">
          <TextField ref={register} id="gender-field" type="number" name="people" placeholder="Gênero" />
        </FieldWithLabel>
        <FieldWithLabel labelFor="people-field" label="Pessoas/Quarto">
          <TextField ref={register} type="text" id="people-field" name="gender" placeholder="Valor" />
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
