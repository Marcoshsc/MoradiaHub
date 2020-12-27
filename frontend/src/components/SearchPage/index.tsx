import { useLocation } from 'react-router-dom'
import { MainDiv } from './styles'

const SearchPage: React.FC = () => {
  const useQuery = () => new URLSearchParams(useLocation().search)
  const query = useQuery()

  const city = query.get('city')

  return (
    <MainDiv>
      <h1>Search page</h1>
      <p>City: {city}</p>
    </MainDiv>
  )
}

export default SearchPage
