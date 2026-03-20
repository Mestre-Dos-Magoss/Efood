import { MenuItens } from './menuItens'
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
