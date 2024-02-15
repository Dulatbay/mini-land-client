import {OrderCard, OrderCardModel, useAllOrdersTodayQuery} from "@/5_entities/order";
import {useContext, useEffect} from "react";
import {getToastMessage} from "@/6_shared/lib/getToastMessage.ts";
import {useAppSelector} from "@/1_app/hooks.ts";
import {selectRequestParams} from "@/5_entities/order/model/slice.ts";
import KeycloakContext from "@/1_app/keycloak/KeycloakContext.ts";
import {Spinner} from "@/6_shared/BaseComponents/Spinner/Spinner.tsx";


export const OrderCardList = () => {
    const keycloak = useContext(KeycloakContext)

    const {data, isLoading, isError, error} = useAllOrdersTodayQuery()
    const requestParams = useAppSelector(selectRequestParams)


    useEffect(() => {
        if (isError)
            getToastMessage(error)
    }, [isError, error]);

    const isAvailable = (order: OrderCardModel) => {
        if (requestParams.myOrders && order.author_name !== keycloak.tokenParsed!["preferred_username"]!)
            return false;

        let overdue = false
        if (requestParams.overdue)
            overdue = order.remain_time < 0

        let inProcess = false

        if (requestParams.inProcess)
            inProcess = order.remain_time >= 0 && !order.is_finished




        return (order.is_paid == requestParams.paid
            || order.is_finished === requestParams.finished
            || overdue
            || inProcess)
    }

    if (isLoading) {
        return <Spinner/>
    }

    if (isError)
        return <p className={'m-6 text-gray-700'}>Что-то пошло не так</p>

    return (
        <div className={`w-[95%] m-auto flex flex-wrap justify-start items-center`}>
            {
                data?.length ?
                    data?.filter(i => isAvailable(i))
                        .map(order =>
                            <OrderCard {...order} key={order.id}/>
                        ) :
                    <p className={'m-6 text-gray-700'}>Активных заказов нет...</p>

            }
        </div>
    );
}

