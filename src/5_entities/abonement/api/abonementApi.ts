import { baseApi } from '@/6_shared/api/baseApi';
import { AbonementDto } from '../model/types';

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
        getAbonementByPhoneNumber: build.query<AbonementDto, string>({
            query: (phoneNumber) => ({
                url: `/abonement-orders/${phoneNumber}`,
            }),
        }),
    }),
});

export const {
    useAllAbonementsQuery,
    useDeleteAbonementByIdMutation,
    useCreateAbonementMutation,
    useGetAbonementByPhoneNumberQuery,
} = abonementApi;
