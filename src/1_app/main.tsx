import ReactDOM from 'react-dom/client'
import App from "./App.tsx";
import './main.css'
import {BrowserRouter} from "react-router-dom";
import {ReactKeycloakProvider} from "@react-keycloak/web";
import kc from "@/1_app/kc-config.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ReactKeycloakProvider authClient={kc}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </ReactKeycloakProvider>
);
