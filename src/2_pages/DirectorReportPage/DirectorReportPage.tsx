import {NavBar} from "@/3_widgets/NavBar/NavBar.tsx";
import {DirectorReportForm} from "@/3_widgets/DirectorReportForm/DirectorReportForm.tsx";

export const DirectorReportPage = () => {
    const isDirector = true
    return (
        <div>
            <NavBar isDirector={isDirector}/>
            <DirectorReportForm/>
        </div>
    );
};