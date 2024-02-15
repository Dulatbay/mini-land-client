import {DaysOfWeek} from "@/4_features/DaysOfWeek/DaysOfWeek.tsx";
import {Button} from "@/6_shared/BaseComponents/Button/Button.tsx";
import {useNavigate} from "react-router-dom";

interface Props {
    id: number;
    started_time: string;
    ended_time: string;
    first_price: number;
    max_child: number;
    week_days: number[];
    inForm?: boolean
}

const getSelectedDays = (weekDays: number[]) => {
    return [1, 2, 3, 4, 5, 6, 7].map((i) => weekDays.includes(i))
}
export const RoomTariffCard = ({id, started_time, ended_time, first_price, max_child, week_days, inForm}: Props) => {
    const navigate = useNavigate()
    const selectClickHandler = () => {
        navigate(`/room-tariffs-booking/${id}`)
    }

    return <div
        className={`min-h-40 rounded-2xl flex flex-col justify-between px-4 py-5 border-2 gap-4 ${inForm ? "bg-[#F2F2F2] border-4" : ""}`}>
        <div className={'flex flex-wrap justify-between'}>
            <p className={'text-xl'}>{started_time}-{ended_time}</p>
            <div className={`text-right`}>
                <p className={'text-xl leading-none'}>{first_price}тг</p>
                <p>Цена до {max_child} детей</p>
            </div>
        </div>
        <div className={'flex flex-col gap-2 w-full'}>
            <DaysOfWeek selectedDays={getSelectedDays(week_days)}/>
            {
                inForm ?
                    ""
                    : <Button content={"Выбрать"} backgroundColor={"bg-green-600"} onClick={selectClickHandler}/>

            }
        </div>
    </div>
}