import {setReportRequest, useLazyReportByParamQuery, useReportUsernamesQuery} from "@/5_entities/report";
import {ChangeEvent, useEffect} from "react";
import {useAppDispatch} from "@/1_app/hooks.ts";
import {getToastMessage} from "@/6_shared/lib/getToastMessage.ts";
import {Spinner} from "@/6_shared/BaseComponents/Spinner/Spinner.tsx";

interface Props {
    username?: string,
    start_date?: string,
    end_date?: string
}

export const ChooseEmployeeReport = (reportRequest: Props) => {
    const {data, isLoading, isError, error} = useReportUsernamesQuery();
    const [getReport] = useLazyReportByParamQuery()
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (isError)
            getToastMessage(error)
    }, [error, isError]);


    if (isLoading)
        return <Spinner/>

    if (isError)
        return <p>Что-то пошло не так</p>

    const selectEmployeeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        const request = {
            start_date: reportRequest!.start_date!,
            end_date: reportRequest!.end_date!,
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