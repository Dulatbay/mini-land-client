import {Route, Routes} from "react-router-dom";
import {CreateOrderPage} from "@/2_pages/CreateOrderPage/CreateOrderPage.tsx";
import {ManagerMainPage} from "@/2_pages/ManagerMainPage/ManagerMainPage.tsx";
import {DirectorMainPage} from "@/2_pages/DirectorMainPage/DirectorMainPage.tsx";
import {DirectorReportPage} from "@/2_pages/DirectorReportPage/DirectorReportPage.tsx";
import {ReactNode, useContext, useEffect} from "react";
import DetailCardPage from "@/2_pages/DetailCardPage/DetailCardPage.tsx";
import KeycloakContext from "@/1_app/KeycloakContext.ts";

const PrivateRoute = ({children}: { children: ReactNode }) => {
    const keycloak = useContext(KeycloakContext);

    const Login = () => {
        return <button type="button" onClick={() => {
            localStorage.removeItem("token")
            keycloak.login();
        }}>LOGIN</button>
    };

    return keycloak.authenticated ? children : <Login/>;
};
const token = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ6RC04VXlERDdkVHZXZ09tSzBGWE5PaGpXT05IU2gwVmM1dlAzYzBJMVFnIn0.eyJleHAiOjE3MDYxMDU3MTAsImlhdCI6MTcwNjA4NzcxMCwianRpIjoiZWM5ZGQwNGQtOWU2Yy00NzZlLWJhMzktZDU1YmM3ZTI1MmE5IiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4NDg0L2F1dGgvcmVhbG1zL21pbmlsYW5kIiwiYXVkIjpbInJlYWxtLW1hbmFnZW1lbnQiLCJhY2NvdW50Il0sInN1YiI6ImEwZjU1YWMwLWJjMjgtNGIyNi05MWMyLTkwNWU5NjBlMTIyNiIsInR5cCI6IkJlYXJlciIsImF6cCI6Im1pbmlsYW5kIiwic2Vzc2lvbl9zdGF0ZSI6IjhjOTlhNzA2LWI0YjMtNDY5Yy1iNGM0LWQ2ZjYwZDNlN2Q5MCIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiKiJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJhZG1pbiIsInVtYV9hdXRob3JpemF0aW9uIiwiZGVmYXVsdC1yb2xlcy1taW5pbGFuZCJdfSwicmVzb3VyY2VfYWNjZXNzIjp7InJlYWxtLW1hbmFnZW1lbnQiOnsicm9sZXMiOlsidmlldy1pZGVudGl0eS1wcm92aWRlcnMiLCJ2aWV3LXJlYWxtIiwibWFuYWdlLWlkZW50aXR5LXByb3ZpZGVycyIsImltcGVyc29uYXRpb24iLCJyZWFsbS1hZG1pbiIsImNyZWF0ZS1jbGllbnQiLCJtYW5hZ2UtdXNlcnMiLCJxdWVyeS1yZWFsbXMiLCJ2aWV3LWF1dGhvcml6YXRpb24iLCJxdWVyeS1jbGllbnRzIiwicXVlcnktdXNlcnMiLCJtYW5hZ2UtZXZlbnRzIiwibWFuYWdlLXJlYWxtIiwidmlldy1ldmVudHMiLCJ2aWV3LXVzZXJzIiwidmlldy1jbGllbnRzIiwibWFuYWdlLWF1dGhvcml6YXRpb24iLCJtYW5hZ2UtY2xpZW50cyIsInF1ZXJ5LWdyb3VwcyJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwic2lkIjoiOGM5OWE3MDYtYjRiMy00NjljLWI0YzQtZDZmNjBkM2U3ZDkwIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInByZWZlcnJlZF91c2VybmFtZSI6ImFkbWluIn0.KWPDaTGjxfSTW_AzzguaOim53JmIN8P__3rYvyHr8bn2Olc-eV8vNUYMHVtD0pSAqv2CSC1FMzgE1BctqVDp5n6_X5O1hZyezswiKy8kKAirNeQ5VzfzLwe9XR89t_jds4l3bLKCtTGQiPtSdbATEYV2q34gSR2O9MGGDoDT2OnOjJIzZVes4r9p5jb8c7ul4q77Zeo_oBR9YT7JMdHUWpoxjVNf9wfnQjbv0RmoTC5SvUJiZsOKghI9wjQeouQE2Z-YYObYKnKTZxE84HBn1wlJrxQUFR2r57cjqQr-9EaIPpE7he5vax9WHj7Ix6s-7dWn4jOA6GgTcB4l8GKXYA"

function App() {
    const keycloak = useContext(KeycloakContext);

    useEffect(() => {
        if (keycloak.isTokenExpired() || !keycloak.authenticated)
            localStorage.removeItem('token')
        else {
            localStorage.setItem('token', keycloak.token!)
            console.log(localStorage.getItem('token')!.length, keycloak.token?.length, token.length, keycloak.idToken?.length)
        }
    }, [])

    const isAdmin = keycloak.hasRealmRole("admin")

    return (
        isAdmin ? <Routes>
                <Route path={"/"} element={"Salam adminu"}/>
            </Routes>
            :
            <Routes>
                <Route path={'/'} element={
                    <PrivateRoute>
                        <ManagerMainPage/>
                    </PrivateRoute>
                }/>
                <Route path={'/orders/:id'}
                       element={
                           <PrivateRoute>
                               <DetailCardPage/>
                           </PrivateRoute>
                       }
                />

                <Route path={'/create-order'} element={
                    <PrivateRoute>
                        <CreateOrderPage/>
                    </PrivateRoute>
                }/>
                <Route path={'/director-main'} element={
                    <PrivateRoute>
                        <DirectorMainPage/>
                    </PrivateRoute>
                }/>
                <Route path={'/director-report'} element={
                    <PrivateRoute>
                        <DirectorReportPage/>
                    </PrivateRoute>
                }/>
                {/*<Route path={'/login'} element={<LoginPage/>}/>*/}
            </Routes>
    )
}

export default App;