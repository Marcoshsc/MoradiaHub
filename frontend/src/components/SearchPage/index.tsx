import { useHistory, useLocation } from 'react-router-dom'
import { MainDiv, ResultsDiv, SearchDiv } from './styles'
import React from 'react'
import SearchForm, { SearchFormValues } from './SearchForm'

const SearchPage: React.FC = () => {
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
  }: SearchFormValues) => {
    history.push(
      `/search?city=${city}&neighbourhood=${neighbourhood}&gender=${gender}` +
        `&maxArea=${maxArea === null ? '' : maxArea}&minArea=${minArea === null ? '' : minArea}` +
        `&maxValue=${maxValue === null ? '' : maxValue}&minValue=${minValue === null ? '' : minValue}&people=${people}`
    )
  }

  return (
    <MainDiv>
      <SearchDiv>
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
        <p>City: {city}</p>
      </ResultsDiv>
    </MainDiv>
  )
}

export default SearchPage
