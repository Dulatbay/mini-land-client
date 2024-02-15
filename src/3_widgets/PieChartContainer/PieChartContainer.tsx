import {PieChart} from "@/4_features/PieChart/PieChart.tsx";
import {DateRange} from "@/6_shared/BaseComponents/DateRange/DateRange.tsx";
import {RateTypeSelector} from "@/3_widgets/RateTypeSelector/RateTypeSelector.tsx";
import {useEffect, useState} from "react";
import {Button} from "@/6_shared/BaseComponents/Button/Button.tsx";
import {greenBg, redBg} from "@/6_shared/lib/colors.ts";
import {useCreateProfitMutation, useLazyReportProfitsByParamsQuery} from "@/5_entities/report";
import {getToastMessage} from "@/6_shared/lib/getToastMessage.ts";
import {Spinner} from "@/6_shared/BaseComponents/Spinner/Spinner.tsx";

const expense = "Расход"
const income = "Доход"
export const PieChartContainer = () => {
    const [selected, setSelected] = useState(income)
    const [reasonProfit, setReasonProfit] = useState("")
    const [valueProfit, setValueProfit] = useState(0)
    const [createProfit, createProfitResult] = useCreateProfitMutation()
    const [fetchProfitsProfit, result] = useLazyReportProfitsByParamsQuery()

    useEffect(() => {
        if (createProfitResult.isError)
            getToastMessage(createProfitResult.error)
        if (result.isSuccess)
            window.location.reload()
    }, [createProfitResult]);

    const createButtonClickHandler = () => {
        const requestBody = {
            reason: reasonProfit,
            profit: valueProfit,
            is_expense: selected == expense
        }
        createProfit(requestBody)
    }

    const dateChangeHandler = (start_date: Date, end_date: Date) => {
        const request = {
            start_date: start_date.toLocaleDateString(),
            end_date: end_date.toLocaleDateString(),
        }
        fetchProfitsProfit(request)
    }


    useEffect(() => {
        if (result.isError)
            getToastMessage(result.error)
    }, [result]);

    if (result.isLoading) {
        return <Spinner/>
    }

    if (result.isError)
        return <p className={'m-6 text-gray-700'}>Что-то пошло не так</p>

    return <>
        <div
            className={'mt-10 border-2 rounded-xl bg-white flex flex-col justify-around h-fit gap-4 pt-10 pb-10 pr-7 pl-7'}>
            <PieChart series={[result.data?.income ?? 0, result.data?.expense ?? 0]}/>
            <DateRange onChange={dateChangeHandler}/>
            <div className={'flex flex-col gap-4 mt-3 border-t-2 pt-3 border-gray-500'}>
                <div>
                    <p className={'text-center mb-1'}>Записать новые значения</p>
                    <RateTypeSelector selected={selected} setSelected={setSelected}/>
                </div>
                <input className={"w-full 2xl:m-0 m-1 p-3 rounded-lg text-black border-2 focus:outline-gray-300"}
                       placeholder={"Сумма"}
                       type={'number'}
                       onChange={e => setValueProfit(+e.target.value)}/>
                <input className={"w-full 2xl:m-0 m-1 p-3 rounded-lg text-black border-2 focus:outline-gray-300"}
                       placeholder={"Причина"}
                       onChange={e => setReasonProfit(e.target.value)}/>
                <Button content={"Добавить"} backgroundColor={selected == 'Доход' ? greenBg : redBg}
                        onClick={createButtonClickHandler}/>
            </div>
        </div>
    </>
}