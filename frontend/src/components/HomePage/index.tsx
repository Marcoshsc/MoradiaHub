import React from 'react'
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
  interface FormValues {
    city: string
  }

  const history = useHistory()

  const handleSubmit = ({ city }: FormValues) => {
    history.push(`/search?city=${city}`)
  }

  return (
    <HomePageMainDiv>
      <ImageContainer>
        <Logo src="moradiahub.png" alt="Moradia Hub Logo" />
      </ImageContainer>
      <Title>Encontre uma moradia de maneira simples.</Title>
      <LocationForm>
        <LocationTextField name="city" type="text" placeholder="Procure por uma cidade" maxLength={50} />
        <SearchButton type="submit">Buscar moradias</SearchButton>
      </LocationForm>
      <BackGroundImage src="homebackground.jpg" alt="Moradia Hub Home Background" />
    </HomePageMainDiv>
  )
}

export default Home
