import {baseApi} from "@/6_shared/api/baseApi.ts";
import {OrderCardDto} from "./types.ts";
import {mapOrder} from "../lib/mapOrder.ts";
import {OrderCardModel} from "../model/types.ts";

export const productApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        allOrders: build.query<OrderCardModel[], void>({
            query: () =>  ({
              url: '/orders/all-cards'
            }),
            transformResponse: (response: OrderCardDto[]) => response.map(mapOrder)
        })
    })
})

export const {useAllOrdersQuery} = productApi