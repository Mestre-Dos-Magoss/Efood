import styled from 'styled-components'
import { colors } from '../../styles'

export const BannerStyle = styled.div`
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  height: 280px;
  color: ${colors.white};
  font-size: 32px;

  .container {
    position: relative;
    padding-top: 200px;
    text-align: start;

    h3 {
      position: absolute;
      top: 24px;
      font-weight: 100;
    }
  }
`
