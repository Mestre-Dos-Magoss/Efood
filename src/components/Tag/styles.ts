import styled from 'styled-components'
import { colors } from '../../styles'

export const TagContainer = styled.div`
  display: inline-block;
  padding: 4px 6px;
  font-weight: bold;
  font-size: 12px;
  margin-right: 8px;
  background-color: ${colors.red};
  color: ${colors.white};

  p {
    margin: 0;
  }
`
