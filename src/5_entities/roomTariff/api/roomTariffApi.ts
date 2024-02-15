import {baseApi} from "@/6_shared/api/baseApi.ts";
import {
    CardRoomTariffDto,
    DetailRoomTariffDto,
    RequestCreateTariffDto
} from "@/5_entities/roomTariff/model/types.ts";

export const roomTariffApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        allRoomTariffs: build.query<CardRoomTariffDto[], boolean>({
            query: (enabled) => ({
                url: '/room-tariffs',
                params: [
                    ["enabled", enabled]
                ]
            })
        }),
        getRoomTariffById: build.query<DetailRoomTariffDto, number>({
            query: (id) => ({
                url: `/room-tariffs/${id}`
            })
        }),
        deleteRoomTariffById: build.mutation<void, number>({
            query: (id) => ({
                url: `/room-tariffs/${id}`,
                method: "DELETE"
            })
        }),
        createRoomTariff: build.mutation<void, RequestCreateTariffDto>({
            query: (reqBody) => ({
                url: `/room-tariffs`,
                method: "POST",
                body: reqBody
            })
        })
    })
})


export const {
    useAllRoomTariffsQuery,
    useLazyGetRoomTariffByIdQuery,
    useCreateRoomTariffMutation,
    useDeleteRoomTariffByIdMutation,
} = roomTariffApi