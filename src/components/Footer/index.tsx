import logo from '../../assets/logo.svg'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import x from '../../assets/x.svg'

import { FooterContainer, Rede, RedesSociais, TextFooter } from './styles'

const Footer = () => (
  <FooterContainer>
    <div className="container">
      <img src={logo} alt="Efood" />
      <RedesSociais>
        <Rede>
          {' '}
          <img src={instagram} alt="" />
        </Rede>
        <Rede>
          <img src={facebook} alt="" />
        </Rede>
        <Rede>
          <img src={x} alt="" />
        </Rede>
      </RedesSociais>
      <TextFooter>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </TextFooter>
    </div>
  </FooterContainer>
)

export default Footer
