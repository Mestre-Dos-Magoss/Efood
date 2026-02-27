import star from '../../assets/star.png'
import {
  Container,
  ImgProduto,
  InfosProduto,
  Reviews,
  TagsProduto
} from './styles'
import Tag from '../Tag'
import Button from '../Button'

type Props = {
  type: 'restaurant' | 'food'
  name: string
  image: string
  tags?: string[]
  review?: number
  description: string
}

const FoodOption = ({
  name,
  description,
  image,
  review,
  tags,
  type
}: Props) => {
  function ViewTags() {
    if (tags !== undefined) {
      return (
        <>
          {tags.map((tag) => (
            <li>
              <Tag key={tag}>{tag}</Tag>
            </li>
          ))}
        </>
      )
    }
  }

  return (
    <>
      {type === 'restaurant' ? (
        <Container type={type}>
          <ImgProduto src={image} alt={name} />
          <TagsProduto>{ViewTags()}</TagsProduto>
          <div>
            <InfosProduto>
              {name}
              <Reviews>
                {review} <img src={star} alt="Estrela" />
              </Reviews>
            </InfosProduto>
            <p>{description}</p>
            <Button title="Saiba mais">Saiba mais</Button>
          </div>
        </Container>
      ) : (
        <Container type={type}>
          <ImgProduto src={image} alt={name} />
          <div>
            <InfosProduto>{name}</InfosProduto>
            <p>{description}</p>
            <Button title="Saiba mais">Saiba mais</Button>
          </div>
        </Container>
      )}
    </>
  )
}
export default FoodOption
