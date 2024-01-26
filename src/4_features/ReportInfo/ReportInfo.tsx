import {useAppSelector} from "@/1_app/hooks@deprecated.ts";
import {selectReportByParams} from "@/5_entities/report/model/slice.ts";
import {getTime} from "@/6_shared/lib/getTime.ts";

export const ReportInfo = () => {
    const report = useAppSelector(selectReportByParams)
    return (
        <div className={`text-[12px] sm:text-[20px] p-6 border border-white rounded-2xl`}>
            <p>Заказов: {report?.response.ordersCount}</p>
            <p>Прибыль: {report?.response.profit}</p>
            <p>Общее время: {getTime(report?.response.totalTime)}</p>
        </div>
    );
};
