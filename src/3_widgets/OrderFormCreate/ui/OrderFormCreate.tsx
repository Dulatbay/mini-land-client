import {Button} from "@/6_shared/BaseComponents/Button/Button.tsx";
import {selectAllPrices, useAllPricesQuery} from "@/5_entities/price";
import {InputCustomer} from "@/4_features/InputCustomer/InputCustomer.tsx";
import {InputOrder} from "@/4_features/InputOrder/ui/InputOrder.tsx";
import {OrderInfoCreate} from "@/4_features/OrderInfo/ui/OrderInfoCreate.tsx";
import {useAppDispatch, useAppSelector} from "@/1_app/hooks@deprecated.ts";
import {RequestOrder, selectRequestOrder, setRequestOrder} from "@/5_entities/orderForm";
import {MouseEvent} from "react";
import {RequestCreateOrderDto, useCreateOrderMutation} from "@/5_entities/order";
import {getFullTime} from "@/6_shared/lib/getFullTime.ts";
import {useNavigate} from "react-router-dom";

const customer = "Клиент";
const child = 'Ребенок';
const type1 = "tel"
const type2 = "age"

// todo: connect with toatisfy react

const isAvailableToSend = (order: RequestOrder | undefined): boolean => {
    if (!order) {
        return false;
    }

    const neededProperties: (keyof RequestOrder)[] = ['child_age', 'child_name', 'parent_name', 'parent_phone_number'];



    const result = neededProperties.every(prop => {
        return order[prop] !== undefined
    });

    const saleTime = order.sale?.full_time ?? 0

    const extraTime = ((order?.extra_time_minute ?? 0) * 60) + ((order?.extra_time_hour ?? 0) * 3600)


    if(!result) {
        return false;
    }

    if(order["parent_phone_number"]?.includes("_")){
        return false
    }

    if(order["child_age"]! < 1 || order["child_age"]! > 15){
        return false;
    }

    if(((saleTime + extraTime) < 30)){
        return false
    }



    return true
};


export const OrderFormCreate = () => {
    const requestOrder = useAppSelector(selectRequestOrder)
    const prices = useAppSelector(selectAllPrices)
    const dispatch = useAppDispatch()
    const [createOrder] = useCreateOrderMutation()
    const navigate= useNavigate()

    useAllPricesQuery(true)


    const isPaidCheckBoxHandler = (event: MouseEvent<HTMLInputElement>) => {
        const request = {...requestOrder} ?? {} as RequestOrder
        request.is_paid = event.currentTarget.checked
        dispatch(setRequestOrder(request as RequestOrder))
    }

    const sendButtonHandler = () => {
        if(!requestOrder) {
            console.log('error, request order is null')
            return;
        }
        const body : RequestCreateOrderDto = {
            child_age: requestOrder.child_age!,
            child_name: requestOrder.child_name!,
            parent_name: requestOrder.parent_name!,
            parent_phone_number: requestOrder.parent_phone_number!,
            extra_time: getFullTime(requestOrder.extra_time_hour ?? 0, requestOrder.extra_time_minute ?? 0),
            is_paid: requestOrder.is_paid ?? false,
            sale_id: requestOrder.sale?.id,
        }

        createOrder(body).then(()=>{
            navigate('/')
        })
    }


    return (
        <form className={`w-5/6 md:w-4/6 lg:w-3/6 2xl:w-2/6 mt-10 md:mt-0 p-10 border-8 m-auto rounded-3xl`}
              style={{backgroundColor: '#3D3D3D'}}>
            <div className={`w-full md:w-9/12 pb-3 flex flex-col md:flex-row md:justify-between items-center`}>
                <img src={'/icons/Logo.svg'} className={`w-32 object-contain`} style={{backgroundPosition: "center"}}
                     alt={''}/>
                <p className={`text-white pt-3`}>Создать заказ</p>
            </div>
            <InputCustomer customer={customer} type={type1} requestOrder={requestOrder}/>
            <InputCustomer customer={child} type={type2} requestOrder={requestOrder}/>
            <InputOrder requestOrder={requestOrder}/>
            <OrderInfoCreate requestOrder={requestOrder} prices={prices}/>
            <label className={"text-white"}>
                <span className={"mr-1"}>
                    Товар оплачен:
                </span>
                <input type="checkbox"
                       onClick={isPaidCheckBoxHandler}/>
            </label>
            <div className={`w-full sm:flex justify-between pt-6 gap-20`}>
            <Button content={"ОЧИСТИТЬ"} backgroundColor={"red-500"}/>
                <Button disabled={!isAvailableToSend(requestOrder)}
                        backgroundColor={"purple-700"}
                        content={"ОТПРАВИТЬ"}
                        onClick={sendButtonHandler}
                />
            </div>
        </form>
    );
};
