import {Route, Routes} from "react-router-dom";
import {CreateOrderPage} from "@/2_pages/CreateOrderPage/CreateOrderPage.tsx";
import {ManagerMainPage} from "@/2_pages/ManagerMainPage/ManagerMainPage.tsx";
import {DirectorMainPage} from "@/2_pages/DirectorMainPage/DirectorMainPage.tsx";
import {DirectorReportPage} from "@/2_pages/DirectorReportPage/DirectorReportPage.tsx";
import {ReactNode, useContext, useEffect} from "react";
import DetailCardPage from "@/2_pages/DetailCardPage/DetailCardPage.tsx";
import KeycloakContext from "@/1_app/KeycloakContext.ts";
import {DirectorSalesPage} from "@/2_pages/DirectorSalesPage/DirectorSalesPage.tsx";
import {DirectorPricesPage} from "@/2_pages/DirectorPricesPage/DirectorPricesPage.tsx";
import {NavBar} from "@/3_widgets/NavBar";

const PrivateRoute = ({children}: { children: ReactNode }) => {
    const keycloak = useContext(KeycloakContext);

    const Login = () => {
        return <button type="button" onClick={() => {
            localStorage.removeItem("token")
            keycloak.login();
        }}>LOGIN</button>
    };

    return keycloak.authenticated ? children : <Login/>;
};

function App() {
    const keycloak = useContext(KeycloakContext);

    useEffect(() => {
        if (keycloak.isTokenExpired() || !keycloak.authenticated)
            localStorage.removeItem('token')
        else {
            localStorage.setItem('token', keycloak.token!)
        }
    }, [])

    const isAdmin = keycloak.hasResourceRole("admin")
    return (
        <Routes>
            {isAdmin ?
                <>
                    <Route path={"/"} element={<DirectorMainPage/>}/>
                    <Route path={'/report'} element={
                        <PrivateRoute>
                            <DirectorReportPage/>
                        </PrivateRoute>
                    }/>
                    <Route path={'/sales'} element={
                        <PrivateRoute>
                            <DirectorSalesPage/>
                        </PrivateRoute>
                    }/>
                    <Route path={'/statistic'} element={
                        <PrivateRoute>
                            <>
                                <NavBar/>
                            </>
                        </PrivateRoute>
                    }/>
                    <Route path={'/prices'} element={
                        <PrivateRoute>
                            <DirectorPricesPage/>
                        </PrivateRoute>
                    }/>
                    <Route path={'/sales'} element={
                        <PrivateRoute>
                            <DirectorSalesPage/>
                        </PrivateRoute>
                    }/>
                </>
                :
                <>
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
                </>
            }

            {/*<Route path={'/login'} element={<LoginPage/>}/>*/}
        </Routes>
    )
}

export default App;