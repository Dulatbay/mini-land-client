import {DirectorRoomTariffCard} from "@/5_entities/roomTariff/ui/DirectorRoomTariffCard.tsx";

export const DirectorRoomTariffCardList = () => {
    return <div className={'flex flex-wrap mt-2 gap-2'}>
        <DirectorRoomTariffCard/>
        <DirectorRoomTariffCard/>
        <DirectorRoomTariffCard/>
        <DirectorRoomTariffCard/>
    </div>
}