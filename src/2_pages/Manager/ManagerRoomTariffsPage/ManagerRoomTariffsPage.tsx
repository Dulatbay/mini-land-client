import {RoomTariffCardList} from "@/4_features/RoomRariffCardList/RoomTariffCardList.tsx";

export const ManagerRoomTariffsPage = () => {
    return <div className={'w-[95%] m-auto'}>
        <div className={`flex justify-between items-center pt-7`}>
            <div className={`text-[24px] md:text-[30px]`}>
                Ваши тарифы
            </div>
            <p>Чтобы создать бронь выберите нужный тариф</p>
        </div>
        <RoomTariffCardList/>
    </div>
}