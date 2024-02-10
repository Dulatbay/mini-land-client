import {ReactNode, useContext} from "react";
import KeycloakContext from "@/1_app/KeycloakContext.ts";

export const PrivateRoute = ({children}: { children: ReactNode }) => {
    const keycloak = useContext(KeycloakContext);

    const Login = () => {
        return <button type="button" onClick={() => {
            localStorage.removeItem("token")
            keycloak.login();
        }}>LOGIN</button>
    };

    return keycloak.authenticated ?
        children
        : <Login/>;
};