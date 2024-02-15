import {ButtonDelete} from "@/6_shared/BaseComponents/ButtonDelete/ButtonDelete.tsx";
import {DaysOfWeek} from "@/4_features/DaysOfWeek/DaysOfWeek.tsx";
import {useDeleteRoomTariffByIdMutation} from "@/5_entities/roomTariff/api/roomTariffApi.ts";
import {Spinner} from "@/6_shared/BaseComponents/Spinner/Spinner.tsx";
import {useEffect} from "react";
import {getToastMessage} from "@/6_shared/lib/getToastMessage.ts";

interface Props {
    id: number;
    started_time: string;
    ended_time: string;
    first_price: number;
    max_child: number;
    week_days: number[];
}

const getSelectedDays = (weeekDays: number[]) => {
    return [1, 2, 3, 4, 5, 6, 7].map((i) => weeekDays.includes(i))
}

export const DirectorRoomTariffCard = ({id, started_time, ended_time, first_price, max_child, week_days}: Props) => {
    const [deleteRoomTariff,
        {isError, error, isLoading, isSuccess}] = useDeleteRoomTariffByIdMutation()


    useEffect(() => {
        if (isError)
            getToastMessage(error)
    }, [isError, error]);

    if (isLoading)
        return <Spinner/>

    const deleteHandler = (roomTariffId: number) => {
        deleteRoomTariff(roomTariffId)
    }

    if (isSuccess) {
        window.location.reload()
    }

    return <div className={`bg-white gap-12 rounded-2xl flex flex-col justify-between px-4 py-5 border-2`}>
        <div className={'w-full flex  justify-between'}>
            <p className={'text-xl'}>{started_time}-{ended_time}</p>
            <div className={`text-right`}>
                <p className={'text-xl leading-none'}>{first_price} тг</p>
                <p>Цена до {max_child} детей</p>
            </div>
        </div>
        <div className={'w-full flex justify-between items-center'}>
            <div className={'flex flex-wrap gap-1'}>
                <DaysOfWeek selectedDays={getSelectedDays(week_days)}/>
            </div>
            <div className={'ml-8'}>
                <ButtonDelete showIcon={true} clickHandler={() => deleteHandler(id)}/>
            </div>
        </div>
    </div>
}