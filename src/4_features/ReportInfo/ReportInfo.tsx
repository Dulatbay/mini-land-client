import {getTime} from "@/6_shared/lib/getTime.ts";

interface Props {
    ordersCount: number,
    totalTime: number,
    profit: number,
}

export const ReportInfo = (response: Props) => {
    return (
        <div className={`text-[12px] sm:text-[20px] p-6 border-2 rounded-2xl`}>
            <p>Заказов: {response.ordersCount}</p>
            <p>Прибыль: {response.profit}</p>
            <p>Общее время: {getTime(response.totalTime)}</p>
        </div>
    );
};
