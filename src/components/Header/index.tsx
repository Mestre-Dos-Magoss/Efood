import logo from '../../assets/logo.svg'
import { Container, Link, Logo, NavContainer, Text } from './styles'

export type Props = {
  type: 'home' | 'pefil'
}

const Header = ({ type = 'home' }: Props) => (
  <>
    {type === 'home' ? (
      <Container type={type}>
        <div className="container">
          <Logo>
            <img src={logo} alt="logo" />
          </Logo>
          <Text>
            <h2>Viva experiências gastronômicas no conforto da sua casa</h2>
          </Text>
        </div>
      </Container>
    ) : (
      <Container type={type}>
        <div className="container">
          <NavContainer>
            <Link>Restaurantes</Link>
            <Logo>
              <img src={logo} alt="logo" />
            </Logo>
            <Link>0 produto(s) no carrinho</Link>
          </NavContainer>
        </div>
      </Container>
    )}
  </>
)

export default Header
