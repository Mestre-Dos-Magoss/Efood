import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { Link } from 'react-router-dom'

import { open } from '../../store/reducers/cart'

import logo from '../../assets/logo.svg'
import { Container, LinkCart, Linke, Logo, NavContainer, Text } from './styles'

export type Props = {
  type: 'home' | 'perfil'
}

const Header = ({ type = 'home' }: Props) => {
  const [visible, setVisible] = useState(true)
  const { itens } = useSelector((state: RootReducer) => state.cartSlice)
  const dispatch = useDispatch()

  useEffect(() => {
    const scrollMonitor = () => {
      setVisible(window.scrollY > 180) // verificando a posição
    }

    window.addEventListener('scroll', scrollMonitor) // ativando a verificação

    return () => removeEventListener('scroll', scrollMonitor)
  }, [])

  const openModal = () => {
    dispatch(open())
  }

  console.log(visible)
  return (
    <>
      {type === 'home' ? (
        <Container type={type} position={visible}>
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
        <Container position={visible} type={type}>
          <div className="container">
            <NavContainer>
              <Linke to="/">Restaurantes</Linke>
              <Link to="/">
                <Logo>
                  <img src={logo} alt="logo" />
                </Logo>
              </Link>
              <LinkCart onClick={openModal}>
                {itens.length} produto{itens.length > 1 && 's'} no carrinho
              </LinkCart>
            </NavContainer>
          </div>
        </Container>
      )}
    </>
  )
}
export default Header
