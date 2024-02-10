import {
    selectReportByParams,
    setReportRequest,
    useLazyReportByParamQuery,
    useReportUsernamesQuery
} from "@/5_entities/report";
import {ChangeEvent} from "react";
import {useAppDispatch, useAppSelector} from "@/1_app/hooks.ts";

export const ChooseEmployeeReport = () => {
    const {data, isLoading, isError, error} = useReportUsernamesQuery();
    const [getReport] = useLazyReportByParamQuery()
    const reportRequest = useAppSelector(selectReportByParams)?.request
    const dispatch = useAppDispatch();


    if (isLoading)
        return "loading"

    if (isError) {
        console.log(error)
        return "error"
    }


    const selectEmployeeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        const request = {
            start_date: reportRequest?.start_date!,
            end_date: reportRequest?.end_date!,
            username: data![+event.target.value]
        }
        dispatch(setReportRequest(request))
        getReport(request)
    }


    return <div>
        <label htmlFor="employees" className="block mb-1 text-sm font-medium text-gray-900">Выберите
            сотрудника</label>
        <select id="employees"
                defaultValue={"all"}
                onChange={selectEmployeeHandler}
                className="border-2 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
            <option value={"all"}>Все сотрудники</option>
            {
                data?.map((username, i) =>
                    <option key={i} value={i}>{username}</option>
                )
            }
        </select>

    </div>
}