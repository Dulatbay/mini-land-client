import {useAllPricesQuery} from "@/5_entities/price";
import {PriceCard} from "@/4_features/PriceCard/PriceCard.tsx";
import {toast} from "react-toastify";


function PriceCardList() {
    const {data, isLoading, isError, error} =
        useAllPricesQuery()

    if (isLoading)
        return "loading"

    if (isError) {
        console.log(error)

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        toast.error(`Ошибка ${error.status}`)
    }

    if(!data?.length){
        return <div className={`w-[95%] m-auto text-gray-600`}>Создайте вашу первую цену... </div>
    }
    return (
        <div className={`w-[95%] pt-10 m-auto flex flex-wrap flex-col gap-4`}>
            {
                data!.map(price =>
                    <PriceCard id={price.id} fullPrice={price.full_price} fullTime={price.full_time} key={price.id}
                               days={price.days}/>
                )
            }
        </div>
    );
}

export default PriceCardList;