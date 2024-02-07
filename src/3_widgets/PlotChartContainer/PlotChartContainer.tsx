import {PlotChart} from "@/4_features/PlotChart/PlotChart.tsx";

export const PlotChartContainer = () => {
    return <>
        <div
            className={'aspect-video w-[70%]  p-5 mt-10 border-2 rounded-xl pt-5 pr-5 bg-gray-700 text-white hidden xl:block'}>
            <PlotChart/>
        </div>
    </>
}