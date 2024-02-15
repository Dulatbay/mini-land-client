import {ButtonBack} from "@/6_shared/BaseComponents/ButtonBack/ButtonBack.tsx";
import {useNavigate} from "react-router-dom";
import {MasterClassesListByOrder} from "@/3_widgets/MasterClassesListByOrder/MasterClassesListByOrder.tsx";

export const ViewMasterClassesByOrderPage = () => {
    const navigate = useNavigate()

    const backHandler = () => navigate(-1)

    return <>
        <ButtonBack clickHandler={backHandler}/>
        <MasterClassesListByOrder/>
    </>
}