import {baseApi} from "@/6_shared/api/baseApi.ts";
import {PRICE_TAG} from "@/6_shared/api/tags.ts";
import {PriceModel} from "../model/types.ts";
import {ResponsePriceDto} from "../api/types.ts";
import {mapPrice} from "../lib/mapPrice.ts";

export const priceApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        allPrices: build.query<PriceModel[], boolean>({
            query: (isEnabled) =>  ({
                url: `/prices/get-all?enabled${isEnabled}`
            }),
            transformResponse: (response: ResponsePriceDto[]) => response.map(mapPrice),
            providesTags: [PRICE_TAG]
        }),
    })
})

export const {useAllPricesQuery} = priceApi