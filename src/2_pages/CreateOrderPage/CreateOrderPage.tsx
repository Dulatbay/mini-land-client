import {OrderForm} from "../../3_widgets/OrderForm/OrderForm.tsx";
import {NavBar} from "@/3_widgets/NavBar/NavBar.tsx";
import {ButtonBack} from "@/6_shared/BaseComponents/ButtonBack/ButtonBack.tsx";

export const CreateOrderPage = () => {
    const title = 'Создать заказ';
    return (
        <div>
          <NavBar/>
          <ButtonBack/>
          <OrderForm title={title}/>
        </div>
    );
};