import {useAllPricesQuery} from "@/5_entities/price";
import {PriceCard} from "@/4_features/PriceCard/PriceCard.tsx";
import {useEffect} from "react";
import {getToastMessage} from "@/6_shared/lib/getToastMessage.ts";
import {Spinner} from "@/6_shared/BaseComponents/Spinner/Spinner.tsx";


function PriceCardList() {
    const {data, isLoading, isError, error} =
        useAllPricesQuery()

    useEffect(() => {
        if (isError)
            getToastMessage(error)
    }, [isError, error]);

    if (isLoading)
        return <Spinner/>


    if (!data?.length)
        return <div className={`w-[95%] m-auto text-gray-600`}>Создайте вашу первую цену... </div>

    if (isError)
        return <p className={'m-6 text-gray-700'}>Что-то пошло не так</p>

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