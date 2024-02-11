import {OrderCount} from "@/5_entities/orderCount/OrderCount.tsx";
import {DirectorTable} from "@/3_widgets/DirectorTable/DirectorTable.tsx";
import {useReportTableQuery} from "@/5_entities/report/api/reportApi.ts";
import {Spinner} from "@/6_shared/BaseComponents/Spinner/Spinner.tsx";
import {useEffect} from "react";
import {getToastMessage} from "@/6_shared/lib/getToastMessage.ts";

export const DirectorMainPage = () => {
    const {data, isError, error, isLoading} = useReportTableQuery()

    useEffect(() => {
        if (isError) {
            getToastMessage(error)
            console.log(error)
        }
    }, [isError, error]);

    if (isLoading)
        return <Spinner/>

    if (isError)
        return <p className={'m-6 text-gray-700'}>Что-то пошло не так</p>

    return (
        <div>
            <OrderCount ordersCount={data?.orders_count ?? 0}/>
            <DirectorTable employees={data?.employee ?? []}/>
        </div>
    );
};