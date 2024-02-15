import {ButtonAddItem} from "@/6_shared/BaseComponents/ButtonAddItem";
import {useNavigate} from "react-router-dom";
import {useAllActiveRoomsQuery} from "@/5_entities/roomOrder/api/roomOrderApi.tsx";
import {useEffect} from "react";
import {getToastMessage} from "@/6_shared/lib/getToastMessage.ts";
import {Spinner} from "@/6_shared/BaseComponents/Spinner/Spinner.tsx";
import {RoomOrderCard} from "@/5_entities/roomOrder/ui/RoomOrderCard.tsx";

export const RoomOrdersPage = () => {
    const navigate = useNavigate()
    const {data, isError, error, isLoading}
        = useAllActiveRoomsQuery()

    const createOrderClickHandler = () => {
        navigate('/room-tariffs')
    }


    useEffect(() => {
        if (isError)
            getToastMessage(error)
    }, [isError, error]);

    if (isLoading)
        return <Spinner/>

    if (isError)
        return <div className={'w-[95%] m-auto text-gray-700'}><p>Не удалось получить данные</p></div>

    return <div className={'w-[95%] m-auto'}>
        <div className={`flex justify-between items-center pt-7`}>
            <div className={`text-[24px] md:text-[30px]`}>
                Ваши брони на ближайшие дни
            </div>
            <div className={'min-w-44'}>
                <ButtonAddItem text={"Создать бронь"} clickHandler={createOrderClickHandler}/>
            </div>
        </div>
        <div className={'w-[95%] m-auto flex flex-col items-stretch gap-10 mt-10'}>
            {
                data!.map((i) =>
                    <>
                        <RoomOrderCard {...i} key={i.id}/>
                    </>
                )
            }
        </div>
    </div>
}