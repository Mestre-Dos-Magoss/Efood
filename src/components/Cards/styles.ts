import styled from 'styled-components'
import { colors } from '../../styles'
import { Botao } from '../Button/styles'

type Props = {
  type: 'restaurant' | 'food'
}

export const Container = styled.div<Props>`
  position: ${(props) => (props.type === 'restaurant' ? 'relative' : '')};
  display: block;
  background-color: ${(props) =>
    props.type === 'restaurant' ? colors.white : colors.red};
  border: 1px solid ${colors.red};
  color: ${(props) =>
    props.type === 'restaurant' ? colors.red : colors.begie};
  padding: ${(props) => (props.type === 'restaurant' ? 0 : '8px')};

  p {
    margin-bottom: ${(props) => (props.type === 'restaurant' ? '16px' : '8px')};
    font-size: 14px;
    line-height: 22px;
  }

  > div {
    margin-top: ${(props) => (props.type === 'food' ? '8px' : '0')};
    padding: ${(props) => (props.type === 'restaurant' ? ' 8px' : 0)};
    padding-top: 0;
  }

  ${Botao} {
    background-color: ${(props) => (props.type === 'food' ? colors.begie : '')};
    color: ${(props) => (props.type === 'food' ? colors.red : '')};
    width: ${(props) => (props.type === 'food' ? '100%' : '18%')};
    text-align: center;
  }
`
export const ImgProduto = styled.img<Props>`
  display: block;
  width: 100%;
  height: ${(props) => (props.type === 'restaurant' ? '216px' : '167px')};
  margin-bottom: 8px;
  object-fit: cover;
`
export const InfosProduto = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-weight: bold;
  margin-bottom: ${(props) => (props.type === 'restaurant' ? '16px' : '8px')};
`
export const Reviews = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 56px;
  width: 100%;
  font-size: 18px;
`

export const TagsProduto = styled.ul`
  position: absolute;
  right: 16px;
  top: 16px;
  display: inline-flex;
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
