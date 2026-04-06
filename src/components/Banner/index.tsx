import { useMatch } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { BannerStyle } from './styles'

import { useGetRestaurantAndFoodsQuery } from '../../services/api'
import Loader from '../Loader'

const Banner = () => {
  const id = useMatch('perfil/:id')?.params.id
  const [chosenRestaurant, setChosenRestaurant] = useState<Restaurants>()
  const { data: menu } = useGetRestaurantAndFoodsQuery(id as string)

  useEffect(() => {
    setChosenRestaurant(menu)
  }, [id])

  if (!chosenRestaurant) {
    return <Loader />
  }

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
