import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

export type Props = {
  type: 'home' | 'perfil'
  position: boolean
}

export const Container = styled.div<Props>`
  position: sticky;
  left: 0;
  top: 0;
  display: block;
  height: ${(props) => (props.type === 'home' ? '384px' : '188px')};
  width: 100%;
  padding-top: 64px;
  background-color: ${colors.begie};
  color: ${colors.red};
  z-index: 1;
  top: ${(props) => (props.position ? '-400px' : '0')};
  transition: all ease 2s;

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
  margin-top: 136px;

  h2 {
    text-align: center;
    font-weight: bold;
    font-size: 36px;
  }
`

export const Logo = styled.h1`
  display: flex;
  justify-content: center;
`
export const Linke = styled(Link)`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.red};
`

export const LinkCart = styled.a`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.red};
  cursor: pointer;
`
