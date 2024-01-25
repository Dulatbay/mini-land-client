import {YourThings} from "@/6_shared/BaseComponents/YourThings/YourThings.tsx";
import {PriceCard} from "@/3_widgets/PriceCard/PriceCard.tsx";
import {NavBar} from "@/3_widgets/NavBar";
import {ButtonAddItem} from "@/4_features/ButtonAddItem";


const yourStocks = 'цены'
const createStocks = 'цену'


export const DirectorPricesPage = () => {

    return (
        <div>
            <NavBar/>

            <div className={`w-full flex justify-between items-center md:pr-24 md:pl-24 pt-7`}>
                <YourThings type={yourStocks}/>
                <ButtonAddItem type={createStocks}/>
            </div>

            <div className={`w-[90%] pt-10 m-auto flex flex-wrap`}>
                <PriceCard/>
                <PriceCard/>
                <PriceCard/>
                <PriceCard/>
                <PriceCard/>
                <PriceCard/>
                <PriceCard/>
                <PriceCard/>
                <PriceCard/>
                <PriceCard/>
            </div>
        </div>
    );
};