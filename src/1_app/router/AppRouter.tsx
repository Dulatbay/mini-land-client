import {useContext, useEffect} from "react";
import KeycloakContext from "@/1_app/KeycloakContext.ts";
import {directorRouter} from "@/1_app/router/directorRouter.tsx";
import {managerRouter} from "@/1_app/router/managerRouter.tsx";


export const AppRouter = () => {
    const keycloak = useContext(KeycloakContext);

    useEffect(() => {
        if (keycloak.isTokenExpired() || !keycloak.authenticated)
            localStorage.removeItem('token')
        else {
            localStorage.setItem('token', keycloak.token!)
        }
    }, [keycloak])

    const isAdmin = keycloak.hasResourceRole("ADMIN")

    if (isAdmin)
        return directorRouter
    else
        return managerRouter
}