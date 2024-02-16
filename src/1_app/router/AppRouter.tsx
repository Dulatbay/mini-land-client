import {useContext} from "react";
import KeycloakContext from "@/1_app/keycloak/KeycloakContext.ts";
import {directorRouter} from "@/1_app/router/directorRouter.tsx";
import {managerRouter} from "@/1_app/router/managerRouter.tsx";


export const AppRouter = () => {
    const keycloak = useContext(KeycloakContext);
    const isAdmin = keycloak.hasResourceRole("ADMIN")

    if (isAdmin)
        return directorRouter
    else
        return managerRouter
}