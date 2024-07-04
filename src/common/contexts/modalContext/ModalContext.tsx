import React from "react";
import { IModalContext } from "../../interfaces";

const ModalContext = React.createContext<IModalContext>({
  open: () => {},
  close: () => {},
});
export default ModalContext;
