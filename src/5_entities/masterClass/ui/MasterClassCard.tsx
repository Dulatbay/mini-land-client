import {CardMasterClassDto} from "@/5_entities/masterClass/model/types.ts";
import {Button} from "@/6_shared/BaseComponents/Button/Button.tsx";
import {useAddToOrderMutation} from "@/5_entities/masterClass/api/masterClassApi.ts";
import {useEffect} from "react";
import {getToastMessage} from "@/6_shared/lib/getToastMessage.ts";
import {useNavigate, useParams} from "react-router-dom";

interface Props extends CardMasterClassDto {
    isAbleToAdd?: boolean
}

export const MasterClassCard = ({title, price, image_url, description, id, isAbleToAdd}: Props) => {
    const [addToOrder, result] = useAddToOrderMutation()
    const {orderId} = useParams()

    useEffect(() => {
        if (result.isError)
            getToastMessage(result.error)
    }, [result]);

    const navigate = useNavigate()

    if (result.isSuccess)
        navigate(`/orders/${orderId}`)


    const addToOrderButtonHandler = () => {
        if (orderId && !isNaN(+orderId) && !result.isLoading && result.status === 'uninitialized') {
            addToOrder({masterClassId: id, orderId: +orderId})
        } else if (!orderId || isNaN(+orderId)) {
            throw new Error("Page not found")
        }
    }


    return <div
        className="flex flex-col border-2 bg-white rounded-lg shadow md:flex-row md:max-w-xl">
        <img
            className="object-cover h-52 aspect-square object-center bg-red-200 rounded-t-lg md:rounded-none md:rounded-s-lg"
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
                    {
                        isAbleToAdd ?
                            <Button content={"Добавить в заказу"}
                                    backgroundColor={'bg-green-600'}
                                    onClick={addToOrderButtonHandler}
                            />
                            : ""
                    }
                </div>
            </div>
        </div>
    </div>


}