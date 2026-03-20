import styled from 'styled-components'

import { colors } from '../../styles'
import { Botao } from '../Button/styles'

import lixeira from '../../assets/lixeira.png'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`

export const Sidebar = styled.aside`
  display: block;
  max-width: 360px;
  width: 100%;
  padding: 32px 8px 0 8px;
  background-color: ${colors.red};
  z-index: 1;

  p {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    margin-bottom: 16px;
    font-weight: bold;
    font-size: 14px;
    color: ${colors.white};
  }

  ${Botao} {
    width: 100%;
    background-color: ${colors.begie};
    color: ${colors.red};
    text-align: center;
  }
`

export const FoodItem = styled.li`
  position: relative;
  display: flex;
  padding: 8px 8px 12px 8px;
  margin-bottom: 16px;
  background-color: ${colors.begie};
  color: ${colors.red};

  img {
    width: 80px;
    height: 80px;
    margin-right: 8px;
    object-fit: cover;
  }

  span {
    display: block;
    font-size: 14px;
    margin-top: 16px;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 18px;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    position: absolute;
    bottom: 8px;
    right: 8px;
    border: none;
    background-color: transparent;
  }
`
