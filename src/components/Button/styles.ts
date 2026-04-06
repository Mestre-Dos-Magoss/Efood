import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

export const BotaoLink = styled(Link)`
  display: inline-block;
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
  background-color: ${colors.red};
  color: ${colors.begie};
`
export const Botao = styled.button`
  display: inline-block;
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
  background-color: ${colors.red};
  color: ${colors.begie};
  border: none;
`
