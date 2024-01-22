import {DateRange} from "@/6_shared/BaseComponents/DateRange/DateRange.tsx";
import {ReportInfo} from "@/4_features/ReportInfo/ReportInfo.tsx";
import {ButtonDownloadReport} from "@/4_features/ButtonDownloadReport/ButtonDownloadReport.tsx";

export const DirectorReportForm = () => {
    return (
        <form className={`w-5/6 md:w-4/6 2xl:w-1/3 p-6 sm:p-16 mt-14 sm:mt-28 m-auto text-[14px] sm:text-[20px] text-white rounded-3xl bg-[#3D3D3D]`}>
            <p>Диапазон</p>
            <DateRange/>
            <p className={`pt-8`}>↓ Все сотрудники</p>
            <ReportInfo/>
            <ButtonDownloadReport/>
        </form>
    );
};
