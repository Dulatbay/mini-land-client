import {NavBar} from "@/3_widgets/NavBar/ui/NavBar.tsx";
import {OrderCount} from "@/5_entities/orderCount/OrderCount.tsx";
import {DirectorTable} from "@/3_widgets/DirectorTable/DirectorTable.tsx";

export const DirectorMainPage = () => {
    return (
        <div>
            <NavBar />
            <OrderCount/>
            <DirectorTable/>
        </div>
    );
};