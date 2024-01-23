import {createApi} from '@reduxjs/toolkit/query/react'
import {baseQuery} from "@/6_shared/api/baseQuery.ts";

export const baseApi = createApi({
    tagTypes: [],
    reducerPath: 'api',
    baseQuery: baseQuery,
    endpoints: () => ({})
})