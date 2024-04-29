import { useState, useEffect, useContext, ReactNode } from 'react';
import KeycloakContext from '@/1_app/keycloak/KeycloakContext.ts';

export const PrivateRoute = ({ children }: { children: ReactNode }) => {
    const keycloak = useContext(KeycloakContext);
    const [isReady, setIsReady] = useState(false);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        if (!keycloak.authenticated) {
            keycloak
                .init({ onLoad: 'check-sso' })
                .then((authenticated) => {
                    setIsReady(true);
                    if (!authenticated) {
                        keycloak.login();
                    }
                })
                .catch(() => {
                    setHasError(true);
                    setIsReady(true);
                });
        } else {
            setIsReady(true);
        }
    }, [keycloak]);

    const Login = () => (
        <button
            type="button"
            onClick={() => {
                keycloak.logout();
            }}
        >
            LOGIN
        </button>
    );

    if (!isReady) {
        return <div>Loading...</div>;
    }

    if (hasError) {
        return <div>Error: Unable to authenticate</div>;
    }

    return keycloak.authenticated ? children : <Login />;
};
