import { AbonementCardList } from '@/4_features/AbonementCardList/AbonementCardList';

export const AbonementsPage = () => {
    return (
        <div>
            <div
                className={`w-[95%] flex justify-between items-start m-auto pt-7 flex-wrap`}
            >
                <div className={`text-[24px] md:text-[30px]`}>Абонементы</div>
                <AbonementCardList />
            </div>
        </div>
    );
};
