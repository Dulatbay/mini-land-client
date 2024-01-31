import {ButtonBack} from "@/6_shared/BaseComponents/ButtonBack/ButtonBack.tsx";
import {useNavigate} from "react-router-dom";
import CreateSaleForm from "@/3_widgets/CreateSaleForm/CreateSaleForm.tsx";

export const CreateSalePage = () => {
    const navigate = useNavigate()
    return <>
        <ButtonBack clickHandler={()=>navigate('/sales')}/>
        <CreateSaleForm/>
    </>
}