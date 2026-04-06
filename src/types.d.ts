declare type MenuItens = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

declare type Restaurants = {
  id: number
  titulo: string
  tipo: string
  destacado: boolean
  avaliacao: number
  descricao: string
  capa: string

  cardapio: MenuItens[]
}

declare type Cards = {
  type: 'restaurant' | 'food'
  name: string
  image: string
  tags?: string
  review?: number
  description: string
  id?: number
  porcao?: string
  price?: number
  highlighted?: boolean
}
