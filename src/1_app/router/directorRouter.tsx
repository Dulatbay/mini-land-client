import {createBrowserRouter} from "react-router-dom";
import {ErrorPage} from "@/2_pages/ErrorPage/ErrorPage.tsx";
import {DirectorMainPage} from "@/2_pages/Director/DirectorMainPage/DirectorMainPage.tsx";
import {DirectorReportPage} from "@/2_pages/Director/DirectorReportPage/DirectorReportPage.tsx";
import {DirectorSalesPage} from "@/2_pages/Director/DirectorSalesPage/DirectorSalesPage.tsx";
import {DirectorStatisticsPage} from "@/2_pages/Director/DirectorStatisticsPage/DirectorStatisticsPage.tsx";
import {DirectorPricesPage} from "@/2_pages/Director/DirectorPricesPage/DirectorPricesPage.tsx";
import {CreatePricePage} from "@/2_pages/Director/CreatePricePage/CreatePricePage.tsx";
import {CreateSalePage} from "@/2_pages/Director/CreateSalePage/CreateSalePage.tsx";
import {Root} from "@/1_app/Root.tsx";


export const directorRouter = createBrowserRouter([
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