import { useParams } from 'react-router-dom'
import { useGetRestaurantAndFoodsQuery } from '../../services/api'

import Banner from '../../components/Banner'
import CardList from '../../components/Card_List'
import Cards from '../../components/Cards'
import Cart from '../../components/Cart'

const Perfil = () => {
  const { id } = useParams()
  const { data: menu } = useGetRestaurantAndFoodsQuery(id!)

  if (menu) {
    return (
      <>
        <Cart />
        <Banner />
        <CardList view="food">
          {menu.cardapio.map((dado) => (
            <li key={dado.id}>
              <Cards
                type={'food'}
                name={dado.nome}
                image={dado.foto}
                description={dado.descricao}
                id={dado.id}
                porcao={dado.porcao}
                price={dado.preco}
              />
            </li>
          ))}
        </CardList>
      </>
    )
  }

  return <h4>Carregando</h4>
}

export default Perfil
