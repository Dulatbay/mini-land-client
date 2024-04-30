import { baseApi } from '@/6_shared/api/baseApi';
import {
    RequestCreateSaleWithPercentDto,
    ResponseSaleWithPercentDto,
} from './types';
import { SaleWithPercentModel } from '../model/types';
import { mapSaleWithPercent } from '../lib/mapSaleWithPercent';
import { SALE_WITH_PERCENT_TAG } from '@/6_shared/api/tags';

export const saleWithPercentApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        allSalesWithPercent: build.query<SaleWithPercentModel[], boolean>({
            query: (isEnabled) => ({
                url: `/sales-with-percent?enabled=${isEnabled}`,
            }),
            transformResponse: (response: ResponseSaleWithPercentDto[]) =>
                response.map(mapSaleWithPercent),
            providesTags: [SALE_WITH_PERCENT_TAG],
        }),
        createSaleWithPercent: build.mutation<
            void,
            RequestCreateSaleWithPercentDto
        >({
            query: (requestBody) => ({
                url: '/sales-with-percent',
                method: 'POST',
                body: requestBody,
            }),
        }),
        deleteSaleWithPercent: build.mutation<void, number>({
            query: (id) => ({
                url: `/sales-with-percent/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [SALE_WITH_PERCENT_TAG],
        }),
    }),
});

export const {
    useAllSalesWithPercentQuery,
    useCreateSaleWithPercentMutation,
    useDeleteSaleWithPercentMutation,
} = saleWithPercentApi;
