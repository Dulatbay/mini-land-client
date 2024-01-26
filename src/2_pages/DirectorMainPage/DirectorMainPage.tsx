import {OrderCount} from "@/5_entities/orderCount/OrderCount.tsx";
import {DirectorTable} from "@/3_widgets/DirectorTable/DirectorTable.tsx";
import {useReportTableQuery} from "@/5_entities/report/api/reportApi.ts";
import {toast} from "react-toastify";
import {Spinner} from "@/6_shared/BaseComponents/Spinner/Spinner.tsx";

export const DirectorMainPage = () => {
    const {data, isError, error, isLoading} = useReportTableQuery()

    if (isError) {
        // @ts-ignore
        toast.error(`Oшибка ${error.status}`)
        console.log(error)
    }

    if (isLoading)
        return <Spinner/>

    return (
        <div>
            <OrderCount ordersCount={data?.orders_count ?? 0}/>
            <DirectorTable employees={data?.employee ?? []}/>
        </div>
    );
};