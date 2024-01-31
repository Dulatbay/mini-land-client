import {ButtonDelete} from "@/6_shared/BaseComponents/ButtonDelete/ButtonDelete.tsx";
import {PriceCardInfo} from "@/4_features/PriceCardInfo/PriceCardInfo.tsx";
import {useDisablePriceMutation} from "@/5_entities/price";

interface Props {
    id: number,
    fullTime: number,
    fullPrice: number
}

export const PriceCard = (price : Props) => {
    const [disablePrice] = useDisablePriceMutation()

    const showIcon = true

    const deleteButtonHandler = () => {
        disablePrice(price.id)
            .then(()=>{
                window.location.reload()
            })

    }

    return (
        <div className={`flex p-2 justify-between rounded-xl text-white bg-slate-700`}>
            <PriceCardInfo {...price}/>
            <ButtonDelete showIcon={showIcon} clickHandler={deleteButtonHandler}/>
        </div>
    );
};
