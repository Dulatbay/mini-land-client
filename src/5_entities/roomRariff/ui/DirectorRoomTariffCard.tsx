import {daysOfWeek} from "@/6_shared/lib/daysOfWeek.ts";
import {ButtonDelete} from "@/6_shared/BaseComponents/ButtonDelete/ButtonDelete.tsx";

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
                {
                    daysOfWeek.map((i, j) => <div
                        key={j}
                        className={`w-[35px] h-[35px] 
                                            text-center font-medium
                                            border rounded  
                                            flex items-center justify-center  
                                            cursor-pointer
                                            transition-all duration-500 `}>
                        {i}
                    </div>)

                }
            </div>
            <div className={'ml-8'}>
                <ButtonDelete showIcon={true} clickHandler={() => {
                }}/>
            </div>
        </div>
    </div>
}