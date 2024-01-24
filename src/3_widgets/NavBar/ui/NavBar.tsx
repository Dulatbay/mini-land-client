import {useState} from "react";
import {useKeycloak} from "@react-keycloak/web";



export const NavBar = () => {

    const [isMenuOpen, setMenuOpen] = useState(false);
    const {keycloak, initialized} = useKeycloak()

    if(!initialized)
        return "keycloak is not init"

    const isDirector = keycloak.hasRealmRole("admin")
    // const isDirector = false

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`pt-5 pb-5 flex items-center justify-between`} style={{ backgroundColor: '#3d3d3d' }}>
            <div className={`pl-0 md:pl-14`}>
                <img src={'/icons/Logo.svg'} className={`w-24 h-12 object-contain`} alt={''}/>
            </div>
            <div className={`flex flex-col justify-end items-end`}>
                <button onClick={toggleMenu} className={`text-white focus:outline-none md:hidden mr-2`}>
                    {isMenuOpen ? (
                        // Иконка крестика при открытом меню
                        <svg className={`w-6 h-6`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    ) : (
                        // Иконка бургера при закрытом меню
                        <svg style={{color: "white"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    )}
                </button>
                <div className={`${isMenuOpen ? 'block' : 'hidden'} md:flex md:items-stretch md:w-auto md:flex-row md:flex-no-wrap pr-0 md:pr-10 gap-10`}>
                    {!isDirector ? (
                        <>
                            <a href="#" className={`text-white p-2 block lg:inline-block lg:mt-0`}>Управлять</a>
                            <a href="#" className={`text-white p-2 block lg:inline-block lg:mt-0`}>Username ↓</a>
                        </>
                    ) : (
                        <>
                            <a href="#" className={`text-white p-2 block lg:inline-block lg:mt-0`}>Главная</a>
                            <a href="#" className={`text-white p-2 block lg:inline-block lg:mt-0`}>Отчет</a>
                            <a href="#" className={`text-white p-2 block lg:inline-block lg:mt-0`}>Статистика</a>
                            <a href="#" className={`text-white p-2 block lg:inline-block lg:mt-0`}>Цены</a>
                            <a href="#" className={`text-white p-2 block lg:inline-block lg:mt-0`}>Акции</a>
                            <a href="#" className={`text-white p-2 block lg:inline-block lg:mt-0`}>Username ↓</a>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

