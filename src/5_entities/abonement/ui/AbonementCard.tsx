import { useDeleteAbonementByIdMutation } from '../api/abonementApi';
import { useEffect } from 'react';
import { getToastMessage } from '@/6_shared/lib/getToastMessage';
import { Spinner } from '@/6_shared/BaseComponents/Spinner/Spinner';
import { ButtonDelete } from '@/6_shared/BaseComponents/ButtonDelete/ButtonDelete';
import { useNavigate } from 'react-router-dom';

interface AbonementCardProps {
    id: number;
    client_name: string;
    base_abonemnt_id?: number;
    quantity?: number;
    base_abonement_id?: number;
    base_abonement_name?: string;
    base_abonement_description?: string;
    base_abonement_price?: number;
    base_abonement_time?: number;
    onDeleteSuccess?: (id: number) => void;
}

export const AbonementCard = ({
    id,
    client_name,
    base_abonement_id,
    base_abonement_name,
    base_abonement_description,
    base_abonement_price,
    base_abonement_time,
    quantity,
    onDeleteSuccess,
}: AbonementCardProps) => {
    const [deleteAbonement, { isError, error, isLoading, isSuccess }] =
        useDeleteAbonementByIdMutation();

    const navigate = useNavigate();

    useEffect(() => {
        if (isError) getToastMessage(error);
    }, [isError, error]);

    useEffect(() => {
        if (isSuccess && onDeleteSuccess) {
            onDeleteSuccess(id);
        }
    }, [isSuccess, id, onDeleteSuccess]);

    if (isLoading) return <Spinner />;

    const deleteHandler = () => {
        deleteAbonement(id);
    };

    const createClickHandler = (id: number) => {
        navigate(`/create-order/${id}`);
    };

    return (
        <div className="bg-white rounded-2xl flex flex-col justify-between px-4 py-5 border-2">
            <div
                className="w-full flex cursor-pointer"
                onClick={() => createClickHandler(base_abonement_id!)}
            >
                <p className="text-xl font-bold">{base_abonement_name}</p>
            </div>
            <div className="w-full flex justify-center text-justify">
                <p className="text-gray-700">{base_abonement_description}</p>
            </div>
            <div className="w-full flex justify-between items-end">
                <div className="flex flex-wrap flex-col">
                    <span className="py-0.5 text-sm font-semibold text-gray-700 mr-2">
                        Цена: {base_abonement_price}тг
                    </span>
                    <span className="py-0.5 text-sm font-semibold text-gray-700 mr-2">
                        Время: {base_abonement_time} минут
                    </span>
                    <span className="py-0.5 text-sm font-semibold text-gray-700 mr-2">
                        {client_name}
                    </span>
                    <span className="py-0.5 text-sm font-semibold text-gray-700 mr-2">
                        Осталось посещений: {quantity}
                    </span>
                </div>
                <ButtonDelete showIcon={true} clickHandler={deleteHandler} />
            </div>
        </div>
    );
};
