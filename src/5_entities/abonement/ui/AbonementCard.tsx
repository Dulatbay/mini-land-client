import { useDeleteAbonementByIdMutation } from '../api/abonementApi';
import { useEffect } from 'react';
import { getToastMessage } from '@/6_shared/lib/getToastMessage';
import { Spinner } from '@/6_shared/BaseComponents/Spinner/Spinner';
import { ButtonDelete } from '@/6_shared/BaseComponents/ButtonDelete/ButtonDelete';

interface AbonementCardProps {
    id: number;
    client_name: string;
    base_abonement?: {
        title: string;
        // description: string;
        // full_price: number;
        // full_time: number;
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
            {/* <p className="text-gray-700">{base_abonement?.description}</p> */}
            <div className="w-full flex justify-between items-center">
                <div className="flex flex-wrap flex-col">
                    {/* <span className="py-0.5 text-sm font-semibold text-gray-700 mr-2">
                        Цена: {base_abonement?.full_price}тг
                    </span>
                    <span className="py-0.5 text-sm font-semibold text-gray-700 mr-2">
                        Время: {base_abonement?.full_time} минут
                    </span> */}
                    <span className="py-0.5 text-sm font-semibold text-gray-700 mr-2">
                        {client_name}
                    </span>
                    <span className="py-0.5 text-sm font-semibold text-gray-700 mr-2">
                        Осталось посещений: {base_abonement?.quantity}
                    </span>
                </div>
                <ButtonDelete
                    showIcon={true}
                    clickHandler={() => deleteHandler(id)}
                />
            </div>
        </div>
    );
};
