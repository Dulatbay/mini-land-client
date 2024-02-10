import {ReactNode} from 'react';
import {Provider as ReduxProvider} from "react-redux";
import {appStore} from "@/1_app/appStore.ts";
import {RouterProvider} from "react-router-dom";
import {AppRouter} from "@/1_app/router/AppRouter.tsx";

function MainProvider({children}: { children: ReactNode }) {
    return (
        <ReduxProvider store={appStore}>
            <RouterProvider router={AppRouter()}/>
            {children}
        </ReduxProvider>
    );
}

export default MainProvider;