import { BannerStyle } from './styles'
import imageBanner from '../../assets/imagem_de_fundo.png'
import comidaItaliana from '../../assets/La_Dolce_Vita_Trattoria.png'
type Props = {
  Category: string
  RestaurantName: string
}

const Banner = ({ Category, RestaurantName }: Props) => (
  <BannerStyle style={{ backgroundImage: `url(${imageBanner})` }}>
    <div className="container">
      <h3>{Category}</h3>
      <h2>{RestaurantName}</h2>
    </div>
  </BannerStyle>
)

export default Banner
