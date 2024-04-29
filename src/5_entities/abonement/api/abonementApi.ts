import { baseApi } from '@/6_shared/api/baseApi';
import { AbonementDto, ResponseAbonementCardModel } from '../model/types';

export const abonementApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        allAbonements: build.query<AbonementDto[], boolean>({
            query: (enabled) => ({
                url: '/abonement-orders',
                params: [['enabled', enabled]],
            }),
        }),
        deleteAbonementById: build.mutation<void, number>({
            query: (id) => ({
                url: `/abonement-orders/${id}`,
                method: 'DELETE',
            }),
        }),
        createAbonement: build.mutation<void, FormData>({
            query: (requestBody) => ({
                url: '/abonement-orders',
                method: 'POST',
                body: requestBody,
            }),
        }),
        getAbonementByPhoneNumber: build.query<
            ResponseAbonementCardModel[],
            string
        >({
            query: (phoneNumber) => ({
                url: `/abonement-orders/by-phone-number`,
                params: { phone_number: phoneNumber },
            }),
        }),
    }),
});

export const {
    useAllAbonementsQuery,
    useDeleteAbonementByIdMutation,
    useCreateAbonementMutation,
    useLazyGetAbonementByPhoneNumberQuery,
} = abonementApi;
