import { createGlobalStyle } from 'styled-components'

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

export default GlobalStyle
