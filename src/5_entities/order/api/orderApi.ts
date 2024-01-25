import {baseApi} from "@/6_shared/api/baseApi.ts";
import {DetailOrderDto, OrderCardDto, RequestCreateOrderDto} from "./types.ts";
import {mapOrder} from "../lib/mapOrder.ts";
import {DetailOrderModel, OrderCardModel} from "../model/types.ts";
import {ORDER_TAG, ORDERS_TAG} from "@/6_shared/api/tags.ts";
import {mapDetailOrder} from "@/5_entities/order/lib/mapDetailOrder.ts";

export const orderApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        allOrders: build.query<OrderCardModel[], void>({
            query: () => ({
                url: '/orders/all-cards'
            }),
            transformResponse: (response: OrderCardDto[]) => response.map(mapOrder),
            providesTags: [ORDERS_TAG]
        }),
        getOrderById: build.query<DetailOrderModel, number>({
            query: (id) => ({
                url: `/orders/detail/${id}`
            }),
            transformResponse: (response: DetailOrderDto) => mapDetailOrder(response),
            providesTags: [ORDER_TAG]
        }),
        finishOrderById: build.mutation<void, { id: number, isPaid: boolean }>({
            query: ({id, isPaid}) => ({
                url: `/orders/finish/${id}?is_paid=${isPaid}`,
                method: 'PATCH'
            }),
            invalidatesTags: [ORDERS_TAG, ORDER_TAG]
        }),
        createOrder: build.mutation<void, RequestCreateOrderDto>({
            query: (requestCreateOrderDto) => ({
                url: '/orders/create',
                method: 'POST',
                body: requestCreateOrderDto
            }),
            invalidatesTags: [ORDER_TAG, ORDERS_TAG]
        })
    })
})

export const {useAllOrdersQuery, useCreateOrderMutation, useLazyGetOrderByIdQuery, useFinishOrderByIdMutation} = orderApi