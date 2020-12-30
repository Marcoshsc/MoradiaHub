import { useHistory, useLocation } from 'react-router-dom'
import { MainDiv, ResultsDiv, SearchDiv, SearchTitle } from './styles'
import React from 'react'
import SearchForm, { SearchFormValues } from './SearchForm'
import { EnumGender, getGender } from './Select/Gender'
import { EnumPeople, getPeople } from './Select/People'

const SearchPage: React.FC = () => {
  const useQuery = () => new URLSearchParams(useLocation().search)
  const query = useQuery()
  const history = useHistory()

  const city = query.get('city')
  const neighbourhood = query.get('neighbourhood')
  const gender = getGender(query.get('gender'))
  const minValue = query.get('minValue')
  const maxValue = query.get('maxValue')
  const minArea = query.get('minArea')
  const maxArea = query.get('maxArea')
  const people = getPeople(query.get('people'))

  const handleSubmitForm = ({
    city,
    gender,
    maxArea,
    maxValue,
    minArea,
    minValue,
    neighbourhood,
    people
  }: SearchFormValues) => {
    console.log(gender)
    history.push(
      `/search?city=${city}&neighbourhood=${neighbourhood}&gender=${EnumGender[gender]}` +
        `&maxArea=${maxArea === null ? '' : maxArea}&minArea=${minArea === null ? '' : minArea}` +
        `&maxValue=${maxValue === null ? '' : maxValue}&minValue=${minValue === null ? '' : minValue}` +
        `&people=${EnumPeople[people]}`
    )
  }

  return (
    <MainDiv>
      <SearchDiv>
        <SearchTitle>Filtros de Busca</SearchTitle>
        <SearchForm
          values={{
            city: city,
            neighbourhood: neighbourhood,
            gender: gender,
            minValue: minValue,
            maxValue: maxValue,
            minArea: minArea,
            maxArea: maxArea,
            people: people
          }}
          onSubmit={handleSubmitForm}
        />
      </SearchDiv>
      <ResultsDiv>
        <SearchTitle>Resultados da Busca</SearchTitle>
        <p>City: {city}</p>
      </ResultsDiv>
    </MainDiv>
  )
}

export default SearchPage
