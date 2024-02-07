import {StockCard} from "@/4_features/StockCard/StockCard.tsx";
import {useAllSalesQuery} from "@/5_entities/sale";
import {toast} from "react-toastify";


function StokeCardList() {
    const {data, isLoading, isError, error} = useAllSalesQuery(true)

    if (isLoading)
        return "loading"

    if (isError) {
        console.log(error)
        // @ts-ignore
        toast.error(`Ошибка ${error.status}`)
    }

    if(!data?.length){
        return <div className={`w-[95%] m-auto text-gray-600`}>Акции пока нет... </div>
    }

    return (
        <div className={`w-[95%] flex gap-20 m-auto`}>
            {
                data!.map(sale =>
                    <StockCard title={sale.title} fullTime={sale.full_time} fullPrice={sale.full_price} id={sale.id}/>

                )
            }
        </div>
    );
}

export default StokeCardList;