import {ButtonBack} from "@/6_shared/BaseComponents/ButtonBack/ButtonBack.tsx";
import {useNavigate} from "react-router-dom";
import {CreateTariffForm} from "@/3_widgets/CreateTariffForm/CreateTariffForm.tsx";

export const CreateRoomTariffPage = () => {
    const navigate = useNavigate()

    return <>
        <ButtonBack clickHandler={() => navigate('/room-tariffs')}/>
        <CreateTariffForm/>
    </>
}