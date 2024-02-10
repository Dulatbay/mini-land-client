import {ButtonBack} from "@/6_shared/BaseComponents/ButtonBack/ButtonBack.tsx";
import {OrderFormCreate} from "@/3_widgets/OrderFormCreate";
import {useAppDispatch} from "@/1_app/hooks@deprecated.ts";
import {clearAll} from "@/5_entities/orderForm";
import {useNavigate} from "react-router-dom";

export const CreateOrderPage = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    return (
        <div>
            <div onClick={() => {
                dispatch(clearAll())
            }}>
                <ButtonBack clickHandler={() => navigate('/')}/>
            </div>
            <OrderFormCreate/>
        </div>
    );
};