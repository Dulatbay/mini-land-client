import {InputCustomer} from "../../4_features/InputCustomer/InputCustomer.tsx";
import {InputOrder} from "../../4_features/InputOrder/InputOrder.tsx";
import {OrderInfo} from "../../4_features/OrderInfo/OrderInfo.tsx";
import {ButtonClear} from "@/6_shared/BaseComponents/ButtonClear/ButtonClear.tsx";
import {ButtonSend} from "@/6_shared/BaseComponents/ButtonSend/ButtonSend.tsx";

interface props{
    title: string
}
export const OrderForm = ({title}:props) => {
    const customer = "Клиент";
    const child = 'Ребенок';
    const type1 = "tel"
    const type2 = "age"

    return (
        <form className={`w-5/6 md:w-4/6 lg:w-3/6 2xl:w-2/6 mt-10 md:mt-0 p-10 border-8 m-auto rounded-2xl`} style={{backgroundColor: '#3D3D3D'}}>
            <div className={`w-full md:w-9/12 pb-3 flex flex-col md:flex-row md:justify-between items-center`}>
                <img src={'/icons/Logo.svg'} className={`w-32 object-contain`} style={{backgroundPosition: "center"}} alt={''}/>
                <p className={`text-white pt-3`}>{title}</p>
            </div>
            <InputCustomer customer={customer} type={type1}/>
            <InputCustomer customer={child} type={type2}/>
            <InputOrder/>
            <OrderInfo/>
            <div className={`w-full sm:flex justify-between pt-6`}>
                <ButtonClear/>
                <ButtonSend/>
            </div>
        </form>
    );
};
