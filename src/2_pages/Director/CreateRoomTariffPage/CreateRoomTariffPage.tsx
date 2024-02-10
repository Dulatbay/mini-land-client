import {ButtonBack} from "@/6_shared/BaseComponents/ButtonBack/ButtonBack.tsx";
import {useNavigate} from "react-router-dom";
import {SessionSettings} from "@/3_widgets/OrderFormCreate/ui/SessionSettings.tsx";
import {DaysOfWeek} from "@/4_features/DaysOfWeek/DaysOfWeek.tsx";
import {useState} from "react";


export const CreateRoomTariffPage = () => {
    const navigate = useNavigate()
    const [selectedDays, setSelectedDays] = useState([false, false, false, false, false, false, false])

    return <>
        <ButtonBack clickHandler={() => navigate('/room-tariffs')}/>
        <div
            className={`max-w-2xl mt-7 md:mt-0 p-10 border-2 m-auto rounded-3xl bg-white`}>
            <div className={`w-full pb-3 flex flex-col md:justify-between items-center`}>
                <img src={'/icons/Logo.svg'} className={`w-32 object-contain`} style={{backgroundPosition: "center"}}
                     alt={''}/>
                <p className={`pt-3 text-2xl font-medium`}>Создать тариф</p>
            </div>
            <form method={"POST"}>
                <div className={`h-full md:flex border border-gray-500 rounded-lg p-3 mt-3 gap-4`}>
                    <p className={`w-full md:w-2/6 lg:w-3/6 2xl:w-2/6 md:text-left`}>Настройка времени</p>
                    <div className={`w-full 2xl:w-4/6 h-full pb-2 flex flex-col justify-center items-start gap-2`}>
                        <div className={''}>
                            <p className={'text-gray-500 text-sm mb-1'}>В какие дни работает?</p>
                            <DaysOfWeek setSelectedDays={setSelectedDays} selectedDays={selectedDays}
                                        selectable={true}/>
                        </div>
                    </div>
                </div>
                <SessionSettings/>
            </form>
        </div>
    </>
}