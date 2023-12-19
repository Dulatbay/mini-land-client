import {NavBar} from "../../Components/NavBar/NavBar.tsx";
import {ButtonAddItem} from "../../Components/ButtonAddItem/ButtonAddItem.tsx";
import {ButtonAll} from "../../Components/ButtonAll/ButtonAll.tsx";
import {ListItem} from "../../Components/ListItem/ListItem.tsx";

export const AddItemPage = () => {
    const fullname = 'Dulatbay Akhan'
    const status = 'Завершен'
    const madeBy = 'Dulatbay Akhan';
    const entered = '13:00';
    const age = 17;
    const color = '#1FD680';


    return (
        <div>
            <NavBar/>

            <div className={`w- flex justify-between items-center md:pr-24 md:pl-24 pt-7`}>
                <ButtonAll/>
                <ButtonAddItem/>
            </div>

            <div className={`w-full lg:w-10/12 m-auto pt-10 flex flex-wrap justify-center items-center`}>
                <ListItem fullname={fullname} status={status} madeBy={madeBy} entered={entered} age={age} color={color}/>
                <ListItem fullname={fullname} status={status} madeBy={madeBy} entered={entered} age={age} color={color}/>
                <ListItem fullname={fullname} status={status} madeBy={madeBy} entered={entered} age={age} color={color}/>
                <ListItem fullname={fullname} status={status} madeBy={madeBy} entered={entered} age={age} color={color}/>
                <ListItem fullname={fullname} status={status} madeBy={madeBy} entered={entered} age={age} color={color}/>
                <ListItem fullname={fullname} status={status} madeBy={madeBy} entered={entered} age={age} color={color}/>
                <ListItem fullname={fullname} status={status} madeBy={madeBy} entered={entered} age={age} color={color}/>
                <ListItem fullname={fullname} status={status} madeBy={madeBy} entered={entered} age={age} color={color}/>
            </div>
        </div>
    );
};