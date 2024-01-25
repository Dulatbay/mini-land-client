import {YourThings} from "@/6_shared/BaseComponents/YourThings/YourThings.tsx";
import {StockCard} from "@/3_widgets/StockCard/StockCard.tsx";
import {NavBar} from "@/3_widgets/NavBar";
import {ButtonAddItem} from "@/4_features/ButtonAddItem";

const yourStocks = 'акции'
const createStocks = 'акцию'
const CardTitle = 'Название акции'


export const DirectorSalesPage = () => {

    return (
        <div>
            <NavBar/>

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