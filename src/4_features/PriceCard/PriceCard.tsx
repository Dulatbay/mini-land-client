import {ButtonDelete} from "@/6_shared/BaseComponents/ButtonDelete/ButtonDelete.tsx";
import {useDisablePriceMutation} from "@/5_entities/price";
import {getTime} from "@/6_shared/lib/getTime.ts";

interface Props {
    id: number,
    fullTime: number,
    fullPrice: number,
    days: number[]
}


const daysOfWeek = [
    "ПН",
    "ВТ",
    "СР",
    "ЧТ",
    "ПТ",
    "СБ",
    "ВС",
]


const styleIfNonSelected = "opacity-70 bg-gray-50  border-gray-200 text-black"
const styleIfSelected = "bg-green-500 text-white border-none"

export const PriceCard = (price: Props) => {
    const [disablePrice] = useDisablePriceMutation()

    const showIcon = true

    const deleteButtonHandler = () => {
        disablePrice(price.id)
            .then(() => {
                window.location.reload()
            })

    }
    return (
        <div className={`flex px-7 py-7 justify-between rounded-xl bg-white border-2`}>
            <div className={`flex flex-col justify-center`}>
                <p>Время: {getTime(price.fullTime)}</p>
                <p>Цена: {price.fullTime}</p>
                <div className={'mt-7'}>
                    <p className={'mb-1 text-sm text-gray-700'}>В какие дни действует цена?</p>
                    <div className={'flex flex-wrap gap-1'}>
                        {
                            daysOfWeek.map((i, j) => <div
                                key={j}
                                className={`flex items-center justify-center w-[35px] h-[35px]
                                 text-center rounded font-medium border transition-all duration-500 
                                 ${price.days.includes(j + 1) ? styleIfSelected : styleIfNonSelected}`}>
                                {i}
                            </div>)
                        }
                    </div>
                </div>
            </div>
            <ButtonDelete showIcon={showIcon} clickHandler={deleteButtonHandler}/>
        </div>
    );
};
