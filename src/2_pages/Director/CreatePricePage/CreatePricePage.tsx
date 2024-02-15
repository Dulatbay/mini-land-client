import {ButtonBack} from "@/6_shared/BaseComponents/ButtonBack/ButtonBack.tsx";
import {CreatePriceForm} from "@/3_widgets/CreatePriceForm/CreatePriceForm.tsx";
import {useNavigate} from "react-router-dom";

export const CreatePricePage = () => {
    const navigate = useNavigate()
    return <>
        <ButtonBack clickHandler={() => navigate('/prices')}/>
        <CreatePriceForm/>
    </>
}