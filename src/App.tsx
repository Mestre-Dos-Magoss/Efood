import Header from './components/Header'
import GlobalStyle from './styles'
import Footer from './components/Footer'
import Rotas from './routes'
import { BrowserRouter, Routes, useLocation, useMatch } from 'react-router-dom'

function App() {
  const HeaderCostumizado = () => {
    const location = useLocation()
    const match = useMatch('perfil/:id')?.params.id

    const headerType =
      location.pathname === `/perfil/${match}` ? 'perfil' : 'home'
    return <Header type={headerType} />
  }

  return (
    <BrowserRouter>
      <GlobalStyle />
      <HeaderCostumizado />
      <Routes>{Rotas()}</Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
