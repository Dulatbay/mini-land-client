import {useNavigate} from "react-router-dom";
import {ButtonBack} from "@/6_shared/BaseComponents/ButtonBack/ButtonBack.tsx";
import {CreateRoomTariffOrderForm} from "@/3_widgets/CreateRoomTariffOrderForm/CreateRoomTariffOrderForm.tsx";

export const RoomTariffBookingPage = () => {
    const navigate = useNavigate()

    return <>
        <ButtonBack clickHandler={() => navigate('/room-tariffs')}/>
        <CreateRoomTariffOrderForm/>
    </>
}