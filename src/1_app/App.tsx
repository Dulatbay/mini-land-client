import {Route, Routes} from "react-router-dom";
import {CreateOrderPage} from "@/2_pages/CreateOrderPage/CreateOrderPage.tsx";
import {ManagerMainPage} from "@/2_pages/ManagerMainPage/ManagerMainPage.tsx";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<ManagerMainPage/>}/>
            <Route path={'/create-order'} element={<CreateOrderPage/>}/>
        </Routes>
    )
}

export default App;