import {useParams} from "react-router-dom";
import {useLazyGetMasterClassesByOrderQuery} from "@/5_entities/masterClass/api/masterClassApi.ts";
import {MasterClassCard} from "@/5_entities/masterClass/ui/MasterClassCard.tsx";

export const MasterClassesListByOrder = () => {
    const {orderId} = useParams()
    const [getMasterClasses, result] = useLazyGetMasterClassesByOrderQuery()

    if (orderId && !isNaN(+orderId) && !result.isLoading && result.status === 'uninitialized') {
        getMasterClasses(+orderId)
    } else if (!orderId || isNaN(+orderId)) {
        return <div className={'w-[95%] m-auto'}>
            <p className={'text-gray-700'}>Не удалось достать данные</p>
        </div>
    }
    return <div className={'w-[95%] m-auto flex flex-wrap gap-4'}>
        {
            result.isSuccess ?
                result.data!.length ?
                    result.data!.map(i => <MasterClassCard {...i} key={i.id}/>) :
                    <p className={'text-gray-800'}>Добавьте первый мастер класс</p>
                :
                <p className={'text-gray-700'}>Не удалось достать данные</p>
        }
    </div>
}