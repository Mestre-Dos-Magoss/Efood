import styled from 'styled-components'
import { colors } from '../../styles'
import { Props } from '.'

export const Container = styled.div`
  display: block;
  background-color: ${colors.begi};
  padding-top: 80px;
  padding-bottom: 120px;
`

export const List = styled.ul<Props>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.view === 'restaurant' ? ' 1fr 1fr' : ' 1fr 1fr 1fr'};
  column-gap: 80px;
  row-gap: 48px;
`
