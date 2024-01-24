import {baseApi} from "@/6_shared/api/baseApi.ts";
import {DetailOrderDto, OrderCardDto} from "./types.ts";
import {mapOrder} from "../lib/mapOrder.ts";
import {DetailOrderModel, OrderCardModel} from "../model/types.ts";
import {ORDER_TAG, ORDERS_TAG} from "@/6_shared/api/tags.ts";
import {mapDetailOrder} from "@/5_entities/order/lib/mapDetailOrder.ts";

export const productApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        allOrders: build.query<OrderCardModel[], void>({
            query: () =>  ({
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
        })
    })
})

export const {useAllOrdersQuery, useLazyGetOrderByIdQuery} = productApi