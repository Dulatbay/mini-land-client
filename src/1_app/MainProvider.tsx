import {ReactNode} from 'react';
import {Provider as ReduxProvider} from "react-redux";
import {appStore} from "@/1_app/appStore.ts";
import {RouterProvider} from "react-router-dom";
import {appRouter} from "@/1_app/AppRouter.tsx";

function MainProvider({children}: { children: ReactNode }) {
    return (
        <ReduxProvider store={appStore}>
            <RouterProvider router={appRouter()}/>
            {children}
        </ReduxProvider>
    );
}

export default MainProvider;