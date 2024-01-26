import {PieChartContainer} from "@/3_widgets/PieChartContainer/PieChartContainer.tsx";
import {PlotChartContainer} from "@/3_widgets/PlotChartContainer/PlotChartContainer.tsx";

export const DirectorStatisticsPage = () => {
    return <>
        <div className={'w-[95%] m-auto flex flex-row justify-start flex-wrap gap-4'}>
            <PieChartContainer />
            <PlotChartContainer />
        </div>
    </>
}