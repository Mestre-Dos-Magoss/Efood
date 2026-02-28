import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

export const Botao = styled(Link)`
  display: block;
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
  background-color: ${colors.red};
  color: ${colors.begie};
`
