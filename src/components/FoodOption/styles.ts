import styled from 'styled-components'
import { colors } from '../../styles'
import { Botao } from '../Button/styles'

type Props = {
  type: 'restaurant' | 'food'
}

export const Container = styled.div<Props>`
  position: relative;
  display: block;
  background-color: ${(props) =>
    props.type === 'restaurant' ? colors.white : colors.red};
  border: 1px solid ${colors.red};
  color: ${(props) =>
    props.type === 'restaurant' ? colors.red : colors.begie};
  padding: ${(props) => (props.type === 'restaurant' ? 0 : '8px')};

  p {
    margin-bottom: 16px;
    font-size: 14px;
  }

  > div {
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
export const ImgProduto = styled.img`
  display: block;
  width: 100%;
  height: 216px;
  margin-bottom: 8px;
`
export const InfosProduto = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-weight: bold;
  margin-bottom: 16px;
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
