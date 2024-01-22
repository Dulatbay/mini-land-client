import {ButtonDelete} from "@/4_features/ButtonDelete/ButtonDelete.tsx";
import {PriceCardInfo} from "@/4_features/PriceCardInfo/PriceCardInfo.tsx";

export const PriceCard = () => {
    const showIcon = true

    return (
        <div className={`w-[90%] md:w-[45%] lg:w-[30%] xl:w-[22%] my-2 mx-2 flex justify-between rounded-xl text-white bg-[#3D3D3D]`}>
            <PriceCardInfo/>
            <ButtonDelete showIcon={showIcon}/>
        </div>
    );
};
