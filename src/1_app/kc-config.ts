import Keycloak from 'keycloak-js';

const initOptions = {
    url: 'http://localhost:8484/auth',
    realm: 'miniland',
    clientId: 'miniland',
}

const kc = new Keycloak(initOptions);

export default kc