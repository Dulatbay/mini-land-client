import {RoomTariffCard} from "@/5_entities/roomTariff/ui/RoomTariffCard.tsx";
import {CommonInput} from "@/6_shared/BaseComponents/CommonInput/CommonInput.tsx";
import InputMask from "react-input-mask";
import DatePicker from "react-datepicker";
import {Button} from "@/6_shared/BaseComponents/Button/Button.tsx";
import {greenBg} from "@/6_shared/lib/colors.ts";
import {ResponseCardRoomOrderDto} from "@/5_entities/roomOrder/model/types.ts";
import {useDeleteOrderMutation, useFinishOrderMutation} from "@/5_entities/roomOrder/api/roomOrderApi.tsx";
import {MouseEvent, useEffect, useState} from "react";
import {getToastMessage} from "@/6_shared/lib/getToastMessage.ts";
import {getTime} from "@/6_shared/lib/getTime.ts";
import {toast} from "react-toastify";

export const RoomOrderCard = ({
                                  author_name,
                                  client_name,
                                  client_phone_number,
                                  room_tariff,
                                  child_quantity,
                                  full_price,
                                  extra_time,
                                  full_time,
                                  ended_time,
                                  day_of_booking,
                                  booked_day,
                                  finished,
                                  started,
                                  paid,
                                  id,
                                  is_finished
                              }: ResponseCardRoomOrderDto) => {
    const [finishOrder, finishOrderResult] = useFinishOrderMutation()
    const [deleteOrder, deleteOrderResult] = useDeleteOrderMutation()
    const [currentPaid, setCurrentPaid] = useState(paid)
    const deleteButtonHandler = () => {
        deleteOrder(id)
    }

    const deleteButtonIsAvailable = () => {
        return !finished
    }

    const endButtonHandler = () => {
        finishOrder({id: id, paid: currentPaid})
    }

    const endButtonIsAvailable = () => {
        return !finished && currentPaid && started
    }

    const isPaidCheckBoxHandler = (event: MouseEvent<HTMLInputElement>) => {
        setCurrentPaid(event.currentTarget.checked)
    }

    useEffect(() => {
        if (finishOrderResult.isError)
            getToastMessage(finishOrderResult.error)
        if (deleteOrderResult.isError)
            getToastMessage(deleteOrderResult.error)
        if (finishOrderResult.isSuccess){
            window.location.reload()
            setTimeout(()=>{
                toast.success("Вы успешно завершили бронь")
            }, 1000)
        }
        if (deleteOrderResult.isSuccess){
            window.location.reload()
            setTimeout(()=>{
                toast.success("Вы успешно удалили бронь")
            }, 1000)
        }
    }, [finishOrderResult, deleteOrderResult]);


    return <div
        className={`w-full mt-7 md:mt-0 p-10 border-2 m-auto rounded-3xl bg-white`}>
        <div className={`w-full pb-3 flex flex-col md:justify-between items-center`}>
            <img src={'/icons/Logo.svg'} className={`w-32 object-contain`} style={{backgroundPosition: "center"}}
                 alt={''}/>
            <p className={`pt-3 text-2xl font-medium`}>Бронь комнаты</p>
        </div>
        <form method={"POST"}>
            <div className={`h-full md:flex border border-gray-500 rounded-lg p-3 mt-3 gap-4`}>
                <p className={`w-full md:w-2/6 lg:w-3/6 2xl:w-2/6 md:text-left`}>Настройка времени</p>
                <div className={`w-full 2xl:w-4/6 h-full pb-2 flex flex-col justify-center items-start gap-2`}>
                    <div className={'w-full'}>
                        <RoomTariffCard {...room_tariff} inForm={true}/>
                    </div>
                </div>
            </div>
            <div className={`h-full md:flex border border-gray-500 rounded-lg p-3 mt-3 gap-4`}>
                <p className={`w-full md:w-2/6 lg:w-3/6 2xl:w-2/6 md:text-left`}>Клиент</p>
                <div className={`w-full 2xl:w-4/6 h-full pb-2 flex flex-col justify-center items-start gap-2`}>
                    <CommonInput placeholder="ФИО"
                                 disabled={true}
                                 value={client_name}
                    />
                    <InputMask value={client_phone_number}
                               mask="+7 (999) 999-99-99"
                               className={"w-full 2xl:m-0 p-3 rounded-lg border-2 focus:outline-gray-300"}
                               disabled={true}
                    />
                </div>
            </div>
            <div className={`h-full md:flex border border-gray-500 rounded-lg p-3 mt-3 gap-4`}>
                <p className={`w-full md:w-2/6 lg:w-3/6 2xl:w-2/6 md:text-left`}>Заказ</p>
                <div className={`w-full 2xl:w-4/6 h-full pb-2 flex flex-col justify-center items-stretch bg-white`}>
                    <label htmlFor="data-picker" className={"text-gray-700 text-sm"}>Забронированный день</label>
                    <DatePicker
                        id={"data-picker"}
                        popperPlacement={'right-start'}
                        className={`text-left rounded-[5px] border-2 w-full mb-2 p-3`}
                        disabled={true}
                        dateFormat="dd.MM.yyyy"
                        selected={new Date(booked_day)}
                        onChange={() => {
                        }}
                    />
                    <div className={'mb-2'}>
                        <CommonInput placeholder="Доп. время"
                                     value={getTime(extra_time)}
                                     disabled={true}/>
                    </div>
                    <CommonInput placeholder="Количество детей"
                                 type={"number"}
                                 min={0}
                                 disabled={true}
                                 value={child_quantity.toString()}
                    />
                </div>
            </div>
            <div className={'mt-1 text-gray-700'}>
                <p className={'leading-5'}>За каждого следующего
                    ребенка: <strong> {room_tariff.first_price} тг</strong></p>
                <p className={'leading-5'}>Продление на 30
                    минут(за каждого ребенка): <strong> {room_tariff.penalty_per_half_hour} тг</strong></p>
                <p className={'leading-5'}>Продление на 1
                    час(за каждого ребенка): <strong>{room_tariff.penalty_per_hour} тг</strong></p>
                <p className={'leading-5'}>Принял бронь: <strong>{author_name}</strong> в {day_of_booking}</p>
                <p className={'leading-5'}>Общее время: <strong>{getTime(full_time)}</strong></p>
                <p className={'leading-5'}>Общая стоимость: <strong>{full_price} тг</strong></p>
                <p className={'leading-5'}>Вход: <strong>{room_tariff.started_time}</strong></p>
                <p className={'leading-5'}>Выход: <strong>{ended_time}</strong></p>
            </div>
            <label className={""}>
                <span className={"mr-1"}>
                    Заказ оплачен:
                </span>
                <input type="checkbox"
                       onClick={isPaidCheckBoxHandler}/>
            </label>
            <div className={`w-full sm:flex justify-between pt-6 gap-8`}>
                {
                    is_finished ?
                        <>
                            <Button
                                backgroundColor={greenBg}
                                content={"ЗАВЕРШЕНО"}
                                disabled={true}
                            />

                        </>
                        :
                        <>
                            <Button
                                backgroundColor={greenBg}
                                content={"УДАЛИТЬ"}
                                onClick={deleteButtonHandler}
                                disabled={!deleteButtonIsAvailable()}
                            />
                            <Button
                                backgroundColor={greenBg}
                                disabled={!endButtonIsAvailable()}
                                onClick={endButtonHandler}
                                content={"ЗАВЕРШИТЬ"}
                            />
                        </>
                }
            </div>
        </form>
    </div>
}