import Keycloak from 'keycloak-js';

const initOptions = {
    url: `${import.meta.env.VITE_KEYCLOAK_URL}/auth`,
    realm: 'miniland',
    clientId: 'miniland',
}

const kc = Keycloak(initOptions);


export default kc