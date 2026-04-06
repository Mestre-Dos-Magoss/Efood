import styled, { createGlobalStyle } from 'styled-components'

type SizeInputCamp = {
  size?: string
}

type GapColumn = {
  columnGap?: string
}

export const colors = {
  red: '#E66767',
  begie: '#FFEBD9',
  white: '#FFF',
  begi: '#fff5ed'
}

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
  }

  .container {
    display: block;
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`

export const InputCamp = styled.div<SizeInputCamp>`
  display: block;
  margin-bottom: 8px;
  width: 100%;
  max-width: ${(props) => props.size || 'auto'};

  label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: bold;
  }

  input {
    width: 100%;
    max-width: ${(props) => props.size || 'auto'};
    height: 32px;
    padding: 8px;
    background-color: ${colors.begie};
    color: #000;
    border: none;
    font-weight: bold;
    font-size: 14px;
  }
  .error {
    color: red;
    outline-color: red;
  }
`

export const InputCampFlex = styled.div<GapColumn>`
  display: flex;
  column-gap: ${(props) => props.columnGap || '34px'};
`

export default GlobalStyle
