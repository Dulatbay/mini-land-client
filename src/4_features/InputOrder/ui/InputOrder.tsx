import {Clicker} from "@/4_features/Clicker/Clicker.tsx";
import {useAllSalesQuery} from "@/5_entities/sale";
import {getTime} from "@/6_shared/lib/getTime.ts";
import {useAppDispatch} from "@/1_app/hooks@deprecated.ts";
import {ChangeEvent} from "react";
import {
    RequestOrder, SaleOrder,
    setRequestOrder
} from "@/5_entities/orderForm";

export const InputOrder = ({requestOrder}: { requestOrder: RequestOrder | undefined }) => {
    const {data, isLoading, isError, error} = useAllSalesQuery(true)
    const dispatch = useAppDispatch()


    if (isLoading) {
        return "is_loading"
    }

    if (isError) {
        console.log(error)
        return "error, check console"
    }


    const selectSaleHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        const request = {...requestOrder} ?? {} as RequestOrder
        const sale = data![+event.target.value]
        const saleOrder: SaleOrder = {
            id: sale.id,
            full_price: sale.full_price,
            full_time: sale.full_time
        }
        request.sale = saleOrder
        dispatch(setRequestOrder(request as RequestOrder))
    }

    return (
        <div className={`h-full md:flex border border-gray-500 rounded-lg p-3 mt-3`}>
            <p className={`w-full md:w-2/6 lg:w-3/6 2xl:w-2/6 text-center md:text-left`}>Заказ</p>
            <div className={`w-full 2xl:w-4/6 h-full flex flex-col justify-between items-start`}>
                {
                    data && data.length ?
                        <>
                            <select className={`w-full p-3 rounded-lg mt-4`} onChange={selectSaleHandler}
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

                <div className={`h-full flex flex-col items-start`}>
                    <Clicker time={'Часов'} type={"hour"} requestOrder={requestOrder}/>
                    <Clicker time={'Минут'} type={"minute"} requestOrder={requestOrder}/>
                </div>
            </div>
        </div>
    );
};
