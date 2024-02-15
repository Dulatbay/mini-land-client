import {createContext} from "react";
import kc from "@/1_app/keycloak/kc-config.ts";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const KeycloakContext = createContext<typeof kc>();

export default KeycloakContext;