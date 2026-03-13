type MenuItens = {
  foto: string
  preco: number
  id: string
  nome: string
  descricao: string
  porcao: string
}

export type Restaurants = {
  id: number
  titulo: string
  tipo: string
  destacado: boolean
  avaliacao: number
  descricao: string
  capa: string

  cardapio: MenuItens[]
}
