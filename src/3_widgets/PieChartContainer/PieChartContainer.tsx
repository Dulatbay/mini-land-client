import {PieChart} from "@/4_features/PieChart/PieChart.tsx";
import {DateRange} from "@/6_shared/BaseComponents/DateRange/DateRange.tsx";
import {RateTypeSelector} from "@/3_widgets/RateTypeSelector/RateTypeSelector.tsx";
import {useState} from "react";
import {Button} from "@/6_shared/BaseComponents/Button/Button.tsx";
import {greenBg, redBg} from "@/6_shared/lib/colors.ts";
import {
    useCreateProfitMutation,
    useLazyReportProfitsByParamsQuery
} from "@/5_entities/report";

const expense = "Расход"
const income = "Доход"
export const PieChartContainer = () => {
    const [selected, setSelected] = useState(income)
    const [reasonProfit, setReasonProfit] = useState("")
    const [valueProfit, setValueProfit] = useState(0)
    const [createProfit] = useCreateProfitMutation()
    const [fetchProfitsProfit, result] = useLazyReportProfitsByParamsQuery()

    const createButtonClickHandler = () => {
        const requestBody = {
            reason: reasonProfit,
            profit: valueProfit,
            is_expense: selected == expense
        }
        createProfit(requestBody).finally(() =>
            setTimeout(() => {
                window.location.reload()
            }, 50)
        )
    }

    const dateChangeHandler = (start_date: Date, end_date: Date) => {
        const request = {
            start_date: start_date.toLocaleDateString(),
            end_date: end_date.toLocaleDateString(),
        }
        fetchProfitsProfit(request)
    }


    if (result.isError) {
        console.log(result.error)
        return "error"
    }

    if (result.isLoading) {
        return "loading"
    }

    return <>
        <div
            className={'mt-10 border-2 rounded-xl p-5 bg-gray-700 text-white flex flex-col justify-around h-fit gap-4'}>
            <PieChart series={[result.data?.income ?? 0, result.data?.expense ?? 0]}/>
            <DateRange onChange={dateChangeHandler}/>
            <div className={'flex flex-col gap-4 mt-3 border-t-2 pt-3 border-gray-500'}>
                <div>
                    <p className={'text-center mb-1'}>Записать новые значения</p>
                    <RateTypeSelector selected={selected} setSelected={setSelected}/>
                </div>
                <input className={"w-full 2xl:m-0 m-1 p-3 rounded-lg text-black"}
                       placeholder={"Сумма"}
                       type={'number'}
                       onChange={e => setValueProfit(+e.target.value)}/>
                <input className={"w-full 2xl:m-0 m-1 p-3 rounded-lg text-black"}
                       placeholder={"Причина"}
                       onChange={e => setReasonProfit(e.target.value)}/>
                <Button content={"Добавить"} backgroundColor={selected == 'Доход' ? greenBg : redBg}
                        onClick={createButtonClickHandler}/>
            </div>
        </div>
    </>
}