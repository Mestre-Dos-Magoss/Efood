import { useEffect, useState } from 'react'
import CardList from '../../components/Card_List'
import Cards from '../../components/Cards'
import { Restaurants } from '../../types/restaurant'

const Home = () => {
  const [restaurant, setRestaurant] = useState<Restaurants[]>([])

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [])

  if (!restaurant) return <h4>Carregando</h4>

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

export default Home
