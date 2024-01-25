import {BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError, FetchBaseQueryMeta} from "@reduxjs/toolkit/query";


export const baseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, object, FetchBaseQueryMeta>
    = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: headers => {
        if (localStorage.getItem('token'))
            headers.set("authorization", "Bearer " + localStorage.getItem('token')!)
        return headers
    }
})