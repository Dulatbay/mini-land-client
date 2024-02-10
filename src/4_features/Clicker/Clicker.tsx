import {useEffect, useState} from 'react';
import {useAppDispatch} from "@/1_app/hooks.ts";
import {
    RequestOrder,
    setRequestOrder
} from "@/5_entities/orderForm";

interface props {
    time: string,
    type: "hour" | "minute",
    requestOrder: RequestOrder | undefined
}

export const Clicker = ({time, type, requestOrder}: props) => {
    const [count, setCount] = useState(0);
    const dispatch = useAppDispatch()


    useEffect(() => {
        const request = {...requestOrder} ?? {} as RequestOrder
        if (type == 'hour') {
            request.extra_time_hour = count;
        } else {
            request.extra_time_minute = count
        }
        dispatch(setRequestOrder(request as RequestOrder))
    }, [count])


    const clickHandler = (payload: number) => {
        if(payload + count < 0) return;
        setCount(count + payload);
    };


    return (
        <div className={`w-full flex justify-between items-center`}>
            <p className={`mr-3`}>{time}:</p>
            <div className={`flex items-center justify-center`}>
                <button
                    type={"button"}
                    onClick={() => clickHandler(-1)}
                    className={`w-2 h-2 flex justify-center items-center border p-2 rounded-full mr-3`}
                    style={{border: "1px solid #FF3333", color: "#FF3333"}}
                >
                    -
                </button>

                <span className={`text-xs  w-5 text-center mr-3`}>{count}</span>

                <button
                    type={"button"}
                    onClick={() => clickHandler(1)}
                    className={`w-2 h-2 flex justify-center items-center p-2 rounded-full`}
                    style={{border: "1px solid #1FD680", color: "#1FD680"}}
                >
                    +
                </button>
            </div>
        </div>
    );
};
