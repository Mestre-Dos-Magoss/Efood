import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Delivery = {
  receiver: string
  adress: string
  city: string
  zipCode: string
  numberStreet: number
  complementAdress: string
}

type DeliveryState = {
  dataToDelivery: Delivery
}

const initialState: DeliveryState = {
  dataToDelivery: {
    city: '',
    receiver: '',
    adress: '',
    zipCode: '',
    numberStreet: 0,
    complementAdress: ''
  }
}

const deliveryData = createSlice({
  name: 'deliveryData',
  initialState,
  reducers: {
    getDataToDelivery: (state, action: PayloadAction<Delivery>) => {
      state.dataToDelivery = action.payload
    }
  }
})

export const { getDataToDelivery } = deliveryData.actions
export default deliveryData.reducer
