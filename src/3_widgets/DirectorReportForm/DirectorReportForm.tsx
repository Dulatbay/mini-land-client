import {DateRange} from "@/6_shared/BaseComponents/DateRange/DateRange.tsx";
import {ReportInfo} from "@/4_features/ReportInfo/ReportInfo.tsx";
import {ChooseEmployeeReport} from "@/4_features/ChooseEmployee/ChooseEmployeeReport.tsx";
import {selectReportByParams, setReportRequest, useLazyReportByParamQuery} from "@/5_entities/report";
import {useAppDispatch, useAppSelector} from "@/1_app/hooks.ts";
import {Spinner} from "@/6_shared/BaseComponents/Spinner/Spinner.tsx";
import {useEffect, useState} from "react";
import {getToastMessage} from "@/6_shared/lib/getToastMessage.ts";
import {greenBg} from "@/6_shared/lib/colors.ts";

export const DirectorReportForm = () => {

    const report = useAppSelector(selectReportByParams)
    const dispatch = useAppDispatch()
    const [fetchReport, result] = useLazyReportByParamQuery()
    const [curStartDate, setCurStartDate] = useState(new Date())
    const [curEndDate, setCurEndDate] = useState(new Date())

    const dateChangeTrigger = (startDate: Date, endDate: Date) => {
        const request = {
            start_date: startDate.toLocaleDateString(),
            end_date: endDate.toLocaleDateString(),
            username: report?.request?.username
        }
        dispatch(setReportRequest(request))
        fetchReport(request)
        setCurStartDate(startDate)
        setCurEndDate(endDate)

    }

    useEffect(() => {
        if (result.isError)
            getToastMessage(result.error)
    }, [result]);

    if (result.isLoading)
        return <Spinner/>

    if (result.isError)
        return <p className={'m-6 text-gray-700'}>Что-то пошло не так</p>

    return (
        <form
            className={`w-5/6 md:w-2/4 2xl:w-1/3 p-6 sm:p-14 sm:pt-12 sm:pb-12 mt-14 sm:mt-28 
            m-auto 
            flex flex-col gap-10
            text-[14px] sm:text-[20px]      
            rounded-3xl bg-white border-2`}>
            <DateRange onChange={dateChangeTrigger}/>
            <ChooseEmployeeReport {...report.request}/>
            <ReportInfo {...report.response}/>
            <a className={`${greenBg} w-full text-center p-2 rounded-lg text-white disabled:opacity-60`}
               href={`${import.meta.env.VITE_API_URL}/reports/excel?start_date=${curStartDate.toLocaleDateString()}&end_date=${curEndDate.toLocaleDateString()}`}
               download="proposed_file_name">СКАЧАТЬ ОТЧЕТ</a>
        </form>
    );
};
