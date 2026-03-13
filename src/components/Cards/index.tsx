import { useState } from 'react'
import star from '../../assets/star.png'
import close from '../../assets/close 1.png'

import {
  Container,
  ContainerModal,
  ImgProduto,
  InfosProduto,
  Modal,
  Reviews,
  TagsProduto
} from './styles'
import Tag from '../Tag'
import Button from '../Button'
import { Cards } from '../../types/Cards'

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
  function getDescriptionMenu(descricao: string): string {
    return descricao.slice(0, 144) + '...'
  }

  function getDescriptionRestaurant(descricao: string): string {
    return descricao.slice(0, 234) + '...'
  }

  const msgDestaque = 'Destaque da semana'

  function formataPrecos(valor = 0): number | string {
    if (!valor || valor === 0) return ' Preço não informado.'
    return new Intl.NumberFormat('pr-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 2,
      minimumFractionDigits: 2
    }).format(valor)
  }
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <>
      {type === 'restaurant' ? (
        <Container type={type}>
          <ImgProduto type="restaurant" src={image} alt={name} />
          <TagsProduto>
            {highlighted && <Tag>{msgDestaque}</Tag>}
            {tags && <Tag>{tags}</Tag>}
          </TagsProduto>
          <div>
            <InfosProduto type="restaurant">
              {name}
              <Reviews>
                {review} <img src={star} alt="Estrela" />
              </Reviews>
            </InfosProduto>
            <p>{getDescriptionRestaurant(description)}</p>
            <Button to={`/perfil/${id}`} title="Saiba mais">
              Saiba mais
            </Button>
          </div>
        </Container>
      ) : (
        <>
          <Container type={type}>
            <ImgProduto type="food" src={image} alt={name} />
            <div>
              <InfosProduto type="food">{name}</InfosProduto>
              <p>{getDescriptionMenu(description)}</p>
              <Button action={() => setModalIsOpen(true)} title="Saiba mais">
                Saiba mais
              </Button>
            </div>
          </Container>
          <ContainerModal className={modalIsOpen ? 'open' : ''}>
            <Modal className="container">
              <header>
                <img
                  src={close}
                  alt="Fechar o PopUp"
                  onClick={() => setModalIsOpen(false)}
                />
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
                <Button title="Adicione este prato ao seu carrinho" to={'#'}>
                  <>Adicionar ao carrinho - {formataPrecos(price)}</>
                </Button>
              </div>
            </Modal>
            <div
              className="overlay"
              onClick={() => setModalIsOpen(false)}
            ></div>
          </ContainerModal>
        </>
      )}
    </>
  )
}
export default FoodOption
