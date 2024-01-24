import { createContext } from "react";
import kc from "@/1_app/kc-config.ts";

// @ts-ignore
const KeycloakContext = createContext<typeof kc>();

export default KeycloakContext;