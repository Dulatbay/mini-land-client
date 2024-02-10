import {NavBar} from "@/3_widgets/NavBar";
import {Outlet} from "react-router-dom";
import {PrivateRoute} from "@/1_app/PrivateRoute.tsx";

export const Root = () => {
    return <PrivateRoute>
        <NavBar/>
        <Outlet/>
    </PrivateRoute>
}