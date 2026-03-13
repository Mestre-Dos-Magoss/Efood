import styled from 'styled-components'
import { colors } from '../../styles'
import { Props } from '.'
import { Botao } from '../Button/styles'

export const Container = styled.div<Omit<Props, 'children'>>`
  display: block;
  background-color: ${colors.begi};
  padding-top: ${(props) => (props.view === 'restaurant' ? '80px' : '32px')};
  padding-bottom: 120px;
`

export const List = styled.ul<Omit<Props, 'children'>>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.view === 'restaurant' ? ' 1fr 1fr' : ' 1fr 1fr 1fr'};
  column-gap: ${(props) => (props.view === 'restaurant' ? '80px' : '32px')};
  row-gap: ${(props) => (props.view === 'restaurant' ? '48px' : '32px')};
`
export const ContainerModal = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &.open {
    display: flex;
  }

  .overlay {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`
export const Modal = styled.div`
  position: absolute;
  display: flex;
  height: 344px;
  padding: 32px;
  background-color: ${colors.red};
  z-index: 1;

  header {
    position: absolute;
    top: 8px;
    right: 8px;
    display: block;
    width: 16px;
    height: 16px;
  }

  div {
    margin-left: 24px;
    color: ${colors.white};

    ${Botao} {
      background-color: ${colors.begie};
      color: ${colors.red};
    }
  }

  p {
    font-size: 14px;
    margin-top: 16px;
    margin-bottom: 16px;
    line-height: 22px;
  }

  > img {
    width: 280px;
    object-fit: cover;
  }
`
