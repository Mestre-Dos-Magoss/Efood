import * as S from './styles'
import { JSX } from 'react'

type Props = {
  children: JSX.Element | string
  title: string
  to?: string
  action?: () => void
  type: 'button' | 'submit' | 'link'
}

const Button = ({ title, children, to, type, action }: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <S.Botao type={type} title={title} onClick={action}>
        {children}
      </S.Botao>
    )
  } else {
    return (
      <S.BotaoLink type={type} title={title} to={to as string} onClick={action}>
        {children}
      </S.BotaoLink>
    )
  }
}

export default Button
