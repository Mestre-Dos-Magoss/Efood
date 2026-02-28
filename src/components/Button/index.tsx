import { Botao } from './styles'

type Props = {
  children: string
  title: string
  to: string
  action?: () => void
}

const Button = ({ title, children, to, action }: Props) => (
  <Botao title={title} to={to} onClick={action}>
    {children}
  </Botao>
)

export default Button
