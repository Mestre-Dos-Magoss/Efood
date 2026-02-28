import FoodOption from '../FoodOption'
import { Container, List } from './styles'

import sushi from '../../assets/sushi.png'
import comidaItaliana from '../../assets/La_Dolce_Vita_Trattoria.png'
import pizzaMarguerita from '../../assets/pizza_marguerita.png'

const Restaurantes = [
  {
    restaurante: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushi,
    review: 4.9,
    tags: ['Japonesa', 'Destaque da semana']
  },
  {
    restaurante: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: comidaItaliana,
    review: 4.6,
    tags: ['Italiana']
  },
  {
    restaurante: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushi,
    review: 4.9,
    tags: ['Japonesa', 'Destaque da semana']
  },
  {
    restaurante: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: comidaItaliana,
    review: 4.6,
    tags: ['Italiana']
  },
  {
    restaurante: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushi,
    review: 4.9,
    tags: ['Japonesa', 'Destaque da semana']
  },
  {
    restaurante: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: comidaItaliana,
    review: 4.6,
    tags: ['Italiana']
  }
]

const Foods = [
  {
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizzaMarguerita
  },
  {
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizzaMarguerita
  },
  {
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizzaMarguerita
  },
  {
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizzaMarguerita
  },
  {
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizzaMarguerita
  },
  {
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizzaMarguerita
  }
]

export type Props = {
  view: 'restaurant' | 'food'
}

const Cardapio = ({ view }: Props) => (
  <Container>
    <div className="container">
      {view === 'restaurant' ? (
        <List view={view}>
          {Restaurantes.map((r) => (
            <li>
              <FoodOption
                key={r.restaurante}
                name={r.restaurante}
                description={r.description}
                image={r.image}
                review={r.review}
                tags={r.tags}
                type={view}
              />
            </li>
          ))}
        </List>
      ) : (
        <List view="food">
          {Foods.map((r) => (
            <li>
              <FoodOption
                key={r.name}
                name={r.name}
                description={r.description}
                image={r.image}
                type={'food'}
              />
            </li>
          ))}
        </List>
      )}
    </div>
  </Container>
)

export default Cardapio
