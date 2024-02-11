import {useAllRoomTariffsQuery} from "@/5_entities/roomTariff/api/roomTariffApi.ts";
import {useEffect} from "react";
import {getToastMessage} from "@/6_shared/lib/getToastMessage.ts";
import {Spinner} from "@/6_shared/BaseComponents/Spinner/Spinner.tsx";
import {RoomTariffCard} from "@/5_entities/roomTariff/ui/RoomTariffCard.tsx";

export const RoomTariffCardList = () => {
    const {data, isError, error, isLoading} = useAllRoomTariffsQuery(true)

    useEffect(() => {
        if (isError)
            getToastMessage(error)
    }, [isError, error]);


    if (isLoading)
        return <Spinner/>

    return <div className={'flex flex-wrap mt-2'}>
        {
            data!.length ?
                data!.map(i => <RoomTariffCard {...i} />) :
                <p className={'text-gray-700'}>Создайте первый тариф</p>
        }
    </div>
}