import logo from '../../assets/logo.svg'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import x from '../../assets/x.svg'

import * as S from './styles'

const message =
  'A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.'

const Footer = () => {
  return (
    <S.FooterContainer>
      <div className="container">
        <img src={logo} alt="Efood" />
        <S.RedesSociais>
          <S.Rede>
            <img src={instagram} alt="" />
          </S.Rede>
          <S.Rede>
            <img src={facebook} alt="" />
          </S.Rede>
          <S.Rede>
            <img src={x} alt="" />
          </S.Rede>
        </S.RedesSociais>
        <S.TextFooter>{message}</S.TextFooter>
      </div>
    </S.FooterContainer>
  )
}
export default Footer
