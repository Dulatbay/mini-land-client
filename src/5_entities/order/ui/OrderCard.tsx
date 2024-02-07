import {OrderCardModel} from "../model/types.ts";
import {getBackgroundColorByOrderInfo} from "@/6_shared/lib/getBackgroundColorByOrderInfo.ts";
import {useNavigate} from "react-router-dom";
import {getTime} from "@/6_shared/lib/getTime.ts";
import {getBorderBackgroundWithHover} from "@/6_shared/lib/getBorderBackgroundWithHover.ts";


export const OrderCard = (childRecord: OrderCardModel) => {
    const navigate = useNavigate()

    const cardClickHandler = (id: number) => {
        navigate(`/orders/${id}`)
    }

    const orderCardBg = getBackgroundColorByOrderInfo(childRecord.is_finished, childRecord.remain_time);
    const orderCardBgHover = getBorderBackgroundWithHover(childRecord.is_finished, childRecord.remain_time)

    return (
        <div
            className={`${orderCardBg}  
            text-white cursor-pointer 
            w-80 2xl:w-3/12 h-40 lg:h-60 m-2 p-5 
            border-2 border-transparent rounded-2xl
            flex flex-col items-center justify-between 
            transition ease-in-out duration-500 
            hover:bg-transparent hover:text-black hover:border-2 hover:shadow-2xl hover:bg-gray-100
            ${orderCardBgHover}`}
            onClick={() => {
                cardClickHandler(childRecord.id)
            }}
        >
            <div className={`w-full flex justify-between`}>
                <h5>{childRecord.child_name}</h5>
                <p>
                    {
                        childRecord.remain_time < 0 ? "Прошло: " : "Осталось: "
                    }
                    {
                        getTime(childRecord.remain_time < 0 ? childRecord.remain_time * -1 : childRecord.remain_time)
                    }
                </p>
            </div>
            <div className={`w-full flex flex-col justify-start items-start`}>
                <p>Родитель: {childRecord.parent_name}</p>
                <p>Время вхождения: {childRecord.entered_time}</p>
                <p>Возраст ребенка: {childRecord.age}г.</p>
            </div>
        </div>
    );
};
