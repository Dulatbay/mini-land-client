import {ReactNode} from 'react';
import {Provider as ReduxProvider} from "react-redux";
import {appStore} from "@/1_app/appStore.ts";
import {BrowserRouter} from "react-router-dom";

function MainProvider({children}: { children: ReactNode }) {
    return (
        <ReduxProvider store={appStore}>
            <BrowserRouter>
                {children}
            </BrowserRouter>
        </ReduxProvider>
    );
}

export default MainProvider;