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
            <div className={`w-full flex justify-between items-center md:pr-24 md:pl-24 pt-7 flex-wrap pl-4 pr-4`}>
                {/*<OrdersFilter/>*/}
                <ButtonAddItem text={"Создать заказ"} clickHandler={createOrderClickHandler}/>
            </div>
            <OrderCardList/>
        </div>
    );
};