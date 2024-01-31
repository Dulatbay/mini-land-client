import {useContext, useState} from "react";
import KeycloakContext from "@/1_app/KeycloakContext.ts";
import {useNavigate} from "react-router-dom";


export const NavBar = () => {
    const navigate = useNavigate()
    const [isMenuOpen, setMenuOpen] = useState(false);
    const keycloak = useContext(KeycloakContext)

    const isDirector = keycloak.hasResourceRole("admin")

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`pt-5 pb-5 flex items-center justify-between bg-gray-800`}>
            <div className={`pl-0 md:pl-14 cursor-pointer`} onClick={() => {
                navigate('/')
            }}>
                <img src={'/icons/Logo.svg'} className={`w-24 h-12 object-contain`} alt={''}/>
            </div>
            <div className={`flex flex-col justify-end items-end`}>
                <button onClick={toggleMenu} className={`text-white focus:outline-none md:hidden mr-2`}>
                    {isMenuOpen ? (
                        <svg className={`w-6 h-6`} fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    ) : (
                        <svg style={{color: "white"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                        </svg>
                    )}
                </button>
                <div
                    className={`${isMenuOpen ? 'block' : 'hidden'} md:flex md:items-stretch md:w-auto md:flex-row md:flex-no-wrap pr-0 md:pr-10 gap-10`}>
                    {!isDirector ? (
                        <>
                            <a href="/" className={`text-white p-2 block lg:inline-block lg:mt-0`}>Управление</a>
                            <a href="#" className={`text-white p-2 block lg:inline-block lg:mt-0`} onClick={() => {
                                keycloak.logout()
                            }}>Выйти</a>
                        </>
                    ) : (
                        <>
                            <a href="/" className={`text-white p-2 block lg:inline-block lg:mt-0`}>Главная</a>
                            <a href="/report" className={`text-white p-2 block lg:inline-block lg:mt-0`}>Отчет</a>
                            <a href="/statistics" className={`text-white p-2 block lg:inline-block lg:mt-0`}>Статистика</a>
                            <a href="/prices" className={`text-white p-2 block lg:inline-block lg:mt-0`}>Цены</a>
                            <a href="/sales" className={`text-white p-2 block lg:inline-block lg:mt-0`}>Акции</a>
                            <a href="#" className={`text-white p-2 block lg:inline-block lg:mt-0`} onClick={() => {
                                keycloak.logout()
                            }}>Выйти</a>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

