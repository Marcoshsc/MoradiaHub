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
  return (
    <HomePageMainDiv>
      <ImageContainer>
        <Logo src="moradiahub.png" alt="Moradia Hub Logo" />
      </ImageContainer>
      <Title>Encontre uma moradia de maneira simples.</Title>
      <LocationForm>
        <LocationTextField type="text" placeholder="Procure por uma cidade" maxLength={50} />
        <SearchButton type="submit">Buscar moradias</SearchButton>
      </LocationForm>
      <BackGroundImage src="homebackground.jpg" alt="Moradia Hub Home Background" />
    </HomePageMainDiv>
  )
}

export default Home
