import {baseApi} from "@/6_shared/api/baseApi.ts";
import {SALE_TAG} from "@/6_shared/api/tags.ts";
import {SaleModel} from "@/5_entities/sale/model/types.ts";
import {RequestCreateSaleDto, ResponseSaleDto} from "@/5_entities/sale/api/types.ts";
import {mapSale} from "@/5_entities/sale/lib/mapSale.ts";

export const saleApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        allSales: build.query<SaleModel[], boolean>({
            query: (isEnabled) =>  ({
                url: `/sales?enabled=${isEnabled}`
            }),
            transformResponse: (response: ResponseSaleDto[]) => response.map(mapSale),
            providesTags: [SALE_TAG]
        }),
        disableSale: build.mutation<void, number>({
            query: (id) => ({
                url: `/sales/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: [SALE_TAG]
        }),
        createSale: build.mutation<void, RequestCreateSaleDto>({
            query: (requestBody) => ({
                url: '/sales',
                method: "POST",
                body: requestBody
            })
        })
    })
})

export const {useAllSalesQuery, useDisableSaleMutation, useCreateSaleMutation} = saleApi