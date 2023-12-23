import {NavBar} from "../../Components/NavBar/NavBar.tsx";
import {ButtonBack} from "../../Components/ButtonBack/ButtonBack.tsx";
import {OrderForm} from "../../Components/OrderForm/OrderForm.tsx";

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