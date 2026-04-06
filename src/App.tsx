import { BrowserRouter, useLocation, useMatch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'

import Rotas from './routes'

import GlobalStyle from './styles'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const HeaderCostumizado = () => {
    const location = useLocation()
    const match = useMatch('perfil/:id')?.params.id

    const headerType =
      location.pathname === `/perfil/${match}` ? 'perfil' : 'home'
    return <Header type={headerType} />
  }

  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <HeaderCostumizado />
        <Rotas />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
