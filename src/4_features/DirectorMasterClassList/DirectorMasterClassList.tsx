import {useAllMasterClassesQuery} from "@/5_entities/masterClass/api/masterClassApi.ts";
import {useEffect} from "react";
import {getToastMessage} from "@/6_shared/lib/getToastMessage.ts";
import {Spinner} from "@/6_shared/BaseComponents/Spinner/Spinner.tsx";
import {DirectorMasterClassCard} from "@/5_entities/masterClass/ui/DirectorMasterClassCard.tsx";

export const DirectorMasterClassList = () => {
    const {data, isSuccess, isError, isLoading, error} = useAllMasterClassesQuery(true)
    useEffect(() => {
        if (isError)
            getToastMessage(error)
    }, [isError, error]);


    if (isLoading)
        return <Spinner/>

    return <div className={'flex flex-wrap gap-2'}>
        {
            isSuccess ?
                data!.length ? data!.map(i => <DirectorMasterClassCard {...i} key={i.id}/>) :
                    <p className={'text-gray-800'}>Создай первый мастер класс</p>
                : <p>Не удалось получить данные</p>
        }
    </div>
}