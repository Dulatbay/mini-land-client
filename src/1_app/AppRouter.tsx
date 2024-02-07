import {createBrowserRouter, Outlet} from "react-router-dom";
import {DirectorMainPage} from "@/2_pages/DirectorMainPage/DirectorMainPage.tsx";
import {DirectorReportPage} from "@/2_pages/DirectorReportPage/DirectorReportPage.tsx";
import {DirectorSalesPage} from "@/2_pages/DirectorSalesPage/DirectorSalesPage.tsx";
import {DirectorStatisticsPage} from "@/2_pages/DirectorStatisticsPage/DirectorStatisticsPage.tsx";
import {DirectorPricesPage} from "@/2_pages/DirectorPricesPage/DirectorPricesPage.tsx";
import {CreatePricePage} from "@/2_pages/CreatePricePage/CreatePricePage.tsx";
import {CreateSalePage} from "@/2_pages/CreateSalePage/CreateSalePage.tsx";
import {ManagerMainPage} from "@/2_pages/ManagerMainPage/ManagerMainPage.tsx";
import DetailCardPage from "@/2_pages/DetailCardPage/DetailCardPage.tsx";
import {CreateOrderPage} from "@/2_pages/CreateOrderPage/CreateOrderPage.tsx";
import {ReactNode, useContext, useEffect} from "react";
import KeycloakContext from "@/1_app/KeycloakContext.ts";
import {NavBar} from "@/3_widgets/NavBar";
import {ErrorPage} from "@/2_pages/ErrorPage/ErrorPage.tsx";

const PrivateRoute = ({children}: { children: ReactNode }) => {
    const keycloak = useContext(KeycloakContext);

    const Login = () => {
        return <button type="button" onClick={() => {
            localStorage.removeItem("token")
            keycloak.login();
        }}>LOGIN</button>
    };

    return keycloak.authenticated ?
        children
        : <Login/>;
};




const Root = () => {
    return <PrivateRoute>
        <NavBar/>
        <Outlet/>
    </PrivateRoute>
}

export const appRouter = () => {
    const keycloak = useContext(KeycloakContext);

    useEffect(() => {
        if (keycloak.isTokenExpired() || !keycloak.authenticated)
            localStorage.removeItem('token')
        else {
            localStorage.setItem('token', keycloak.token!)
        }
    }, [])

    const isAdmin = keycloak.hasResourceRole("admin")

    if (isAdmin)
        return createBrowserRouter([
            {
                path: '/',
                element: <Root/>,
                errorElement: <ErrorPage/>,
                children: [
                    {
                        index: true,
                        element: <DirectorMainPage/>
                    },
                    {
                        path: '/report',
                        element: <DirectorReportPage/>
                    },
                    {
                        path: '/sales',
                        element: <DirectorSalesPage/>
                    },
                    {
                        path: '/statistics',
                        element: <DirectorStatisticsPage/>
                    },
                    {
                        path: '/prices',
                        element: <DirectorPricesPage/>
                    },
                    {
                        path: '/create-price',
                        element: <CreatePricePage/>
                    },
                    {
                        path: '/create-sale',
                        element: <CreateSalePage/>
                    }
                ]
            }
        ])
    else
        return createBrowserRouter([
            {
                path: '/',
                element: <Root/>,
                errorElement: <ErrorPage/>,
                children: [
                    {
                        index: true,
                        element: <ManagerMainPage/>
                    },
                    {
                        path: '/orders/:id',
                        element: <DetailCardPage/>
                    },
                    {
                        path: '/create-order',
                        element: <CreateOrderPage/>
                    },
                ]
            }
        ])
}