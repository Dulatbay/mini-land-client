import {useAllPricesQuery} from "@/5_entities/price";
import {PriceCard} from "@/4_features/PriceCard/PriceCard.tsx";


function PriceCardList() {
    const {data, isLoading, isError, error} = useAllPricesQuery(true)

    if (isLoading)
        return "loading"

    if (isError) {
        console.log(error)
        return "error"
    }
    return (
        <div className={`w-[95%] pt-10 m-auto flex flex-wrap flex-col gap-4`}>
            {
                data!.map(price =>
                    <PriceCard id={price.id} fullPrice={price.full_price} fullTime={price.full_time} key={price.id}/>
                )
            }
        </div>
    );
}

export default PriceCardList;