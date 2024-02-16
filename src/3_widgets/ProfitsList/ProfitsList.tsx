import {ProfitCard} from "@/4_features/ProfitCard/ProfitCard.tsx";

export const ProfitsList = () => {
    return <>
        <div
            className={'flex flex-wrap self-start justify-stretch w-[70%] p-5 mt-10 border-2 rounded-xl pt-5 pr-5 bg-white'}>
            <ProfitCard/>
        </div>
    </>
}