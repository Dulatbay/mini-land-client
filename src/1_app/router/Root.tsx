import {Outlet} from "react-router-dom";
import {PrivateRoute} from "@/1_app/router/PrivateRoute.tsx";
import {NavBar} from "@/3_widgets/NavBar/NavBar.tsx";

export const Root = () => {
    return <PrivateRoute>
        <NavBar/>
        <div className={'mb-10'}>
            <Outlet/>
        </div>
    </PrivateRoute>
}