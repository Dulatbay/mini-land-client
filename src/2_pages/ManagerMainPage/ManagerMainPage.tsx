import {ButtonAll} from "@/4_features/ButtonAll/ButtonAll.tsx";
import {OrderCard} from "@/5_entities/OrderCard/OrderCard.tsx";
import {NavBar} from "@/3_widgets/NavBar/NavBar.tsx";
import {ButtonAddItem} from "@/4_features/ButtonAddItem/ButtonAddItem.tsx";

export const ManagerMainPage = () => {
    const fullname = 'Dulatbay Akhan'
    const status = 'Завершен'
    const madeBy = 'Dulatbay Akhan';
    const entered = '13:00';
    const age = 17;
    const color = '#1FD680';

    const isDirector = false

    return (
        <div>
            <NavBar isDirector={isDirector}/>

            <div className={`w- flex justify-between items-center md:pr-24 md:pl-24 pt-7`}>
                <ButtonAll/>
                <ButtonAddItem/>
            </div>

            <div className={`w-full lg:w-10/12 m-auto pt-10 flex flex-wrap justify-center items-center`}>
                <OrderCard fullname={fullname} status={status} madeBy={madeBy} entered={entered} age={age} color={color}/>
                <OrderCard fullname={fullname} status={status} madeBy={madeBy} entered={entered} age={age} color={color}/>
                <OrderCard fullname={fullname} status={status} madeBy={madeBy} entered={entered} age={age} color={color}/>
                <OrderCard fullname={fullname} status={status} madeBy={madeBy} entered={entered} age={age} color={color}/>
                <OrderCard fullname={fullname} status={status} madeBy={madeBy} entered={entered} age={age} color={color}/>
                <OrderCard fullname={fullname} status={status} madeBy={madeBy} entered={entered} age={age} color={color}/>
                <OrderCard fullname={fullname} status={status} madeBy={madeBy} entered={entered} age={age} color={color}/>
                <OrderCard fullname={fullname} status={status} madeBy={madeBy} entered={entered} age={age} color={color}/>
            </div>
        </div>
    );
};