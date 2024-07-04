import { ReactNode } from "react";

interface IModalContext {
  open: (children?: ReactNode) => void;
  close: () => void;
}

interface IKeys {
  [key: string]: string;
}
export type { IKeys, IModalContext };
