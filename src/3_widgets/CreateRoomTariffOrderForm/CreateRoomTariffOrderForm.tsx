import {greenBg} from "@/6_shared/lib/colors.ts";
import {Button} from "@/6_shared/BaseComponents/Button/Button.tsx";
import {useNavigate, useParams} from "react-router-dom";
import {MouseEvent, useEffect, useState} from "react";
import {getToastMessage} from "@/6_shared/lib/getToastMessage.ts";
import {useLazyGetRoomTariffByIdQuery} from "@/5_entities/roomTariff/api/roomTariffApi.ts";
import {RoomTariffCard} from "@/5_entities/roomTariff/ui/RoomTariffCard.tsx";
import {CommonInput} from "@/6_shared/BaseComponents/CommonInput/CommonInput.tsx";
import InputMask from "react-input-mask";
import DatePicker from "react-datepicker";
import {useCreateRoomTariffOrderMutation, useLazyAllBookedDaysQuery} from "@/5_entities/roomOrder/api/roomOrderApi.tsx";
import {RequestCreateRoomOrderDto} from "@/5_entities/roomOrder/model/types.ts";

export const CreateRoomTariffOrderForm = () => {
    const {id} = useParams()
    const [geyById, roomTariff] = useLazyGetRoomTariffByIdQuery()
    const [getBookedDays, bookedDays] = useLazyAllBookedDaysQuery()
    const [createRoomTariffOrder, createResult] = useCreateRoomTariffOrderMutation()

    const [parentName, setParentName] = useState<undefined | string>()
    const [phoneNumber, setPhoneNumber] = useState<undefined | string>()
    const date = new Date()
    date.setHours(date.getHours() + 24)
    const [selectedDate, setSelectedDate] = useState(date)
    const [extraTime, setExtraTime] = useState(0)
    const [childCount, setChildCount] = useState(0)
    const [paid, setPaid] = useState(false)


    const navigate = useNavigate()

    useEffect(() => {
        if (roomTariff.isError) {
            getToastMessage(roomTariff.error)
            navigate('/room-tariffs')
        }
        if (bookedDays.isError) {
            getToastMessage(bookedDays.error)
            navigate('/room-tariffs')
        }
        if (createResult.isError) {
            getToastMessage(createResult.error)
        }
    }, [roomTariff.isError, roomTariff.error, navigate, bookedDays.isError, bookedDays.error, createResult.isError, createResult.error]);

    if (id && !isNaN(+id) && !roomTariff.isLoading && roomTariff.status === 'uninitialized') {
        geyById(+id)
        getBookedDays(+id)
    } else if (!id || isNaN(+id)) {
        throw new Error("Невозможно найти страничку")
    }

    const createRoomTariffOrderHandler = () => {
        const reqBody: RequestCreateRoomOrderDto = {
            child_count: childCount,
            client_name: parentName!,
            client_phone_number: phoneNumber!,
            selected_booked_day: selectedDate!.toLocaleDateString()!,
            tariff_id: roomTariff.data!.id,
            extra_time: extraTime * 60,
            paid: paid
        }

        createRoomTariffOrder(reqBody)
    }

    if (createResult.isSuccess) {
        setTimeout(() => {
            window.location.reload()
        }, 100)
        navigate('/room-orders')
    }

    const isPaidCheckBoxHandler = (event: MouseEvent<HTMLInputElement>) => {
        setPaid(event.currentTarget.checked)
    }

    return <div
        className={`max-w-2xl mt-7 md:mt-0 p-10 border-2 m-auto rounded-3xl bg-white`}>
        <div className={`w-full pb-3 flex flex-col md:justify-between items-center`}>
            <img src={'/icons/Logo.svg'} className={`w-32 object-contain`} style={{backgroundPosition: "center"}}
                 alt={''}/>
            <p className={`pt-3 text-2xl font-medium`}>Создать заказ</p>
        </div>
        <form method={"POST"}>
            <div className={`h-full md:flex border border-gray-500 rounded-lg p-3 mt-3 gap-4`}>
                <p className={`w-full md:w-2/6 lg:w-3/6 2xl:w-2/6 md:text-left`}>Настройка времени</p>
                <div className={`w-full 2xl:w-4/6 h-full pb-2 flex flex-col justify-center items-start gap-2`}>
                    <div className={'w-full'}>
                        {
                            roomTariff.isSuccess
                                ?
                                <>
                                    <RoomTariffCard {...roomTariff.data!} inForm={true}/>
                                </>
                                : ""
                        }
                    </div>
                </div>
            </div>
            <div className={`h-full md:flex border border-gray-500 rounded-lg p-3 mt-3 gap-4`}>
                <p className={`w-full md:w-2/6 lg:w-3/6 2xl:w-2/6 md:text-left`}>Клиент</p>
                <div className={`w-full 2xl:w-4/6 h-full pb-2 flex flex-col justify-center items-start gap-2`}>
                    <CommonInput placeholder="ФИО" onChange={(e) => setParentName(e.target.value)}/>
                    <InputMask placeholder="+7 (___) ___-__-__"
                               mask="+7 (999) 999-99-99"
                               className={"w-full 2xl:m-0 p-3 rounded-lg border-2 focus:outline-gray-300"}
                               onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>
            </div>
            <div className={`h-full md:flex border border-gray-500 rounded-lg p-3 mt-3 gap-4`}>
                <p className={`w-full md:w-2/6 lg:w-3/6 2xl:w-2/6 md:text-left`}>Заказ</p>
                <div className={`w-full 2xl:w-4/6 h-full pb-2 flex flex-col justify-center items-stretch bg-white`}>
                    {
                        bookedDays.isSuccess ?
                            <DatePicker
                                popperPlacement={'right-start'}
                                className={`text-left rounded-[5px] border-2 w-full mb-2 p-3`}
                                onChange={(e) => {
                                    if (e)
                                        setSelectedDate(e)
                                }}
                                excludeDates={bookedDays.data!.map(i => new Date(i.date))}
                                dateFormat="dd.MM.yyyy"
                                selected={selectedDate}

                            /> : ""
                    }
                    <div className={'mb-2'}>
                        <CommonInput placeholder="Доп. время(в минутах)"
                                     type={"number"}
                                     min={0}
                                     onChange={(e) => setExtraTime(+e.target.value)}/>
                    </div>
                    <CommonInput placeholder="Количество детей"
                                 type={"number"}
                                 min={0}
                                 onChange={(e) => setChildCount(+e.target.value)}
                    />
                </div>
            </div>
            {
                roomTariff.isSuccess ?
                    <div className={'mt-1 text-gray-700'}>
                        <p className={'leading-5'}>За каждого следующего
                            ребенка: <strong> {roomTariff!.data.first_price} тг</strong></p>
                        <p className={'leading-5'}>Продление на 30
                            минут: <strong> {roomTariff!.data.penalty_per_half_hour} тг</strong></p>
                        <p className={'leading-5'}>Продление на 1
                            час: <strong>{roomTariff!.data.penalty_per_hour} тг</strong></p>
                    </div>
                    : ""
            }
            <label className={""}>
                <span className={"mr-1"}>
                    Заказ оплачен:
                </span>
                <input type="checkbox"
                       onClick={isPaidCheckBoxHandler}/>
            </label>
            <div className={`w-full sm:flex justify-between pt-6 gap-20`}>
                <Button
                    backgroundColor={greenBg}
                    content={"ОТПРАВИТЬ"}
                    onClick={createRoomTariffOrderHandler}
                />
            </div>
        </form>
    </div>
}