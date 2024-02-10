import {useContext} from "react";
import KeycloakContext from "@/1_app/KeycloakContext.ts";

export const DirectorLinks = () => {
    const keycloak = useContext(KeycloakContext)
    
    return <>
        <a href="/" className={`text-white p-2 block lg:inline-block lg:mt-0`}>Главная</a>
        <a href="/report" className={`text-white p-2 block lg:inline-block lg:mt-0`}>Отчет</a>
        <a href="/statistics" className={`text-white p-2 block lg:inline-block lg:mt-0`}>Статистика</a>
        <a href="/room-tariffs" className={`text-white p-2 block lg:inline-block lg:mt-0`}>Тарифы комнат</a>
        <a href="/master-classes" className={`text-white p-2 block lg:inline-block lg:mt-0`}>Мастер классы</a>
        <a href="/prices" className={`text-white p-2 block lg:inline-block lg:mt-0`}>Цены</a>
        <a href="/sales" className={`text-white p-2 block lg:inline-block lg:mt-0`}>Акции</a>
        <a href="#" className={`text-white p-2 block lg:inline-block lg:mt-0`} onClick={() => {
            keycloak.logout()
        }}>Выйти</a>
    </>
}