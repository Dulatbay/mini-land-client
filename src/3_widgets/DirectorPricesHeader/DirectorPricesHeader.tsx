import {ButtonAddItem} from "@/6_shared/BaseComponents/ButtonAddItem";
import {useNavigate} from "react-router-dom";

const DirectorPricesHeader = () => {
    const navigate = useNavigate()
    const createPriceClickHandler = () =>{
        navigate('/create-price')
    }

    return (
        <div className={`w-[95%] flex justify-between items-center m-auto pt-7`}>
            <div className={`text-[24px] md:text-[30px]`}>
                Ваши цены
            </div>
            <ButtonAddItem text={"Создать цену"} clickHandler={createPriceClickHandler}/>
        </div>

    );
};

export default DirectorPricesHeader;