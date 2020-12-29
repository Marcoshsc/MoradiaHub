import { useHistory, useLocation } from 'react-router-dom'
import { MainDiv, ResultsDiv, SearchComponentDiv, SearchDiv, SearchForm, TextField } from './styles'
import { useForm, Controller } from 'react-hook-form'
import React from 'react'
import FieldWithLabel from '../TextFields/FieldWithLabel'
import CurrencyField from '../TextFields/CurrencyField'
import AreaField from '../TextFields/AreaField'

const SearchPage: React.FC = () => {
  interface FormValues {
    city: string
    neighbourhood: string
    gender: string
    minValue: string
    maxValue: string
    minArea: string
    maxArea: string
    people: string
  }

  const { register, handleSubmit, control } = useForm()

  const useQuery = () => new URLSearchParams(useLocation().search)
  const query = useQuery()
  const history = useHistory()

  const city = query.get('city')
  const neighbourhood = query.get('neighbourhood')
  const gender = query.get('gender') || 'Todos'
  const minValue = query.get('minValue')
  const maxValue = query.get('maxValue')
  const minArea = query.get('minArea')
  const maxArea = query.get('maxArea')
  const people = query.get('people')

  const handleSubmitForm = ({
    city,
    gender,
    maxArea,
    maxValue,
    minArea,
    minValue,
    neighbourhood,
    people
  }: FormValues) => {
    const minValueNumber = Number.parseFloat(minValue.replace('R$', '').replace('.', '').replace(',', '.'))
    console.log(minValueNumber)
    history.push(
      `/search?city=${city}&neighbourhood=${neighbourhood}&gender=${gender}&maxArea=${maxArea}` +
        `&minArea=${minArea}&maxValue=${maxValue}&minValue=${minValue}&people=${people}`
    )
  }

  return (
    <MainDiv>
      <SearchDiv>
        <SearchForm onSubmit={handleSubmit(handleSubmitForm)}>
          <SearchComponentDiv>
            <FieldWithLabel labelFor="city-field" label="Cidade">
              <TextField ref={register} id="city-field" type="text" name="city" placeholder="Cidade" />
            </FieldWithLabel>
            <FieldWithLabel labelFor="neighbourhood-field" label="Bairro">
              <TextField
                ref={register}
                id="neighbourhood-field"
                type="text"
                name="neighbourhood"
                placeholder="Bairro"
              />
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
      </SearchDiv>
      <ResultsDiv>
        <p>City: {city}</p>
      </ResultsDiv>
    </MainDiv>
  )
}

export default SearchPage
