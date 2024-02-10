import {CommonInput} from "@/6_shared/BaseComponents/CommonInput/CommonInput.tsx";

export const SessionSettings = () => {
    return <div className={`h-full md:flex border border-gray-500 rounded-lg p-3 mt-3 gap-4`}>
        <p className={`w-full md:w-2/6 lg:w-3/6 2xl:w-2/6 md:text-left`}>Настройки сеанса</p>
        <div className={`w-full 2xl:w-4/6 h-full pb-2 flex flex-col justify-center items-start gap-2`}>
            <CommonInput placeholder={"Начальная цена"} type={"number"}/>
            <CommonInput placeholder={"Допустимое кол-во детей"} type={"number"}/>
            <CommonInput placeholder={"Продление на 30 минут"} type={"number"}/>
            <CommonInput placeholder={"Продление на 1 час"} type={"number"}/>
            <CommonInput placeholder={"Начальная цена"} type={"number"}/>
            <CommonInput placeholder={"За каждого последующего ребенка"} type={"number"}/>
        </div>
    </div>
}