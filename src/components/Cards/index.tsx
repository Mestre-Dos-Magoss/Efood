import { useState } from 'react'
import { useDispatch } from 'react-redux'

import star from '../../assets/star.png'
import close from '../../assets/close 1.png'
import Tag from '../Tag'
import Button from '../Button'
import * as S from './styles'

import { add } from '../../store/reducers/cart'
import { open } from '../../store/reducers/cart'
import { parseToBRL } from '../../utils'

const FoodOption = ({
  name,
  description,
  image,
  review,
  tags,
  type,
  id,
  porcao,
  price,
  highlighted
}: Cards) => {
  const dispatch = useDispatch()

  function openCart() {
    dispatch(open())
  }

  function addItem() {
    if (name && description && image && id && porcao && price) {
      dispatch(
        add({
          nome: name,
          descricao: description,
          foto: image,
          id: id,
          porcao: porcao,
          preco: price
        })
      )
    }
    return <p>Os dados não chegaram</p>
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  function getDescriptionMenu(descricao: string): string {
    return descricao.slice(0, 144) + '...'
  }

  function getDescriptionRestaurant(descricao: string): string {
    return descricao.slice(0, 234) + '...'
  }

  const msgDestaque = 'Destaque da semana'

  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <>
      {type === 'restaurant' ? (
        <S.Container type={type}>
          <S.ImgProduto type="restaurant" src={image} alt={name} />
          <S.TagsProduto>
            {highlighted && <Tag>{msgDestaque}</Tag>}
            {tags && <Tag>{tags}</Tag>}
          </S.TagsProduto>
          <div>
            <S.InfosProduto type="restaurant">
              {name}
              <S.Reviews>
                {review} <img src={star} alt="Estrela" />
              </S.Reviews>
            </S.InfosProduto>
            <p>{getDescriptionRestaurant(description)}</p>
            <Button type="link" to={`/perfil/${id}`} title="Saiba mais">
              Saiba mais
            </Button>
          </div>
        </S.Container>
      ) : (
        <>
          <S.Container type={type}>
            <S.ImgProduto type="food" src={image} alt={name} />
            <div>
              <S.InfosProduto type="food">{name}</S.InfosProduto>
              <p>{getDescriptionMenu(description)}</p>
              <Button
                type="button"
                action={() => setModalIsOpen(true)}
                title={`Clique aqui para saber mais sobre o prato ${name}`}
              >
                Saiba mais
              </Button>
            </div>
          </S.Container>
          <S.ContainerModal className={modalIsOpen ? 'open' : ''}>
            <S.Modal className="container">
              <header>
                <img src={close} alt="Fechar o PopUp" onClick={closeModal} />
              </header>
              <img src={image} alt={name} />
              <div>
                <h3>{name}</h3>
                <p>
                  {description}
                  <br />
                  <br />
                  Serve: {porcao}
                </p>
                <Button
                  type="button"
                  title="Adicione este prato ao seu carrinho"
                  action={() => {
                    addItem()
                    closeModal()
                    openCart()
                  }}
                  to={'#'}
                >
                  <>Adicionar ao carrinho - {parseToBRL(price!)}</>
                </Button>
              </div>
            </S.Modal>
            <div className="overlay" onClick={closeModal}></div>
          </S.ContainerModal>
        </>
      )}
    </>
  )
}
export default FoodOption
