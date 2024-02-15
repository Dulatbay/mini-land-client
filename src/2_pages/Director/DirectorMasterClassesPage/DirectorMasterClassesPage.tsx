import {ButtonAddItem} from "@/6_shared/BaseComponents/ButtonAddItem";
import {useNavigate} from "react-router-dom";
import {DirectorMasterClassList} from "@/4_features/DirectorMasterClassList/DirectorMasterClassList.tsx";


export const DirectorMasterClassesPage = () => {
    const navigate = useNavigate()
    const createClickHandler = () => {
        navigate("/create-master-class")
    }


    return <div className={'w-[95%] m-auto'}>
        <div className={`flex justify-between items-center pt-7`}>
            <div className={`text-[24px] md:text-[30px]`}>
                Ваши мастер классы
            </div>
            <ButtonAddItem text={"Создать мастер класс"} clickHandler={createClickHandler}/>
        </div>
        <DirectorMasterClassList/>
    </div>
}