import {NavBar} from "@/3_widgets/NavBar/ui/NavBar.tsx";
import {OrderCount} from "@/5_entities/orderCount/OrderCount.tsx";
import {DirectorTable} from "@/3_widgets/DirectorTable/DirectorTable.tsx";
import {useDirectorMainReportQuery} from "@/5_entities/order";

export const DirectorMainPage = () => {
    const {data, isLoading, isError, error} = useDirectorMainReportQuery()

    if (isLoading)
        return "loading"

    if (isError) {
        console.log(error)
        return "error, check console"
    }

    return (
        <div>
            <NavBar/>
            <OrderCount ordersCount={data!.orders_count}/>
            <DirectorTable employees={data!.employee}/>
        </div>
    );
};