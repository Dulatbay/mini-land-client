import {PieChartContainer} from "@/3_widgets/PieChartContainer/PieChartContainer.tsx";
import {ProfitsList} from "@/3_widgets/ProfitsList/ProfitsList.tsx";

export const DirectorStatisticsPage = () => {
    return <>
        <div className={'w-[95%] m-auto flex flex-row justify-center gap-4'}>
            <PieChartContainer/>
            <ProfitsList/>
        </div>
    </>
}