import styled from 'styled-components'
import { colors } from '../../styles'
import { Botao } from '../Button/styles'

export const AsideContainer = styled.div`
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
  color: ${colors.begie};
  z-index: 1;

  > h3 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  ${Botao}, button {
    width: 100%;
    background-color: ${colors.begie};
    color: ${colors.red};
    text-align: center;
    margin-bottom: 8px;
  }

  .marginTop {
    margin-top: 24px;
  }

  .marginBottom {
    margin-bottom: 24px;
  }

  .textInformation {
    font-size: 14px;
    line-height: 22px;
  }
`
