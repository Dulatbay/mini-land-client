import {NavBar} from "@/3_widgets/NavBar/NavBar.tsx";
import {OrderCount} from "@/5_entities/OrderCount/OrderCount.tsx";
import {DirectorTable} from "@/3_widgets/DirectorTable/DirectorTable.tsx";

export const DirectorMainPage = () => {
    const isDirector = true

    return (
        <div>
            <NavBar isDirector={isDirector}/>
            <OrderCount/>
            <DirectorTable/>
        </div>
    );
};