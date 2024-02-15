import {RequestOrder} from "@/5_entities/orderForm";
import {getTime} from "@/6_shared/lib/getTime.ts";
import {PriceModel} from "@/5_entities/price";
import {getFullTime} from "@/6_shared/lib/getFullTime.ts";
import {getFullPrice} from "@/6_shared/lib/getFullPrice.ts";

interface props {
    requestOrder: RequestOrder | undefined,
    prices: PriceModel[]
}

export const OrderInfoCreate = ({requestOrder, prices}: props) => {


    return (
        <>
            <div className={`pt-5`}>
                <p>Тотал
                    время: {getTime(getFullTime(requestOrder?.extra_time_hour ?? 0, requestOrder?.extra_time_minute ?? 0) + (requestOrder?.sale ? requestOrder?.sale?.full_time : 0))}</p>
                <p>Общая
                    стоимость: {getFullPrice(getFullTime(requestOrder?.extra_time_hour ?? 0, requestOrder?.extra_time_minute ?? 0), prices) + (requestOrder?.sale ? requestOrder?.sale?.full_price : 0)}тг
                </p>
            </div>

        </>
    );
};
