import CardList from '../../components/Card_List'
import Cards from '../../components/Cards'
import Loader from '../../components/Loader'

import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: restaurant } = useGetRestaurantsQuery()

  if (restaurant) {
    return (
      <CardList view="restaurant">
        {restaurant.map((restaurante) => (
          <li key={restaurante.id}>
            <Cards
              key={restaurante.id}
              type={'restaurant'}
              name={restaurante.titulo}
              image={restaurante.capa}
              description={restaurante.descricao}
              review={restaurante.avaliacao}
              id={restaurante.id}
              tags={restaurante.tipo}
              highlighted={restaurante.destacado}
            />
          </li>
        ))}
      </CardList>
    )
  }

  return <Loader />
}

export default Home
