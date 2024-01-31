import {getTime} from "@/6_shared/lib/getTime.ts";


interface Props {
    fullTime: number,
    fullPrice: number
}

export const PriceCardInfo = ({fullPrice, fullTime} : Props) => {

    return (
        <div className={`px-5 flex flex-col justify-center`}>
            <p>Время: {getTime(fullTime)}</p>
            <p>Цена: {fullPrice}</p>
        </div>
    );
};
