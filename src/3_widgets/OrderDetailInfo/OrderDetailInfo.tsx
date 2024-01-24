import {useParams} from "react-router-dom";
import {useLazyGetOrderByIdQuery} from "@/5_entities/order/api/productApi.ts";
import {MouseEvent} from "react";
import {Button} from "@/6_shared/BaseComponents/Button/Button.tsx";
import InfoParentDetail from "@/4_features/InfoParentDetail/InfoParentDetail.tsx";
import InfoChildDetail from "@/4_features/InfoChildDetail/InfoChildDetail.tsx";


export const OrderDetailInfo = () => {
    const {id} = useParams()
    const [trigger, result] = useLazyGetOrderByIdQuery()
    const {data, isLoading, isError, error} = result


    if (id && !isNaN(+id) && !isLoading && result.status === 'uninitialized') {
        trigger(+id)
    }



    if (isLoading) {
        return "loading"
    }

    if (isError) {
        console.log(error)
        return "error,check console"
    }

    // const isPaidCheckBoxHandler = (event: MouseEvent<HTMLInputElement>) => {
    // }

    if(!data){
        return "Не удалось найти"
    }

    return (
        <form className={`w-5/6 md:w-4/6 lg:w-3/6 2xl:w-2/6 mt-10 md:mt-0 p-10 border-8 m-auto rounded-3xl`}
              style={{backgroundColor: '#3D3D3D'}}>
            <div className={`w-full md:w-9/12 pb-3 flex flex-col md:flex-row md:justify-between items-center`}>
                <img src={'/icons/Logo.svg'} className={`w-32 object-contain`} style={{backgroundPosition: "center"}}
                     alt={''}/>
                <p className={`text-white pt-3`}>Информация о заказе</p>
            </div>
            <InfoParentDetail parentName={data.parent_name} parentPhoneNumber={data.parent_phone_number} />
            <InfoChildDetail childName={data.child_name} childAge={data.child_age}/>
            {/*todo: orderInfoLabel*/}
            <label className={"text-white"}>
                Заказ оплачен:
                <input type="checkbox"/>
                <span className={"ml-1"}>
    </span>
            </label>
            <div className={`w-full sm:flex justify-between pt-6`}>
                <Button content={"ЗАВЕРШИТЬ"} backgroundColor={"#FFA733"}/>
            </div>
        </form>
    );
};