import {createBrowserRouter} from "react-router-dom";
import {ErrorPage} from "@/2_pages/ErrorPage/ErrorPage.tsx";
import {DirectorMainPage} from "@/2_pages/Director/DirectorMainPage/DirectorMainPage.tsx";
import {DirectorReportPage} from "@/2_pages/Director/DirectorReportPage/DirectorReportPage.tsx";
import {DirectorSalesPage} from "@/2_pages/Director/DirectorSalesPage/DirectorSalesPage.tsx";
import {DirectorStatisticsPage} from "@/2_pages/Director/DirectorStatisticsPage/DirectorStatisticsPage.tsx";
import {DirectorPricesPage} from "@/2_pages/Director/DirectorPricesPage/DirectorPricesPage.tsx";
import {CreatePricePage} from "@/2_pages/Director/CreatePricePage/CreatePricePage.tsx";
import {CreateSalePage} from "@/2_pages/Director/CreateSalePage/CreateSalePage.tsx";
import {Root} from "@/1_app/router/Root.tsx";
import {DirectorMasterClassesPage} from "@/2_pages/Director/DirectorMasterClassesPage/DirectorMasterClassesPage.tsx";
import {DirectorRoomTariffsPage} from "@/2_pages/Director/DirectorRoomTariffsPage/DirectorRoomTariffsPage.tsx";
import {CreateRoomTariffPage} from "@/2_pages/Director/CreateRoomTariffPage/CreateRoomTariffPage.tsx";
import {CreateMasterClassPage} from "@/2_pages/Director/CreateMasterClassPage/CreateMasterClassPage.tsx";
import { CreateAbonementPage } from "@/2_pages/Director/CreateAbonementPage/CreateAbonementPage";
import { DirectorManageAbonementsPage } from "@/2_pages/Director/DirectorManageAbonementsPage/DirectorManageAbonementsPage";


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
            },
            {
                path: '/master-classes',
                element: <DirectorMasterClassesPage/>
            },
            {
                path: '/create-master-class',
                element: <CreateMasterClassPage/>
            },
            {
                path: '/room-tariffs',
                element: <DirectorRoomTariffsPage/>
            },
            {
                path: '/create-room-tariff',
                element: <CreateRoomTariffPage/>
            }, 
            {
                path: '/create-abonement',
                element: <CreateAbonementPage/>
            },
            {
                path: '/manage-abonements',
                element: <DirectorManageAbonementsPage/>
            }
        ]
    }
])