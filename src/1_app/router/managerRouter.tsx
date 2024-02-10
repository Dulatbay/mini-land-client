import {createBrowserRouter} from "react-router-dom";
import {Root} from "@/1_app/router/Root.tsx";
import {ErrorPage} from "@/2_pages/ErrorPage/ErrorPage.tsx";
import {ManagerMainPage} from "@/2_pages/Manager/ManagerMainPage/ManagerMainPage.tsx";
import DetailCardPage from "@/2_pages/Manager/DetailCardPage/DetailCardPage.tsx";
import {CreateOrderPage} from "@/2_pages/Manager/CreateOrderPage/CreateOrderPage.tsx";


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
        ]
    }
])
