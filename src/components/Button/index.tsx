import { Botao } from './styles'
import { JSX } from 'react'

type Props = {
  children: JSX.Element | string
  title: string
  to?: string
  action?: () => void
}

const Button = ({ title, children, to, action }: Props) => (
  <Botao title={title} to={to as string} onClick={action}>
    {children}
  </Botao>
)

export default Button
