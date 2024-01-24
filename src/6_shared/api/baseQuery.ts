import {BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError, FetchBaseQueryMeta} from "@reduxjs/toolkit/query";
import {baseUrl} from "@/6_shared/api/lib/config.ts";


export const baseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, object, FetchBaseQueryMeta>
    = fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: headers => {
        if (localStorage.getItem('token'))
            headers.set("Authorization", `Bearer ` + localStorage.getItem('token'))
        headers.set("Content-Type", "application/json")
        return headers
    }
})