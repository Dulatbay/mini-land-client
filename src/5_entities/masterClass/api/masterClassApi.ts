import {baseApi} from "@/6_shared/api/baseApi.ts";
import {CardMasterClassDto} from "@/5_entities/masterClass/model/types.ts";

export const masterClassApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        allMasterClasses: build.query<CardMasterClassDto[], boolean>({
            query: (enabled) => ({
                url: '/master-classes',
                params: [
                    ["enabled", enabled]
                ]
            })
        }),
        deleteMasterClassById: build.mutation<void, number>({
            query: (id) => ({
                url: `/master-classes/${id}`,
                method: "DELETE"
            })
        }),
        getMasterClassById: build.query<CardMasterClassDto, number>({
            query: (id) => ({
                url: `/master-classes/${id}`,
            })
        }),
        createMasterClass: build.mutation<void, FormData>({
            query: (requestBody) => ({
                url: '/master-classes',
                method: "POST",
                body: requestBody
            })
        })
    })
})


export const {
    useAllMasterClassesQuery,
    useGetMasterClassByIdQuery,
    useDeleteMasterClassByIdMutation,
    useCreateMasterClassMutation
} = masterClassApi