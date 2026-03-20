import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { close, remove } from '../../store/reducers/cart'
import { FormatPrice } from '../../utils/formatPrices'

import { CartContainer, Sidebar, Overlay, FoodItem } from './styles'
import Button from '../Button'

const Cart = () => {
  const { itens, isOpen } = useSelector((state: RootReducer) => state.cartSlice)
  const dispatch = useDispatch()

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const retornaTotal = (): number => {
    return itens.reduce((total, price) => {
      return (total += price.preco)
    }, 0)
  }

  const closeModal = () => {
    dispatch(close())
  }

  return (
    <CartContainer className={isOpen ? 'open' : ''}>
      <Overlay onClick={closeModal} />
      <Sidebar>
        <ul>
          {itens.map(({ nome, foto, preco, id }) => (
            <FoodItem>
              <img src={foto} alt={nome} />
              <div>
                <h3>{nome}</h3>
                <span>{FormatPrice(preco)}</span>
              </div>
              <button type="button" onClick={() => removeItem(id)} />
            </FoodItem>
          ))}
        </ul>
        <p>
          Valor total<span>{FormatPrice(retornaTotal())}</span>
        </p>
        <Button title="Clique aqui para continuar com a compra">
          Continuar com a entrega
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
