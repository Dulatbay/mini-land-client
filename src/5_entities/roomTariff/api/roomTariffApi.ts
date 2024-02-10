import {baseApi} from "@/6_shared/api/baseApi.ts";

export const masterClassApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        allMasterClasses: build.query<unknown, boolean>({
            query: () => ({
                url: '/room-tariffs'
            })
        })
    })
})