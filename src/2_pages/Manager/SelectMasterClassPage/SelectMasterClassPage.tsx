import {ButtonBack} from "@/6_shared/BaseComponents/ButtonBack/ButtonBack.tsx";
import {useNavigate} from "react-router-dom";
import {MasterClassList} from "@/4_features/MasterClassList/MasterClassList.tsx";

export const SelectMasterClassPage = () => {
    const navigate = useNavigate()

    return <>
        <ButtonBack clickHandler={() => navigate(-1)}/>
        <MasterClassList/>
    </>
}