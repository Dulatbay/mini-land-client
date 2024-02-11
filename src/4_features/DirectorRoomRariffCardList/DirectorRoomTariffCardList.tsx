import {useAllRoomTariffsQuery} from "@/5_entities/roomTariff/api/roomTariffApi.ts";
import {Spinner} from "@/6_shared/BaseComponents/Spinner/Spinner.tsx";
import {useEffect} from "react";
import {getToastMessage} from "@/6_shared/lib/getToastMessage.ts";
import {DirectorRoomTariffCard} from "@/5_entities/roomTariff/ui/DirectorRoomTariffCard.tsx";

export const DirectorRoomTariffCardList = () => {
    const {data, isError, error, isLoading} = useAllRoomTariffsQuery(true)

    useEffect(() => {
        if (isError)
            getToastMessage(error)
    }, [isError, error]);

    if (isLoading)
        return <Spinner/>

    if (isError)
        return <p className={'m-6 text-gray-700'}>Что-то пошло не так</p>

    return <div className={'flex flex-wrap mt-2 gap-2'}>
        {
            data!.length ? data!.map(i => <DirectorRoomTariffCard {...i} key={i.id}/>) :
                <p className={'text-gray-700'}>Создайте ваш первый тариф</p>
        }
    </div>
}