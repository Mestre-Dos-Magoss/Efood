import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.div`
  display: block;
  width: 100%;
  height: 298px;
  padding: 40px;
  background-color: ${colors.begie};

  img {
    display: block;
    margin: 0 auto;
    margin-bottom: 32px;
  }
`

export const RedesSociais = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
`

export const Rede = styled.li`
  display: flex;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 8px;
  background-color: ${colors.red};
  color: ${colors.white};

  img {
    margin: 0;
    width: 16px;
  }
`
export const TextFooter = styled.p`
  display: block;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  font-size: 10px;
  text-align: center;
  color: ${colors.red};
`
