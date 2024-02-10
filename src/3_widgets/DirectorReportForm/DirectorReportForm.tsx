import {DateRange} from "@/6_shared/BaseComponents/DateRange/DateRange.tsx";
import {ReportInfo} from "@/4_features/ReportInfo/ReportInfo.tsx";
import {ChooseEmployeeReport} from "@/4_features/ChooseEmployee/ChooseEmployeeReport.tsx";
import {Button} from "@/6_shared/BaseComponents/Button/Button.tsx";
import {selectReportByParams, setReportRequest, useLazyReportByParamQuery} from "@/5_entities/report";
import {useAppDispatch, useAppSelector} from "@/1_app/hooks.ts";
import {Spinner} from "@/6_shared/BaseComponents/Spinner/Spinner.tsx";
import {toast} from "react-toastify";
import {greenBg} from "@/6_shared/lib/colors.ts";

export const DirectorReportForm = () => {

    const report = useAppSelector(selectReportByParams)
    const dispatch = useAppDispatch()
    const [fetchReport, result] = useLazyReportByParamQuery()

    const dateChangeTrigger = (startDate: Date, endDate: Date) => {
        const request = {
            start_date: startDate.toLocaleDateString(),
            end_date: endDate.toLocaleDateString(),
            username: report?.request?.username
        }
        dispatch(setReportRequest(request))
        fetchReport(request)
    }

    if (result.isLoading)
        return <Spinner/>

    if (result.isError) {
        console.log(result.error)
        // @ts-ignore
        toast.error(`Ошибка ${result.error.status}`)
    }

    return (
        <form
            className={`w-5/6 md:w-2/4 2xl:w-1/3 p-6 sm:p-14 sm:pt-12 sm:pb-12 mt-14 sm:mt-28 
            m-auto 
            flex flex-col gap-10
            text-[14px] sm:text-[20px]  
            rounded-3xl bg-white border-2`}>
            <DateRange onChange={dateChangeTrigger}/>
            <ChooseEmployeeReport/>
            <ReportInfo/>
            <Button content={'СКАЧАТЬ ОТЧЕТ'} backgroundColor={greenBg}/>
        </form>
    );
};
