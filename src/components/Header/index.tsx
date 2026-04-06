import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.svg'
import * as S from './styles'

import { open } from '../../store/reducers/cart'

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

    return () => window.removeEventListener('scroll', scrollMonitor)
  }, [])

  const openModal = () => {
    dispatch(open())
  }

  return (
    <>
      {type === 'home' ? (
        <S.Container type={type} position={visible}>
          <div className="container">
            <Link to="/">
              <S.Logo>
                <img src={logo} alt="logo" />
              </S.Logo>
            </Link>
            <S.Text>
              <h2>Viva experiências gastronômicas no conforto da sua casa</h2>
            </S.Text>
          </div>
        </S.Container>
      ) : (
        <S.Container position={visible} type={type}>
          <div className="container">
            <S.NavContainer>
              <S.Linke to="/">Restaurantes</S.Linke>
              <Link to="/">
                <S.Logo>
                  <img src={logo} alt="logo" />
                </S.Logo>
              </Link>
              <S.LinkCart onClick={openModal}>
                {itens.length} produto{itens.length > 1 && 's'} no carrinho
              </S.LinkCart>
            </S.NavContainer>
          </div>
        </S.Container>
      )}
    </>
  )
}
export default Header
