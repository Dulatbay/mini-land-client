import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import React, {useContext} from "react";
import {directorLinks, managerLinks} from "@/3_widgets/NavBar/links.ts";
import KeycloakContext from "@/1_app/keycloak/KeycloakContext.ts";

export const NavBar = () => {
    const [openNav, setOpenNav] = React.useState(false);
    const keycloak = useContext(KeycloakContext)

    const isDirector = keycloak.hasResourceRole("ADMIN")

    const getCurrentNav = () => isDirector ? directorLinks : managerLinks

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const logoutHandler = () => keycloak.logout()

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {
                getCurrentNav().map((i, j) =>
                    <Typography
                        as="li"
                        variant="small"
                        color="blue-gray"
                        className="p-1 text-sm font-sans"
                        key={j}
                    >
                        <a href={i[0]} className="flex items-center">
                            {i[1]}
                        </a>
                    </Typography>
                )
            }

        </ul>
    );
    return (
        <Navbar
            className="h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-slate-900 border-none"
            placeholder={""}>
            <div className="flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="/"
                    className="mr-4 cursor-pointer py-1.5 font-medium"
                >
                    MiniLand
                </Typography>
                <div className="flex items-center gap-4">
                    <div className="hidden lg:block">{navList}</div>
                    <Button
                        placeholder={"AAA"}
                        variant="gradient"
                        size="sm"
                        className="hidden lg:inline-block text-sm font-normal"
                        onClick={logoutHandler}
                    >
                        <span>Выйти</span>
                    </Button>
                    <IconButton
                        placeholder={""}
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </IconButton>
                </div>
            </div>
            <MobileNav open={openNav}>
                {navList}
                <Button fullWidth variant="text" size="sm" className="" placeholder={""}
                        onClick={logoutHandler}>
                    <span>Выйти</span>
                </Button>
            </MobileNav>
        </Navbar>
    )
}