import {ButtonDelete} from "@/6_shared/BaseComponents/ButtonDelete/ButtonDelete.tsx";
import {CardMasterClassDto} from "@/5_entities/masterClass/model/types.ts";
import {useEffect} from "react";
import {Spinner} from "@/6_shared/BaseComponents/Spinner/Spinner.tsx";
import {getToastMessage} from "@/6_shared/lib/getToastMessage.ts";
import {useDeleteMasterClassByIdMutation} from "@/5_entities/masterClass/api/masterClassApi.ts";

export const DirectorMasterClassCard = ({title, price, image_url, description, id}: CardMasterClassDto) => {
    const [deleteMasterClass, {isLoading, isError, error, isSuccess}] = useDeleteMasterClassByIdMutation()

    useEffect(() => {
        if (isError) {
            getToastMessage(error)
        }
    }, [isError, error]);


    const deleteButtonHandler = (masterClassId: number) => {
        deleteMasterClass(masterClassId)
    }

    if (isLoading)
        return <Spinner/>

    if (isSuccess)
        window.location.reload()

    return <div
        className="flex flex-col border-2 bg-white rounded-lg shadow md:flex-row md:max-w-xl">
        <img className="object-cover h-52 w-52 object-center bg-red-200 rounded-t-lg md:rounded-none md:rounded-s-lg"
             src={`${image_url ? image_url : '/images/masterClassSample.png'}`}
             alt="image"/>
        <div className="flex flex-col p-4 self-stretch justify-between">
            <div>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
                <p className="font-normal text-gray-700 break-all">{description.substring(0, 90)}</p>
            </div>
            <div className={"flex mb-3 w-full justify-between items-center"}>
                <p className={'text-xl mr-8'}>Цена: <strong>{price}</strong></p>
                <div className={"self-end"}>
                    <ButtonDelete showIcon={true} clickHandler={() => {
                        deleteButtonHandler(id)
                    }}/>
                </div>
            </div>
        </div>
    </div>


}