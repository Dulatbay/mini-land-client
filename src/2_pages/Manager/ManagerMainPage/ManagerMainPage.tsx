import {OrderCardList} from "@/4_features/OrderCardList";
import {ButtonAddItem} from "@/6_shared/BaseComponents/ButtonAddItem";
import {useNavigate} from "react-router-dom";


export const ManagerMainPage = () => {
    const navigate = useNavigate()
    const createOrderClickHandler = () => {
        navigate('/create-order')
    }

    return (
        <div>
            <div className={`w-[95%] flex justify-between items-center m-auto pt-7`}>
                <div className={`text-[24px] md:text-[30px]`}>
                    Ваши заказы
                </div>
                <div>

                    <ButtonAddItem text={"Создать цену"} clickHandler={createOrderClickHandler}/>
                </div>
            </div>
            <OrderCardList/>
        </div>
    );
};