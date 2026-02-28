import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { Container, Linke, Logo, NavContainer, Text } from './styles'

export type Props = {
  type: 'home' | 'perfil'
}

const Header = ({ type = 'home' }: Props) => (
  <>
    {type === 'home' ? (
      <Container type={type}>
        <div className="container">
          <Link to="/">
            <Logo>
              <img src={logo} alt="logo" />
            </Logo>
          </Link>
          <Text>
            <h2>Viva experiências gastronômicas no conforto da sua casa</h2>
          </Text>
        </div>
      </Container>
    ) : (
      <Container type={type}>
        <div className="container">
          <NavContainer>
            <Linke to="/">Restaurantes</Linke>
            <Link to="/">
              <Logo>
                <img src={logo} alt="logo" />
              </Logo>
            </Link>
            <Linke to="/shoppingcart">0 produto(s) no carrinho</Linke>
          </NavContainer>
        </div>
      </Container>
    )}
  </>
)

export default Header
