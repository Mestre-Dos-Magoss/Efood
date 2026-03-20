import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurants } from '../types/restaurant'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurants[], void>({
      query: () => 'restaurantes'
    }),
    getRestaurantAndFoods: builder.query<Restaurants, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantsQuery, useGetRestaurantAndFoodsQuery } = api
export default api
