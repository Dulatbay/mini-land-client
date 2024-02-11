import {StockCard} from "@/4_features/StockCard/StockCard.tsx";
import {useAllSalesQuery} from "@/5_entities/sale";
import {useEffect} from "react";
import {getToastMessage} from "@/6_shared/lib/getToastMessage.ts";
import {Spinner} from "@/6_shared/BaseComponents/Spinner/Spinner.tsx";


function StokeCardList() {
    const {data, isLoading, isError, error} = useAllSalesQuery(true)

    useEffect(() => {
        if (isError)
            getToastMessage(error)
    }, [isError, error]);

    if (isLoading)
        return <Spinner/>

    if (isError)
        return <p className={'m-6 text-gray-700'}>Что-то пошло не так</p>


    if (!data?.length) {
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