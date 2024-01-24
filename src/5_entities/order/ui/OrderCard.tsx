import {OrderCardModel} from "../model/types.ts";
import {getOrderColor} from "@/6_shared/lib/getOrderColor.ts";
import {getOrderRemainTime} from "@/6_shared/lib/getOrderRemainTime.ts";
import {useNavigate} from "react-router-dom";


export const OrderCard = (childRecord: OrderCardModel) => {
    const navigate = useNavigate()

    const cardClickHandler = (id:number) => {
        navigate(`/orders/${id}`)
    }

    return (
        <div
            className={`w-80 2xl:w-3/12 h-40 lg:h-60 rounded-2xl m-2 p-5 flex flex-col items-center justify-between cursor-pointer`}
            style={{backgroundColor: getOrderColor(childRecord.is_finished, childRecord.remain_time), color: 'white'}}
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
                        getOrderRemainTime(childRecord.remain_time)
                    }
                </p>
            </div>
            <div className={`w-full flex flex-col justify-start items-start`}>
                <p>Родитель: {childRecord.parent_name}</p>
                <p>Зашел: {childRecord.entered_time}</p>
                <p>Возраст ребенка: {childRecord.age}</p>
            </div>
        </div>
    );
};
