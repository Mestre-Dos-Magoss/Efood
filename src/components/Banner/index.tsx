import { useMatch } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { BannerStyle } from './styles'
import { Restaurants } from '../../types/restaurant'

const Banner = () => {
  const id = useMatch('perfil/:id')?.params.id
  const [chosenRestaurant, setChosenRestaurant] = useState<Restaurants>()

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setChosenRestaurant(res))
  }, [id])

  if (!chosenRestaurant) return <h4>Carregando...</h4>

  return (
    <BannerStyle style={{ backgroundImage: `url(${chosenRestaurant.capa})` }}>
      <div className="container">
        <h3>{chosenRestaurant.tipo}</h3>
        <h2>{chosenRestaurant.titulo}</h2>
      </div>
    </BannerStyle>
  )
}

export default Banner
