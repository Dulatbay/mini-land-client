import { useContext, useEffect } from 'react';
import { getToastMessage } from '@/6_shared/lib/getToastMessage.ts';
import { useAppSelector } from '@/1_app/hooks.ts';
import { selectRequestParams } from '@/5_entities/order/model/slice.ts';
import KeycloakContext from '@/1_app/keycloak/KeycloakContext.ts';
import { Spinner } from '@/6_shared/BaseComponents/Spinner/Spinner.tsx';
import { RoomOrderCard } from '@/5_entities/roomOrder/ui/RoomOrderCard';
import { useAllActiveRoomsQuery } from '@/5_entities/roomOrder/api/roomOrderApi';
import { ResponseCardRoomOrderDto } from '@/5_entities/roomOrder/model/types';

export const RoomOrderCardList = () => {
    const keycloak = useContext(KeycloakContext);

    const { data, isLoading, isError, error } = useAllActiveRoomsQuery();
    const requestParams = useAppSelector(selectRequestParams);

    useEffect(() => {
        if (isError) getToastMessage(error);
    }, [isError, error]);

    const isAvailable = (roomOrder: ResponseCardRoomOrderDto) => {
        if (
            requestParams.myOrders &&
            roomOrder.author_name !==
                keycloak.tokenParsed!['preferred_username']!
        )
            return false;

        const remain_time =
            new Date(roomOrder.ended_time).getTime() - new Date().getTime();

        let overdue = false;
        if (requestParams.overdue) overdue = remain_time < 0;

        let inProcess = false;

        if (requestParams.inProcess)
            inProcess = remain_time >= 0 && !roomOrder.is_finished;

        return (
            roomOrder.paid == requestParams.paid ||
            roomOrder.is_finished === requestParams.finished ||
            overdue ||
            inProcess
        );
    };

    if (isLoading) {
        return <Spinner />;
    }

    if (isError)
        return <p className={'m-6 text-gray-700'}>Что-то пошло не так</p>;

    return (
        <div
            className={`w-[95%] m-auto flex flex-wrap justify-start items-center`}
        >
            {data?.length ? (
                data
                    ?.filter((i) => isAvailable(i))
                    .map((roomOrderCard) => (
                        <RoomOrderCard
                            {...roomOrderCard}
                            key={roomOrderCard.id}
                        />
                    ))
            ) : (
                <p className={'m-6 text-gray-700'}>Активных заказов нет...</p>
            )}
        </div>
    );
};
