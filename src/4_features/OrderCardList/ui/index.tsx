import {OrderCard, useAllOrdersQuery} from "@/5_entities/order";
import {useEffect} from "react";
import {getToastMessage} from "@/6_shared/lib/getToastMessage.ts";

export const OrderCardList = () => {
    const {data, isLoading, isError, error} = useAllOrdersQuery()

    useEffect(() => {
        if (isError)
            getToastMessage(error)
    }, [isError, error]);


    if(isLoading){
        return "Loading"
    }

    if (isError)
        return <p className={'m-6 text-gray-700'}>Что-то пошло не так</p>



    return (
        <div className={`w-full lg:w-10/12 m-auto pt-10 flex flex-wrap justify-center items-center`}>
            {
                data?.map(order =>
                    <OrderCard {...order} key={order.id}/>
                )
            }
        </div>
    );
}

