import {ButtonAddItem} from "6_shared/BaseComponents/ButtonAddItem";
import {useNavigate} from "react-router-dom";

const DirectorSalesHeader = () => {
    const navigate = useNavigate()

    return (
        <div className={`w-[95%] m-auto flex justify-between items-center pt-7`}>
            <div className={`text-[24px] md:text-[30px]`}>
                Ваши акции
            </div>
            <ButtonAddItem text={"Создать акцию"} clickHandler={() => {
                navigate('/create-sale')
            }}/>
        </div>
    );
};

export default DirectorSalesHeader;