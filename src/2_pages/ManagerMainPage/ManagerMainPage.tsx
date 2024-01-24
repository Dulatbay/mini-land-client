import {OrderCardList} from "@/4_features/OrderCardList";
import {ButtonAddItem} from "@/4_features/ButtonAddItem";
import {ButtonAll} from "@/4_features/ButtonAll";
import {NavBar} from "@/3_widgets/NavBar";



export const ManagerMainPage = () => {

    return (
        <div>
            <NavBar/>
            <div className={`w- flex justify-between items-center md:pr-24 md:pl-24 pt-7`}>
                <ButtonAll/>
                <ButtonAddItem/>
            </div>
            <OrderCardList />
        </div>
    );
};