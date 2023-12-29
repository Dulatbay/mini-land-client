import {OrderForm} from "../../3_widgets/OrderForm/OrderForm.tsx";
import {NavBar} from "@/3_widgets/NavBar/NavBar.tsx";
import {ButtonBack} from "@/6_shared/BaseComponents/ButtonBack/ButtonBack.tsx";

export const CreateOrderPage = () => {
    const title = 'Создать заказ';
    const isDirector = false

    return (
        <div>
          <NavBar isDirector={isDirector}/>
          <ButtonBack/>
          <OrderForm title={title}/>
        </div>
    );
};