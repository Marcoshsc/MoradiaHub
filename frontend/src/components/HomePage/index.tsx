import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import {
  BackGroundImage,
  HomePageMainDiv,
  ImageContainer,
  LocationForm,
  LocationTextField,
  Logo,
  SearchButton,
  Title
} from './styles'

const Home: React.FC = () => {
  const history = useHistory()

  const [city, setCity] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    history.push(`/search?city=${city}`)
  }

  return (
    <HomePageMainDiv>
      <ImageContainer>
        <Logo src="moradiahub.png" alt="Moradia Hub Logo" />
      </ImageContainer>
      <Title>Encontre uma moradia de maneira simples.</Title>
      <LocationForm onSubmit={handleSubmit}>
        <LocationTextField
          type="text"
          placeholder="Procure por uma cidade"
          maxLength={50}
          value={city}
          onChange={handleChange}
        />
        <SearchButton type="submit">Buscar moradias</SearchButton>
      </LocationForm>
      <BackGroundImage src="homebackground.jpg" alt="Moradia Hub Home Background" />
    </HomePageMainDiv>
  )
}

export default Home
