import React from "react";
import { IKeys } from "../../interfaces";
import { en } from "../../../i18n";

const LangContext = React.createContext<IKeys>(en);
export default LangContext;
