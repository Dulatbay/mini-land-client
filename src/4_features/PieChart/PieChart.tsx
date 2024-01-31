import Chart from "react-apexcharts";


const chartConfig = {
    options: {
        stroke: {
            width: 0
        },
        labels: ["Доход", "Расход"],
        chart: {
            toolbar: {
                show: true,
            },
        },
        title: {
            text: "",
        },
        dataLabels: {
            enabled: true,
        },
        colors: ["#36be14", "#c51616"],
        legend: {
            show: false,
        },
    },
};

interface Props {
    series: number[]
}

export const PieChart = ({series}: Props) => {

    if(!series.length)
        return "Данных нет"

    return <div>
        <Chart type={'pie'} {...chartConfig} series={series}/>
        <p className={'text-center'}>Cоотношение расходов и доходов</p>
    </div>
}