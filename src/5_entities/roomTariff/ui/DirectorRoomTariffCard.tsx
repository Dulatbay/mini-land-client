import {ButtonDelete} from "@/6_shared/BaseComponents/ButtonDelete/ButtonDelete.tsx";
import {DaysOfWeek} from "@/4_features/DaysOfWeek/DaysOfWeek.tsx";

export const DirectorRoomTariffCard = () => {
    return <div className={`bg-white gap-12 rounded-2xl flex flex-col justify-between px-4 py-5 border-2`}>
        <div className={'w-full flex  justify-between'}>
            <p className={'text-xl'}>12:00-15:30</p>
            <div className={`text-right`}>
                <p className={'text-xl leading-none'}>45000тг</p>
                <p>Цена до 6 детей</p>
            </div>
        </div>
        <div className={'w-full flex justify-between items-center'}>
            <div className={'flex flex-wrap gap-1'}>
                <DaysOfWeek selectedDays={[false, true, false, true, false, true]}/>
            </div>
            <div className={'ml-8'}>
                <ButtonDelete showIcon={true} clickHandler={() => {
                }}/>
            </div>
        </div>
    </div>
}