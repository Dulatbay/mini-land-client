import {NavBar} from "@/3_widgets/NavBar/NavBar.tsx";
import {YourThings} from "@/6_shared/BaseComponents/YourThings/YourThings.tsx";
import {ButtonAddItem} from "@/4_features/ButtonAddItem/ButtonAddItem.tsx";
import {StockCard} from "@/3_widgets/StockCard/StockCard.tsx";

export const DirectorSalesPage = () => {
    const isDirector = true

    const yourStocks = 'акции'
    const createStocks = 'акцию'

    const CardTitle = 'Название акции'

    return (
        <div>
            <NavBar isDirector={isDirector}/>

            <div className={`w-full flex justify-between items-center md:pr-24 md:pl-24 pt-7`}>
                <YourThings type={yourStocks}/>
                <ButtonAddItem type={createStocks}/>
            </div>

            <div className={`w-[95%] m-auto flex flex-wrap`}>
                <StockCard title={CardTitle}/>
                <StockCard title={CardTitle}/>
                <StockCard title={CardTitle}/>
                <StockCard title={CardTitle}/>
                <StockCard title={CardTitle}/>
                <StockCard title={CardTitle}/>
            </div>
        </div>
    );
};