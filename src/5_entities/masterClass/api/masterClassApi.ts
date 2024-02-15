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
        }),
        addToOrder: build.mutation<void, { masterClassId: number, orderId: number }>({
            query: ({masterClassId, orderId}) => ({
                url: `/master-classes/${masterClassId}/add-to-order/${orderId}`,
                method: "POST"
            })
        }),
        getMasterClassesByOrder: build.query<CardMasterClassDto[], number>({
            query: (orderId) => ({
                url: `/orders/${orderId}/master-classes`,
            })
        })
    })
})


export const {
    useAllMasterClassesQuery,
    useGetMasterClassByIdQuery,
    useAddToOrderMutation,
    useDeleteMasterClassByIdMutation,
    useCreateMasterClassMutation,
    useLazyGetMasterClassesByOrderQuery
} = masterClassApi