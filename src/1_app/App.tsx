import {Route, Routes} from "react-router-dom";
import {CreateOrderPage} from "@/2_pages/CreateOrderPage/CreateOrderPage.tsx";
import {ManagerMainPage} from "@/2_pages/ManagerMainPage/ManagerMainPage.tsx";
import {DirectorMainPage} from "@/2_pages/DirectorMainPage/DirectorMainPage.tsx";
import {DirectorReportPage} from "@/2_pages/DirectorReportPage/DirectorReportPage.tsx";
// import {LoginPage} from "@/2_pages/LoginPage/LoginPage.tsx";
import {useKeycloak} from "@react-keycloak/web";
import {ReactNode} from "react";
import DetailCardPage from "@/2_pages/DetailCardPage/DetailCardPage.tsx";

const PrivateRoute = ({children}: { children: ReactNode }) => {
    const {keycloak, initialized} = useKeycloak();
    if (!initialized)
        return "keycloak is not init"
    const isLoggedIn = keycloak.authenticated;
    return isLoggedIn ? children : <button onClick={() => keycloak.login()}>Login</button>;
};

function App() {
    const {keycloak} = useKeycloak();
    const isAdmin = keycloak.hasRealmRole("admin")
    return (
        isAdmin ? <Routes>
                <Route path={"/"} element={"Salam adminu"}/>
            </Routes>
            :
            <Routes>
                <Route path={'/'} element={
                    <PrivateRoute>
                        <ManagerMainPage/>
                    </PrivateRoute>
                }/>
                <Route path={'/orders/:id'}
                       element={
                           <PrivateRoute>
                               <DetailCardPage/>
                           </PrivateRoute>
                       }
                />

                <Route path={'/create-order'} element={
                    <PrivateRoute>
                        <CreateOrderPage/>
                    </PrivateRoute>
                }/>
                <Route path={'/director-main'} element={
                    <PrivateRoute>
                        <DirectorMainPage/>
                    </PrivateRoute>
                }/>
                <Route path={'/director-report'} element={
                    <PrivateRoute>
                        <DirectorReportPage/>
                    </PrivateRoute>
                }/>
                {/*<Route path={'/login'} element={<LoginPage/>}/>*/}
            </Routes>
    )
}

export default App;