import {baseApi} from "@/6_shared/api/baseApi.ts";
import {BookedDayDto, RequestCreateRoomOrderDto, ResponseCardRoomOrderDto} from "@/5_entities/roomOrder/model/types.ts";

export const roomOrderApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        allBookedDays: build.query<BookedDayDto[], number>({
            query: (id) => ({
                url: `/room-orders/booked-days/${id}`,
            })
        }),
        allActiveRooms: build.query<ResponseCardRoomOrderDto[], void>({
            query: () => ({
                url: `/room-orders/today`,
            })
        }),
        createRoomTariffOrder: build.mutation<void, RequestCreateRoomOrderDto>({
            query: (reqBody) => ({
                url: `/room-orders`,
                method: "POST",
                body: reqBody
            })
        }),
        finishOrder: build.mutation<void, { id: number, paid: boolean }>({
            query: ({paid, id}) => ({
                url: `/room-orders/${id}?paid=${paid}`,
                method: "PATCH",
            })
        }),
        deleteOrder: build.mutation<void, number>({
            query: (id) => ({
                url: `/room-orders/${id}`,
                method: "DELETE",
            })
        })
    })
})

export const {
    useLazyAllBookedDaysQuery,
    useCreateRoomTariffOrderMutation,
    useAllActiveRoomsQuery,
    useDeleteOrderMutation,
    useFinishOrderMutation
} = roomOrderApi

