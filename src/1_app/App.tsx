import {Bounce, ToastContainer} from "react-toastify";
import {useContext, useEffect} from "react";
import KeycloakContext from "@/1_app/keycloak/KeycloakContext.ts";


function App() {
    const keycloak = useContext(KeycloakContext);

    useEffect(() => {
        if (keycloak.isTokenExpired() || !keycloak.authenticated)
            localStorage.removeItem('token')
        else {
            localStorage.setItem('token', keycloak.token!)
        }
    }, [keycloak])

    return (
        <>
            <ToastContainer position="bottom-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss={false}
                            draggable
                            pauseOnHover={false}
                            theme="dark"
                            transition={Bounce}
            />
        </>
    )
}

export default App;