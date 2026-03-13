export type Cards = {
  type: 'restaurant' | 'food'
  name: string
  image: string
  tags?: string
  review?: number
  description: string
  id?: number | string
  porcao?: string
  price?: number
  highlighted?: boolean
}
