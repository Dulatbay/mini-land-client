import {DaysOfWeek} from "@/4_features/DaysOfWeek/DaysOfWeek.tsx";
import {TimePicker} from "@/4_features/TimePicker/TimePicker.tsx";
import {CommonInput} from "@/6_shared/BaseComponents/CommonInput/CommonInput.tsx";
import {Button} from "@/6_shared/BaseComponents/Button/Button.tsx";
import {greenBg} from "@/6_shared/lib/colors.ts";
import {useEffect, useState} from "react";
import {useCreateRoomTariffMutation} from "@/5_entities/roomTariff/api/roomTariffApi.ts";
import {RequestCreateTariffDto} from "@/5_entities/roomTariff/model/types.ts";
import {getToastMessage} from "@/6_shared/lib/getToastMessage.ts";
import {useNavigate} from "react-router-dom";


export const CreateTariffForm = () => {
    const [selectedDays, setSelectedDays] = useState([false, false, false, false, false, false, false])
    const [startedAt, setStartedAt] = useState<undefined | string>()
    const [finishedAt, setFinishedAt] = useState<undefined | string>()
    const [firstPrice, setFirstPrice] = useState<undefined | number>()
    const [maxChild, setMaxChild] = useState<undefined | number>()
    const [penaltyPerHalfHour, setPenaltyPerHalfHour] = useState<undefined | number>()
    const [penaltyPerHour, setPenaltyPerHour] = useState<undefined | number>()
    const [childPrice, setChildPrice] = useState<undefined | number>()
    const [createRoomTariff, {isLoading, isError, error, isSuccess}] = useCreateRoomTariffMutation()


    const navigate = useNavigate();

    useEffect(() => {
        if (isError)
            getToastMessage(error)
    }, [isError, error]);

    const isDisabled = () => {
        return !(startedAt && finishedAt && firstPrice && maxChild && penaltyPerHalfHour && penaltyPerHour && childPrice)
    }

    const createRoomTariffHandler = () => {
        const reqBody: RequestCreateTariffDto = {
            started_at: startedAt!,
            finished_at: finishedAt!,
            first_price: firstPrice!,
            max_child: maxChild!,
            penalty_per_hour: penaltyPerHour!,
            penalty_per_half_hour: penaltyPerHalfHour!,
            child_price: childPrice!,
            days: selectedDays
                .map((value, index) => {
                    if (value) {
                        return index + 1;
                    } else {
                        return null;
                    }
                })
                .filter(value => value !== null) as number[]
        }
        createRoomTariff(reqBody)
    }

    if(isSuccess){
        setTimeout(()=>{
            window.location.reload()
        }, 50)
        navigate('/room-tariffs')
    }

    return (
        <div
            className={`max-w-2xl mt-7 md:mt-0 p-10 border-2 m-auto rounded-3xl bg-white`}>
            <div className={`w-full pb-3 flex flex-col md:justify-between items-center`}>
                <img src={'/icons/Logo.svg'} className={`w-32 object-contain`} style={{backgroundPosition: "center"}}
                     alt={''}/>
                <p className={`pt-3 text-2xl font-medium`}>Создать тариф</p>
            </div>
            <form method={"POST"}>
                <div className={`h-full md:flex border border-gray-500 rounded-lg p-3 mt-3 gap-4`}>
                    <p className={`w-full md:w-2/6 lg:w-3/6 2xl:w-2/6 md:text-left`}>Настройка времени</p>
                    <div className={`w-full 2xl:w-4/6 h-full pb-2 flex flex-col justify-center items-start gap-2`}>
                        <div className={''}>
                            <p className={'text-gray-500 text-sm mb-1'}>В какие дни работает?</p>
                            <DaysOfWeek setSelectedDays={setSelectedDays} selectedDays={selectedDays}/>
                            <div className={'flex justify-between mt-2'}>
                                <div>
                                    <p>Начало сеанса</p>
                                    <TimePicker onChange={setStartedAt}/>
                                </div>
                                <div>
                                    <p>Конец сеанса</p>
                                    <TimePicker onChange={setFinishedAt}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`h-full md:flex border border-gray-500 rounded-lg p-3 mt-3 gap-4`}>
                    <p className={`w-full md:w-2/6 lg:w-3/6 2xl:w-2/6 md:text-left`}>Настройки сеанса</p>
                    <div className={`w-full 2xl:w-4/6 h-full pb-2 flex flex-col justify-center items-start gap-2`}>
                        <CommonInput placeholder={"Начальная цена"} type={"number"}
                                     onChange={(e) => setFirstPrice(+e.target.value)}/>
                        <CommonInput placeholder={"Допустимое кол-во детей"} type={"number"}
                                     onChange={(e) => setMaxChild(+e.target.value)}/>
                        <CommonInput placeholder={"Продление на 30 минут"} type={"number"}
                                     onChange={(e) => setPenaltyPerHalfHour(+e.target.value)}/>
                        <CommonInput placeholder={"Продление на 1 час"} type={"number"}
                                     onChange={(e) => setPenaltyPerHour(+e.target.value)}/>
                        <CommonInput placeholder={"За каждого последующего ребенка"} type={"number"}
                                     onChange={(e) => setChildPrice(+e.target.value)}/>
                    </div>
                </div>
                <div className={`w-full sm:flex justify-between pt-6 gap-20`}>
                    <Button
                        backgroundColor={greenBg}
                        content={"ОТПРАВИТЬ"}
                        disabled={isDisabled() || isLoading}
                        onClick={createRoomTariffHandler}
                    />
                </div>
            </form>
        </div>
    )
}