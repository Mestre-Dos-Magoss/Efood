import { Botao } from './styles'

type Props = {
  children: string
  title: string
  // to?: string
  action?: () => void
}

const Button = ({ title, children, action }: Props) => (
  <Botao title={title} onClick={action}>
    {children}
  </Botao>
)

export default Button
