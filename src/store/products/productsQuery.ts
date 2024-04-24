import { BASE_URL, GET_ALL_PRODUCTS } from "@/shared/api/consts";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => GET_ALL_PRODUCTS
    })
  })
});

export const {useGetAllProductsQuery} = productsApi;