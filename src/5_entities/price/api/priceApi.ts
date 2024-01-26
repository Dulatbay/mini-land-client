import {baseApi} from "@/6_shared/api/baseApi.ts";
import {PRICE_TAG} from "@/6_shared/api/tags.ts";
import {PriceModel} from "../model/types.ts";
import {RequestCreatePriceDto, ResponsePriceDto} from "../api/types.ts";
import {mapPrice} from "../lib/mapPrice.ts";

export const priceApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        allPrices: build.query<PriceModel[], boolean>({
            query: (isEnabled) => ({
                url: `/prices/get-all?enabled${isEnabled}`
            }),
            transformResponse: (response: ResponsePriceDto[]) => response.map(mapPrice),
            providesTags: [PRICE_TAG]
        }),
        disablePrice: build.mutation<void, number>({
            query: (id) => ({
                url: `/prices/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: [PRICE_TAG]
        }),
        createPrice: build.mutation<void, RequestCreatePriceDto>({
            query: (requestBody) => ({
                url: '/prices/create',
                method: "POST",
                body: requestBody
            })
        })
    })
})

export const {useAllPricesQuery, useDisablePriceMutation, useCreatePriceMutation} = priceApi