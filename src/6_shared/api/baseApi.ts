import {createApi} from '@reduxjs/toolkit/query/react'
import {baseQuery} from "@/6_shared/api/baseQuery.ts";
import {ORDER_TAG, ORDERS_TAG, PRICE_TAG, SALE_TAG} from "@/6_shared/api/tags.ts";

export const baseApi = createApi({
    tagTypes: [ORDER_TAG, SALE_TAG,PRICE_TAG, ORDERS_TAG],
    reducerPath: 'api',
    baseQuery: baseQuery,
    endpoints: () => ({})
})