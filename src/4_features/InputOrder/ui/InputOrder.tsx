import {Clicker} from "@/4_features/Clicker/Clicker.tsx";
import {useAllSalesQuery} from "@/5_entities/sale";
import {getTime} from "@/6_shared/lib/getTime.ts";
import {useAppDispatch} from "@/1_app/hooks.ts";
import {ChangeEvent, useEffect} from "react";
import {RequestOrder, setRequestOrder} from "@/5_entities/orderForm";
import {getToastMessage} from "@/6_shared/lib/getToastMessage.ts";
import {Spinner} from "@/6_shared/BaseComponents/Spinner/Spinner.tsx";

export const InputOrder = ({requestOrder}: { requestOrder: RequestOrder | undefined }) => {
    const {data, isLoading, isError, error} = useAllSalesQuery(true)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (isError)
            getToastMessage(error)
    }, [isError, error]);

    if (isLoading)
        return <Spinner/>

    if (isError)
        return <p className={'m-6 text-gray-700'}>Что-то пошло не так</p>


    const selectSaleHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        const request = {...requestOrder} ?? {} as RequestOrder
        const sale = data![+event.target.value]
        request.sale = {
            id: sale.id,
            full_price: sale.full_price,
            full_time: sale.full_time
        }
        dispatch(setRequestOrder(request as RequestOrder))
    }

    return (
        <div className={`h-full md:flex border border-gray-500 rounded-lg p-3 mt-3`}>
            <p className={`w-full md:w-2/6 lg:w-3/6 2xl:w-2/6 text-center md:text-left`}>Заказ</p>
            <div className={`w-full 2xl:w-4/6 h-full flex flex-col justify-between items-start`}>
                {
                    data && data.length ?
                        <>
                            <select className={`w-full p-3 rounded-lg border-2`} onChange={selectSaleHandler}
                                    defaultValue={"none"}>
                                <option value="none" disabled hidden>Выберите акцию</option>
                                {
                                    data.map((sale, index) =>
                                        <option key={sale.id} value={index}>
                                            {sale.title}, {sale.full_price}тг, {getTime(sale.full_time)}</option>
                                    )
                                }
                            </select>
                        </>
                        :
                        ""

                }

                <div className={`h-full flex flex-col items-start mt-2`}>
                    <Clicker time={'Часов'} type={"hour"} requestOrder={requestOrder}/>
                    <Clicker time={'Минут'} type={"minute"} requestOrder={requestOrder}/>
                </div>
            </div>
        </div>
    );
};
