import {StockCard} from "@/4_features/StockCard/StockCard.tsx";
import {useAllSalesQuery} from "@/5_entities/sale";


function StokeCardList() {
    const {data, isLoading, isError, error} = useAllSalesQuery(true)

    if (isLoading)
        return "loading"

    if (isError) {
        console.log(error)
        return "error"
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