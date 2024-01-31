import {getTime} from "@/6_shared/lib/getTime.ts";

interface Props {
    fullPrice: number,
    fullTime: number
}

export const StockCardInfo = ({fullPrice, fullTime}: Props) => {

    return (
        <div className={`text-[18px] md:text-[21px] lg:text-[24px] opacity-75 text-white`}>
            <p>Стоимость: {fullPrice}тг</p>
            <p>Общее время: {getTime(fullTime)}</p>
            {/*<p>Использование: 5 раз</p>*/}
        </div>
    );
};
