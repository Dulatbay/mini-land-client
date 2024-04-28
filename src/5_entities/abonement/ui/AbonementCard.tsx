import { RequestAbonementCardModel } from '../model/types';
import { useDeleteAbonementByIdMutation } from '../api/abonementApi';
import { useEffect } from 'react';
import { getToastMessage } from '@/6_shared/lib/getToastMessage';
import { Spinner } from '@/6_shared/BaseComponents/Spinner/Spinner';
import { ButtonDelete } from '@/6_shared/BaseComponents/ButtonDelete/ButtonDelete';

interface AbonementCardProps extends RequestAbonementCardModel {
    id: number;
    client_name: string;
    base_abonement?: {
        title: string;
        description: string;
        full_price: number;
        full_time: number;
        quantity: number;
    };
}

export const AbonementCard = ({
    id,
    client_name,
    base_abonement,
}: AbonementCardProps) => {
    const [deleteAbonement, { isError, error, isLoading, isSuccess }] =
        useDeleteAbonementByIdMutation();

    useEffect(() => {
        if (isError) getToastMessage(error);
    }, [isError, error]);

    if (isLoading) return <Spinner />;

    const deleteHandler = (abonementId: number) => {
        deleteAbonement(abonementId);
    };

    if (isSuccess) {
        window.location.reload();
    }

    return (
        <div className="bg-white rounded-2xl flex flex-col justify-between px-4 py-5 border-2">
            <div className="w-full flex justify-center">
                <p className="text-xl font-bold">{base_abonement?.title}</p>
            </div>
            <p className="text-gray-700">{base_abonement?.description}</p>
            <div className="w-full flex justify-between items-center mt-1">
                <div className="flex flex-wrap gap-1">
                    <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        Цена: {base_abonement?.full_price}тг
                    </span>
                    <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        Время: {base_abonement?.full_time} минут
                    </span>
                    <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                        {client_name}
                    </span>
                    <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                        Осталось посещений: {base_abonement?.quantity}
                    </span>
                </div>
                <div className="ml-8">
                    <ButtonDelete
                        showIcon={true}
                        clickHandler={() => deleteHandler(id)}
                    />
                </div>
            </div>
        </div>
    );
};
