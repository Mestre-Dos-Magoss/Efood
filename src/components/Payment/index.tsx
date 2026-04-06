import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { InputMask } from '@react-input/mask'

import { InputCamp } from '../../styles'
import Button from '../Button'
import { InputCampFlex } from '../../styles'

import { goToDelivery, goToCart, clear } from '../../store/reducers/cart'
import { useGetPurchaseFoodsMutation } from '../../services/api'
import { RootReducer } from '../../store'
import { parseToBRL, retornaTotal } from '../../utils'

const Payment = () => {
  const [purchase, { data, isSuccess }] = useGetPurchaseFoodsMutation()
  const { itens } = useSelector((state: RootReducer) => state.cartSlice)
  const { dataToDelivery } = useSelector(
    (state: RootReducer) => state.deliverySlice
  )
  const dispatch = useDispatch()

  const form = useFormik({
    initialValues: {
      cardName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: yup.object({
      cardName: yup
        .string()
        .min(4, 'Este campo precisa ter no mínimo 4 caracteres')
        .required('Este campo é obrigatório'),
      cardNumber: yup
        .string()
        .min(19, 'Este campo precisa ter no mínimo 16 caracteres')
        .max(19, 'Este campo pode ter no máximo 16 caracteres')
        .required('Este campo é obrigatório'),
      cardCode: yup
        .string()
        .min(3, 'Este campo precisa ter no mínimo 3 caracteres')
        .required('Este campo é obrigatório'),
      expiresMonth: yup
        .string()
        .min(2, 'Este campo precisa ter no mínimo 2 caracteres')
        .required('Este campo é obrigatório'),
      expiresYear: yup
        .string()
        .min(2, 'Este campo precisa ter no mínimo 2 caracteres')
        .required('Este campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        products: itens.map((prod) => ({ id: prod.id, price: prod.preco })),
        delivery: {
          receiver: dataToDelivery.receiver,
          adress: {
            city: dataToDelivery.city,
            description: dataToDelivery.adress,
            complement: dataToDelivery.complementAdress,
            number: dataToDelivery.numberStreet,
            zipCode: dataToDelivery.zipCode
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            },
            code: Number(values.cardCode)
          }
        }
      })
      dispatch(clear())
    }
  })

  const goBackDelivery = () => {
    dispatch(goToDelivery())
  }

  const goToBackCart = () => {
    dispatch(goToCart())
  }

  const getFullDataCard = (fildName: string) => {
    const isTouch = fildName in form.touched
    const isError = fildName in form.errors
    const hasError = isError && isTouch

    return hasError
  }

  return (
    <>
      {isSuccess ? (
        <>
          <h3>Pedido realizado - {data.orderId}</h3>
          <p className="marginTop textInformation">
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <p className="marginTop textInformation">
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <p className="marginTop textInformation">
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <p className="marginTop marginBottom textInformation ">
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
          <Button type="button" title="concluir pedido" action={goToBackCart}>
            Concluir
          </Button>
        </>
      ) : (
        <>
          <h3>Pagamento - Valor a pagar {parseToBRL(retornaTotal(itens))}</h3>
          <form onSubmit={form.handleSubmit}>
            <InputCamp>
              <label htmlFor="cardName">Nome do cartão</label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                value={form.values.cardName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={getFullDataCard('cardName') ? 'error' : ''}
              />
            </InputCamp>
            <InputCampFlex columnGap="30px">
              <InputCamp size="228px">
                <label htmlFor="cardNumber">Número no cartão</label>
                <InputMask
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={form.values.cardNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={getFullDataCard('cardNumber') ? 'error' : ''}
                  replacement={{ _: /\d/ }}
                  mask={'____ ____ ____ ____'}
                />
              </InputCamp>
              <InputCamp size="88px">
                <label htmlFor="cardCode">CVV</label>
                <InputMask
                  type="text"
                  id="cardCode"
                  name="cardCode"
                  value={form.values.cardCode}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={getFullDataCard('cardCode') ? 'error' : ''}
                  mask={'___'}
                  replacement={{ _: /\d/ }}
                />
              </InputCamp>
            </InputCampFlex>
            <InputCampFlex className="marginBottom">
              <InputCamp size="155px">
                <label htmlFor="expiresMonth">Mês de vencimento</label>
                <InputMask
                  type="text"
                  id="expiresMonth"
                  name="expiresMonth"
                  value={form.values.expiresMonth}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={getFullDataCard('expiresMonth') ? 'error' : ''}
                  mask={'__'}
                  replacement={{ _: /\d/ }}
                />
              </InputCamp>
              <InputCamp size="155px">
                <label htmlFor="expiresYear">Ano de vencimento</label>
                <InputMask
                  type="text"
                  id="expiresYear"
                  name="expiresYear"
                  value={form.values.expiresYear}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={getFullDataCard('expiresYear') ? 'error' : ''}
                  mask={'__'}
                  replacement={{ _: /\d/ }}
                />
              </InputCamp>
            </InputCampFlex>
            <Button
              type="submit"
              title="Clique aqui para continuar com a comprar"
            >
              Finalizar pagamento
            </Button>
            <Button
              type="button"
              action={goBackDelivery}
              title="Clique aqui para voltar a página anterior"
            >
              Voltar para a edição de endereço
            </Button>
          </form>
        </>
      )}
    </>
  )
}

export default Payment
