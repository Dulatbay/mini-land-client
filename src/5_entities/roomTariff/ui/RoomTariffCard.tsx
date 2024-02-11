import {DaysOfWeek} from "@/4_features/DaysOfWeek/DaysOfWeek.tsx";

interface Props {
    id: number;
    started_time: string;
    ended_time: string;
    first_price: number;
    max_child: number;
    week_days: number[];
}
const getSelectedDays = (weekDays: number[]) => {
    return [1, 2, 3, 4, 5, 6, 7].map((i) => weekDays.includes(i))
}
export const RoomTariffCard = ({started_time, ended_time, first_price, max_child, week_days}: Props) => {



    return <div className={`bg-white  min-h-40 rounded-2xl flex flex-col justify-between px-4 py-5 border-2`}>
        <div className={'w-full flex flex-wrap justify-between'}>
            <p className={'text-xl'}>{started_time}-{ended_time}</p>
            <div className={`text-right`}>
                <p className={'text-xl leading-none'}>{first_price}тг</p>
                <p>Цена до {max_child} детей</p>
            </div>
        </div>
        <div className={'w-full'}>
            <DaysOfWeek selectedDays={getSelectedDays(week_days)}/>
            {/*{*/}
            {/*    daysOfWeek.map((i, j) => <div*/}
            {/*        key={j}*/}
            {/*        className={`w-[35px] h-[35px] */}
            {/*                            text-center font-medium*/}
            {/*                            border rounded  */}
            {/*                            flex items-center justify-center  */}
            {/*                            cursor-pointer*/}
            {/*                            transition-all duration-500 `}>*/}
            {/*        {i}*/}
            {/*    </div>)*/}

            {/*}*/}
        </div>
    </div>
}