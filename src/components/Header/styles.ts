import styled from 'styled-components'
import { colors } from '../../styles'
import { Props } from '.'

export const Container = styled.div<Props>`
  display: block;
  height: ${(props) => (props.type === 'home' ? '384px' : '188px')};
  width: 100%;
  padding-top: 64px;
  background-color: ${colors.begie};
  color: ${colors.red};

  h1 {
    margin: 0;
  }
`

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Text = styled.div`
  display: block;
  margin: 0 auto;
  max-width: 540px;
  width: 100%;
  height: 84px;
  margin-bottom: 40px;

  h2 {
    text-align: center;
    font-weight: bold;
    font-size: 36px;
  }
`

export const Logo = styled.h1`
  display: flex;
  justify-content: center;
  margin-bottom: 136px;
`
export const Link = styled.a`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.red};
`
