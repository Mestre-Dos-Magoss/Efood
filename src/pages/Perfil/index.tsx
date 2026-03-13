import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import CardList from '../../components/Card_List'
import { useEffect, useState } from 'react'
import Cards from '../../components/Cards'
import { Restaurants } from '../../types/restaurant'

const Perfil = () => {
  const { id } = useParams()

  const [menu, setMenu] = useState<Restaurants>()
  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setMenu(res))
  }, [])

  if (!menu) return <h4>Carregando</h4>
  return (
    <>
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

export default Perfil
