import { Route } from 'react-router-dom'
import Home from './pages/Home'
import Perfil from './pages/Perfil'

const Rotas = () => (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/perfil" element={<Perfil />} />
  </>
)

export default Rotas
