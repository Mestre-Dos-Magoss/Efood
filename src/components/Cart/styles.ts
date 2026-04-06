import styled from 'styled-components'

import { colors } from '../../styles'

import lixeira from '../../assets/lixeira.png'

export const CartContainer = styled.div`
  p {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    margin-bottom: 16px;
    font-weight: bold;
    font-size: 14px;
  }
`

export const EmptyItem = styled.p`
  margin-top: 260px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
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
