import {ButtonDelete} from "@/6_shared/BaseComponents/ButtonDelete/ButtonDelete.tsx";
import {useDisableSaleMutation} from "@/5_entities/sale";
import {useNavigate} from "react-router-dom";
import {getTime} from "@/6_shared/lib/getTime.ts";

interface props {
    id: number,
    title: string,
    fullTime: number,
    fullPrice: number
}


export const StockCard = ({title, fullPrice, fullTime, id}: props) => {
    const [disableSale] = useDisableSaleMutation()
    const navigate = useNavigate()
    const deleteButtonClickHandler = () => {
        disableSale(id).finally(() => navigate('/sales'))
    }

    return (
        <div
            className={`w-[450px] p-7 gap-10  flex bg-white rounded-xl shadow-md justify-between items-end`}>
            <div>
                <h1 className={`text-4xl font-semibold mb-2`}>{title}</h1>
                <div className={`text-xl opacity-75`}>
                    <p>Стоимость: {fullPrice}тг</p>
                    <p>Общее время: {getTime(fullTime)}</p>
                    {/*<p>Использование: 5 раз</p>*/}
                </div>
            </div>
            <ButtonDelete showIcon={true} clickHandler={deleteButtonClickHandler}/>
        </div>
    );
};
