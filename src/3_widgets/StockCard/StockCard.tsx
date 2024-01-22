import {ButtonDelete} from "@/4_features/ButtonDelete/ButtonDelete.tsx";
import {StockCardInfo} from "@/4_features/StockCardInfo/StockCardInfo.tsx";

interface props{
    title: string
}


export const StockCard = ({title}:props) => {
    const showIcon = false

    return (
        <div className={`w-[80%] lg:w-[48%] h-[351px] flex flex-col justify-between my-5 m-auto text-white bg-[#3D3D3D] rounded-xl shadow-md`}>
            <div className={`py-4 px-6`}>
                <h1 className={`text-[30px] md:text-[36px] lg:text-[40px] font-semibold mb-2`}>{title}</h1>
                <StockCardInfo/>
            </div>
            <ButtonDelete showIcon={showIcon}/>
        </div>
    );
};
