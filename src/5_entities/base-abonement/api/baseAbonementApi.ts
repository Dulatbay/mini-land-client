import { baseApi } from '@/6_shared/api/baseApi';
import { BaseAbonementDto, RequestCreateBaseAbonementDto } from '../model/types';

export const baseAbonementApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        allBaseAbonements: build.query<BaseAbonementDto[], boolean>({
            query: (enabled) => ({
                url: '/base-abonements',
                params: [['enabled', enabled]],
            }),
        }),
        deleteBaseAbonementById: build.mutation<void, number>({
            query: (id) => ({
                url: `/base-abonements/${id}`,
                method: 'DELETE',
            }),
        }),
        createBaseAbonement: build.mutation<void, RequestCreateBaseAbonementDto>({
            query: (requestBody) => ({
                url: '/base-abonements',
                method: 'POST',
                body: requestBody,
            }),
        }),
    }),
});

export const {
    useAllBaseAbonementsQuery,
    useDeleteBaseAbonementByIdMutation,
    useCreateBaseAbonementMutation,
} = baseAbonementApi;
