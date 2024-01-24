import {NavBar} from "@/3_widgets/NavBar/ui/NavBar.tsx";
import {ButtonBack} from "@/6_shared/BaseComponents/ButtonBack/ButtonBack.tsx";
import {OrderFormCreate} from "3_widgets/OrderFormCreate";
import {useAppDispatch} from "@/1_app/hooks@deprecated.ts";
import {clearAll} from "@/5_entities/orderForm";

export const CreateOrderPage = () => {
    const dispatch = useAppDispatch()

    return (
        <div>
            <NavBar/>
            <div onClick={()=>{
                dispatch(clearAll())
            }}>
                <ButtonBack/>
            </div>
            <OrderFormCreate/>
        </div>
    );
};