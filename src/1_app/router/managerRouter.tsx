import {createBrowserRouter} from "react-router-dom";
import {Root} from "@/1_app/router/Root.tsx";
import {ErrorPage} from "@/2_pages/ErrorPage/ErrorPage.tsx";
import {ManagerMainPage} from "@/2_pages/Manager/ManagerMainPage/ManagerMainPage.tsx";
import DetailCardPage from "@/2_pages/Manager/DetailCardPage/DetailCardPage.tsx";
import {CreateOrderPage} from "@/2_pages/Manager/CreateOrderPage/CreateOrderPage.tsx";
import {ManagerRoomTariffsPage} from "@/2_pages/Manager/ManagerRoomTariffsPage/ManagerRoomTariffsPage.tsx";
import {RoomTariffBookingPage} from "@/2_pages/Manager/RoomTariffBookingPage/RoomTariffBookingPage.tsx";
import {RoomOrdersPage} from "@/2_pages/Manager/RoomOrdersPage/RoomOrdersPage.tsx";
import {SelectMasterClassPage} from "@/2_pages/Manager/SelectMasterClassPage/SelectMasterClassPage.tsx";
import {
    ViewMasterClassesByOrderPage
} from "@/2_pages/Manager/ViewMasterClassesByOrderPage/ViewMasterClassesByOrderPage.tsx";


export const managerRouter = createBrowserRouter([
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
            {
                path: '/room-tariffs',
                element: <ManagerRoomTariffsPage/>
            },
            {
                path: '/room-tariffs-booking/:id',
                element: <RoomTariffBookingPage/>
            },
            {
                path: '/room-orders',
                element: <RoomOrdersPage/>
            },
            {
                path: `/master-classes/:orderId`,
                element: <SelectMasterClassPage/>
            },
            {
                path: `/orders/:orderId/master-classes`,
                element: <ViewMasterClassesByOrderPage/>
            },
        ]
    }
])
