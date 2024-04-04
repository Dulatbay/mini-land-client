import {borderGreen, borderRed} from "@/6_shared/lib/colors.ts";

interface Props {
    title: string,
    is_income: boolean,
    profit: number
}

export const ProfitCard = ({title, profit, is_income}: Props) => {
    return <div className={`bg-gray-50 w-full p-4 rounded border-red-700 border-2 ${is_income ? borderGreen : borderRed}}`}>
        <p>{title}</p>
        <p>{profit} тг</p>
    </div>
}