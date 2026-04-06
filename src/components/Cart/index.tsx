import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import * as S from './styles'
import Button from '../Button'

import { remove } from '../../store/reducers/cart'
import { goToDelivery } from '../../store/reducers/cart'
import { parseToBRL, retornaTotal } from '../../utils'

const Cart = () => {
  const { itens } = useSelector((state: RootReducer) => state.cartSlice)
  const dispatch = useDispatch()

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goDelivery = () => {
    dispatch(goToDelivery())
  }

  return (
    <>
      {itens.length <= 0 ? (
        <S.EmptyItem>
          Para continuar comprando adicione um item ao carrinho.
        </S.EmptyItem>
      ) : (
        <>
          <S.CartContainer>
            <ul>
              {itens.map(({ nome, foto, preco, id }) => (
                <S.FoodItem key={id}>
                  <img src={foto} alt={nome} />
                  <div>
                    <h3>{nome}</h3>
                    <span>{parseToBRL(preco)}</span>
                  </div>
                  <button type="button" onClick={() => removeItem(id)} />
                </S.FoodItem>
              ))}
            </ul>
            <p>
              Valor total<span>{parseToBRL(retornaTotal(itens))}</span>
            </p>
            <Button
              type="button"
              action={goDelivery}
              title="Clique aqui para continuar com a compra"
            >
              Continuar com a entrega
            </Button>
          </S.CartContainer>
        </>
      )}
    </>
  )
}

export default Cart
