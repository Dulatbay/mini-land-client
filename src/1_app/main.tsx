import ReactDOM from 'react-dom/client'
import './main.css'
import MainProvider from "@/1_app/MainProvider.tsx";
import kc from "@/1_app/keycloak/kc-config.ts";
import KeycloakContext from "@/1_app/keycloak/KeycloakContext.ts";
import App from "@/1_app/App.tsx";
import 'react-toastify/dist/ReactToastify.css';

kc
    .init({onLoad: "login-required", checkLoginIframe: true, flow: 'standard'})
    .then(() => {
        ReactDOM.createRoot(document.getElementById('root')!).render(
            <KeycloakContext.Provider value={kc}>
                <MainProvider>
                    <App/>
                </MainProvider>
            </KeycloakContext.Provider>
        );
    });
