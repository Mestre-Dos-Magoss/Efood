import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import Delivery from '../Delivery'
import Payment from '../Payment'
import * as S from './styles'

import { close } from '../../store/reducers/cart'
import Cart from '../Cart'

const Aside = () => {
  const { isOpen, step } = useSelector((state: RootReducer) => state.cartSlice)
  const dispatch = useDispatch()

  const closeAside = () => {
    dispatch(close())
  }

  return (
    <S.AsideContainer className={isOpen ? 'open' : ''}>
      <S.Overlay onClick={closeAside} />
      <S.Sidebar>
        {step === 'cart' && <Cart />}
        {step === 'delivery' && <Delivery />}
        {step === 'payment' && <Payment />}
      </S.Sidebar>
    </S.AsideContainer>
  )
}

export default Aside
