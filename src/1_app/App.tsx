import {Route, Routes} from "react-router-dom";
import {CreateOrderPage} from "@/2_pages/CreateOrderPage/CreateOrderPage.tsx";
import {ManagerMainPage} from "@/2_pages/ManagerMainPage/ManagerMainPage.tsx";
import {DirectorMainPage} from "@/2_pages/DirectorMainPage/DirectorMainPage.tsx";
import {DirectorReportPage} from "@/2_pages/DirectorReportPage/DirectorReportPage.tsx";
import {LoginPage} from "@/2_pages/LoginPage/LoginPage.tsx";
import {DirectorSalesPage} from "@/2_pages/DirectorSalesPage/DirectorSalesPage.tsx";
import {DirectorPricesPage} from "@/2_pages/DirectorPricesPage/DirectorPricesPage.tsx";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<ManagerMainPage/>}/>
            <Route path={'/create-order'} element={<CreateOrderPage/>}/>
            <Route path={'/director-main'} element={<DirectorMainPage/>}/>
            <Route path={'/director-report'} element={<DirectorReportPage/>}/>
            <Route path={'/director-sales'} element={<DirectorSalesPage/>}/>
            <Route path={'/director-prices'} element={<DirectorPricesPage/>}/>
            <Route path={'/login'} element={<LoginPage/>}/>
        </Routes>
    )
}

export default App;