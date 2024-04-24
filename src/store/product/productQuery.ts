import { BASE_URL, GET_ALL_PRODUCTS } from "@/shared/api/consts";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: 'product',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: (productId: string) => `${GET_ALL_PRODUCTS}/${productId}`
    })
  })
});

export const {useGetProductQuery} = productApi;