import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { InputMask } from '@react-input/mask'

import { InputCamp } from '../../styles'
import Button from '../Button'
import { InputCampFlex } from '../../styles'

import { goToCart, goToPayment } from '../../store/reducers/cart'
import { getDataToDelivery } from '../../store/reducers/delivery'
import { RootReducer } from '../../store'

const Delivery = () => {
  const { dataToDelivery } = useSelector(
    (state: RootReducer) => state.deliverySlice
  )
  const dispatch = useDispatch()

  const goBackCart = () => {
    dispatch(goToCart())
  }

  const form = useFormik({
    enableReinitialize: true,
    initialValues: dataToDelivery,
    validationSchema: yup.object({
      receiver: yup
        .string()
        .min(5, 'O campo precisa ter no mínimo 5 caracteres')
        .required('Este campo é obrigatório'),
      adress: yup
        .string()
        .min(10, 'O campo precisa ter no mínimo 10 caracteres')
        .required('Este campo é obrigatório'),
      city: yup
        .string()
        .min(5, 'O campo precisa ter no mínimo 5 caracteres')
        .required('Este campo é obrigatório'),
      zipCode: yup
        .string()
        .min(9, 'O campo precisa ter no mínimo 8 caracteres')
        .max(9, 'O campo pode ter no maxímo 8 caracteres')
        .required('Este campo é obrigatório'),
      numberStreet: yup.string().required('Este campo é obrigatório'),
      complementAdress: yup
        .string()
        .min(10, 'O campo precisa ter no mínimo 10 caracteres')
        .required('Este campo é obrigatório')
    }),
    onSubmit: (values) => {
      if (form.isSubmitting === true) {
        dispatch(goToPayment())
        dispatch(
          getDataToDelivery({
            city: values.city,
            complementAdress: values.complementAdress,
            adress: values.adress,
            numberStreet: Number(values.numberStreet),
            receiver: values.receiver,
            zipCode: values.zipCode
          })
        )
      }
    }
  })

  const getFullAdress = (fildName: string) => {
    const isTouch = fildName in form.touched
    const isError = fildName in form.errors
    const hasError = isTouch && isError

    return hasError
  }

  return (
    <>
      <h3>Entrega</h3>
      <form onSubmit={form.handleSubmit}>
        <InputCamp>
          <label htmlFor="receiver">Quem irá receber</label>
          <input
            type="text"
            id="receiver"
            name="receiver"
            value={form.values.receiver}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={getFullAdress('receiver') ? 'error' : ''}
          />
        </InputCamp>
        <InputCamp>
          <label htmlFor="adress">Endereço</label>
          <input
            type="text"
            id="adress"
            name="adress"
            value={form.values.adress}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={getFullAdress('adress') ? 'error' : ''}
          />
        </InputCamp>
        <InputCamp>
          <label htmlFor="city">Cidade</label>
          <input
            type="text"
            id="city"
            name="city"
            value={form.values.city}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={getFullAdress('city') ? 'error' : ''}
          />
        </InputCamp>
        <InputCampFlex>
          <InputCamp size="155px">
            <label htmlFor="zipCode">CEP</label>
            <InputMask
              type="text"
              id="zipCode"
              name="zipCode"
              value={form.values.zipCode}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={getFullAdress('zipCode') ? 'error' : ''}
              mask={'_____-___'}
              replacement={{ _: /\d/ }}
            />
          </InputCamp>
          <InputCamp size="155px">
            <label htmlFor="numberStreet">Número</label>
            <input
              type="text"
              id="numberStreet"
              name="numberStreet"
              value={form.values.numberStreet}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={getFullAdress('numberStreet') ? 'error' : ''}
            />
          </InputCamp>
        </InputCampFlex>
        <InputCamp className="marginBottom">
          <label htmlFor="complementAdress">Complemento</label>
          <input
            type="text"
            id="complementAdress"
            name="complementAdress"
            value={form.values.complementAdress}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={getFullAdress('complementAdress') ? 'error' : ''}
          />
        </InputCamp>
        <Button
          type="submit"
          title="Clique aqui para continuar com o pagamento"
        >
          Continuar com o pagamento
        </Button>
        <Button
          type="button"
          action={() => goBackCart()}
          title="Clique aqui para voltar ao carrinho"
        >
          Voltar para o carrinho
        </Button>
      </form>
    </>
  )
}

export default Delivery
