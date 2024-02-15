import {Button} from "@/6_shared/BaseComponents/Button/Button.tsx";
import {useEffect, useState} from "react";
import {useCreatePriceMutation} from "@/5_entities/price";
import {useNavigate} from "react-router-dom";
import {greenBg} from "@/6_shared/lib/colors.ts";
import {getToastMessage} from "@/6_shared/lib/getToastMessage.ts";
import {DaysOfWeek} from "@/4_features/DaysOfWeek/DaysOfWeek.tsx";


export const CreatePriceForm = () => {
    const [fullTime, setFullTime] = useState(0)
    const [fullPrice, setFullPrice] = useState(0)
    const [createPrice, {isLoading, isError, error, isSuccess}] = useCreatePriceMutation()
    const navigate = useNavigate()
    const [selectedDays, setSelectedDays] = useState<boolean[]>([false, false, false, false, false, false, false])


    useEffect(() => {
        if (isError) {
            getToastMessage(error)
            console.log(error)
        }
    }, [isError, error]);

    const createButtonClickHandler = () => {
        const request = {
            full_time: fullTime * 60,
            full_price: fullPrice,
            days: [1, 2, 3, 4, 5, 6, 7].filter(i => selectedDays[i - 1])
        }
        createPrice(request)
    }

    if (isSuccess) {
        setTimeout(() => {
            window.location.reload()
        }, 100)
        navigate('/prices')
    }


    return <form
        className={`w-5/6 md:w-4/6 lg:w-3/6 2xl:w-2/6 mt-10 md:mt-0 p-10 border-2 m-auto rounded-3xl bg-white`}
        method={"POST"}>
        <div className={`w-full pb-3 flex flex-col md:justify-between items-center`}>
            <img src={'/icons/Logo.svg'} className={`w-32 object-contain`} style={{backgroundPosition: "center"}}
                 alt={''}/>
            <p className={`pt-3 text-2xl font-medium`}>Создать цену</p>
        </div>
        <div className={'mt-8 mb-8 flex flex-col gap-4'}>
            <input className={'w-full 2xl:m-0 m-1 p-3 rounded-lg border border-[#DADADA] focus:outline-gray-300'}
                   placeholder={"Сколько минут хотите добавить?"}
                   type={'number'}
                   min={0}
                   onChange={event => setFullTime(+event.target.value)}
            ></input>
            <input className={'w-full 2xl:m-0 m-1 p-3 rounded-lg border border-[#DADADA] focus:outline-gray-300'}
                   placeholder={"Сколько это будет стоить?"}
                   type={'number'}
                   min={0}
                   onChange={event => setFullPrice(+event.target.value)}
            ></input>
        </div>
        <div className={'mb-8'}>
            <p className={'font-medium mb-2'}>В какие дни действует цена?</p>
            <DaysOfWeek setSelectedDays={setSelectedDays} selectedDays={selectedDays}/>
        </div>
        <div className={`w-full sm:flex justify-between gap-20`}>
            <Button
                backgroundColor={greenBg}
                content={"ОТПРАВИТЬ"}
                isLoading={isLoading}
                onClick={createButtonClickHandler}
            />
        </div>
    </form>
}