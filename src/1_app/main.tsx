import ReactDOM from 'react-dom/client'
import App from "./App.tsx";
import './main.css'
import MainProvider from "@/1_app/MainProvider.tsx";
import kc from "@/1_app/kc-config.ts";
import KeycloakContext from "@/1_app/KeycloakContext.ts";


kc
    .init({onLoad: "check-sso", checkLoginIframe: false})
    .then(() => {
        ReactDOM.createRoot(document.getElementById('root')!).render(
            <KeycloakContext.Provider value={kc}>
                <MainProvider>
                    <App/>
                </MainProvider>
            </KeycloakContext.Provider>
        );
    });
