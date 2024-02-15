import {ButtonAddItem} from "@/6_shared/BaseComponents/ButtonAddItem";
import {DirectorRoomTariffCardList} from "@/4_features/DirectorRoomRariffCardList/DirectorRoomTariffCardList.tsx";
import {useNavigate} from "react-router-dom";


export const DirectorRoomTariffsPage = () => {
    const navigate = useNavigate()
    const createClickHandler = () => {
        navigate("/create-room-tariff")
    }

    return <div className={'w-[95%] m-auto'}>
        <div className={`flex justify-between items-center pt-7`}>
            <div className={`text-[24px] md:text-[30px]`}>
                Ваши тарифы комнат
            </div>
            <ButtonAddItem text={"Создать тариф"} clickHandler={createClickHandler}/>
        </div>
        <DirectorRoomTariffCardList/>
    </div>
}