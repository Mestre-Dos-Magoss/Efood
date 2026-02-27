import React from 'react'
import Header from './components/Header'
import GlobalStyle from './styles'
import FoodOption from './components/FoodOption'
import Cardapio from './components/Cardapio'
import Footer from './components/Footer'
import Banner from './components/Banner'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header type="pefil" />
      <Banner Category="Italiana" RestaurantName="La Dolce Vita Trattoria" />
      <Cardapio view="food" />
      <Footer />
    </>
  )
}

export default App
