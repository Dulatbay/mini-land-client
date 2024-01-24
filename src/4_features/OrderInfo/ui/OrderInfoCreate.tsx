import {RequestOrder} from "@/5_entities/orderForm";
import {getFullPrice} from "@/4_features/OrderInfo/lib/getFullPrice.ts";
import {getTime} from "@/6_shared/lib/getTime.ts";
import {PriceModel} from "@/5_entities/price";

interface props {
    requestOrder: RequestOrder | undefined,
    prices: PriceModel[]
}

export const OrderInfoCreate = ({requestOrder, prices}: props) => {
    const getFullTime = () => {
        return ((requestOrder?.extra_time_hour ?? 0) * 3600) + ((requestOrder?.extra_time_minute ?? 0) * 60);
    }

    return (
        <>
            <div className={`text-white pt-5`}>
                <p>Тотал время: {getTime(getFullTime() + (requestOrder?.sale ? requestOrder?.sale?.full_time : 0))}</p>
                <p>Штрафное время: 15м.</p>
                <p>Общая
                    стоимость: {getFullPrice(getFullTime(), prices) + (requestOrder?.sale ? requestOrder?.sale?.full_price : 0)}тг</p>
            </div>

        </>
    );
};
