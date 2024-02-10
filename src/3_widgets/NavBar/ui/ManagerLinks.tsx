import {useContext} from "react";
import KeycloakContext from "@/1_app/keycloak/KeycloakContext.ts";

export const ManagerLinks = () => {
    const keycloak = useContext(KeycloakContext)

    return <>
        <a href="/" className={`text-white p-2 block lg:inline-block lg:mt-0`}>Управление</a>
        <a href="#" className={`text-white p-2 block lg:inline-block lg:mt-0`} onClick={() => {
            keycloak.logout()
        }}>Выйти</a>
    </>
}