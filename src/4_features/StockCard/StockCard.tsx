import {ButtonDelete} from "@/6_shared/BaseComponents/ButtonDelete/ButtonDelete.tsx";
import {StockCardInfo} from "@/4_features/StockCardInfo/StockCardInfo.tsx";
import {useDisableSaleMutation} from "@/5_entities/sale";
import {useNavigate} from "react-router-dom";

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
            className={`w-[450px] px-6 gap-10 pt-10 pb-10 flex flex-col bg-slate-700 rounded-xl shadow-md`}>
            <div>
                <h1 className={`text-white text-[30px] md:text-[36px] lg:text-[40px] font-semibold mb-2`}>{title}</h1>
                <StockCardInfo fullTime={fullTime} fullPrice={fullPrice}/>
            </div>
            <ButtonDelete showIcon={false} clickHandler={deleteButtonClickHandler}/>
        </div>
    );
};
