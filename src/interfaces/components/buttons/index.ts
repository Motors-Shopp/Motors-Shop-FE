import { ReactNode } from "react";

interface IButton {
  onClick?: () => void;
  children: ReactNode;
  rest?: ReactNode;
}

export type { IButton };
