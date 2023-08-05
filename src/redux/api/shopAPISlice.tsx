import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BASE_URL } from "@/config";
import { Shop } from "@/types";
import { formatDateToString } from "@/lib/utils";

export const shopAPI = createApi({
  reducerPath: "shopAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  /* ------------------ add tags for caching and revalidation ----------------- */
  tagTypes: ["list-products", "list-cart", "list-product-by-id"],

  /* ------------------------- defining api endpoints ------------------------- */
  endpoints: (builder) => ({
    // listProducts: builder.query<any, { category?: string; sort?: string }>({
    //   query: (
    //     reqBody: { category?: string; sort?: string } = {
    //       category: "",
    //       sort: "",
    //     }
    //   ) => ({
    //     url: reqBody?.category
    //       ? `/products/category/${reqBody.category}`
    //       : `/products${reqBody.sort ? "?sort=" + reqBody.sort : ""}`,
    //     method: "GET",
    //   }),
    //   transformResponse: (response: any) => response,
    //   providesTags: ["list-products"],
    // }),
    listProducts: builder.query<any, void>({
      query: () => ({
        url: `/products`,
        method: "GET",
      }),
      transformResponse: (response: any) => response,
      providesTags: ["list-products"],
    }),
    listProductByID: builder.query<any, { id?: string }>({
      query: (reqBody: { id?: string }) => ({
        url: `/products/${reqBody.id}`,
        method: "GET",
      }),
      transformResponse: (response: any) => response,
      providesTags: ["list-product-by-id"],
    }),
    listCategories: builder.query<any, void>({
      query: () => ({
        url: `/products/categories`,
        method: "GET",
      }),
      transformResponse: (response: any) => response,
    }),
    listCart: builder.query<any, void>({
      query: () => ({
        url: `/carts/user/5`,
        method: "GET",
      }),
      transformResponse: (response: any) => response,
      providesTags: ["list-cart"],
    }),
    addToCart: builder.mutation<any, Shop.AddToCartReq[]>({
      query: (reqBody) => ({
        url: `/carts`,
        method: "POST",
        body: {
          userId: 5,
          date: formatDateToString(new Date()),
          products: reqBody,
        },
      }),
      transformResponse: (response: any) => response,
      invalidatesTags: ["list-cart"],
    }),
    updateCart: builder.mutation<any, Shop.AddToCartReq[]>({
      query: (reqBody) => ({
        url: `/carts`,
        method: "PUT",
        body: {
          userId: 5,
          date: formatDateToString(new Date()),
          products: reqBody,
        },
      }),
      transformResponse: (response: any) => response,
      invalidatesTags: ["list-cart"],
    }),
    deleteCart: builder.mutation<any, { cartID?: string }>({
      query: (reqBody) => ({
        url: `/carts/${reqBody.cartID}`,
        method: "DELETE",
      }),
      transformResponse: (response: any) => response,
      invalidatesTags: ["list-cart"],
    }),
  }),
});

export const {
  useListProductsQuery,
  useListCategoriesQuery,
  useLazyListProductsQuery,
  useListProductByIDQuery,
  useAddToCartMutation,
  useListCartQuery,
  useUpdateCartMutation,
  useDeleteCartMutation,
} = shopAPI;
