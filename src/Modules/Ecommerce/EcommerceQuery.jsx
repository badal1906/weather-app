import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const EcommerceApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products",
    }),
  }),
});

export const { useGetProductsQuery } = EcommerceApi;
export default EcommerceApi;
