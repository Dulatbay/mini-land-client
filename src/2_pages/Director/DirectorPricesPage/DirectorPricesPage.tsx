import PriceCardList from "@/3_widgets/PriceCardList/PriceCardList.tsx";
import DirectorPricesHeader from "@/3_widgets/DirectorPricesHeader/DirectorPricesHeader.tsx";


export const DirectorPricesPage = () => {

    return (
        <div>
            <DirectorPricesHeader/>
            <PriceCardList/>
        </div>
    );
};