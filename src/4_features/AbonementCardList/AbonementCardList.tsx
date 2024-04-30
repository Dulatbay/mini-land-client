// import KeycloakContext from '@/1_app/keycloak/KeycloakContext';
import { useAllBaseAbonementsQuery } from '@/5_entities/base-abonement/api/baseAbonementApi';
import { BaseAbonementCard } from '@/5_entities/base-abonement/ui/BaseAbonementCard';
import { Spinner } from '@/6_shared/BaseComponents/Spinner/Spinner';
import { getToastMessage } from '@/6_shared/lib/getToastMessage';
import { useEffect } from 'react';

export const AbonementCardList = () => {
    const { data, isLoading, isError, error } = useAllBaseAbonementsQuery(true);

    useEffect(() => {
        if (isError) getToastMessage(error);
    }, [isError, error]);

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <p className={'m-6 text-gray-700'}>Что-то пошло не так</p>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {data?.length ? (
                data?.map((abonement) => (
                    <BaseAbonementCard {...abonement} key={abonement.id} />
                ))
            ) : (
                <p className={'m-6 text-gray-700'}>
                    Активных абонементов нет...
                </p>
            )}
        </div>
    );
};
