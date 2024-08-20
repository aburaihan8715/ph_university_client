import { ReactNode } from 'react';

export type TRoute = {
  path: string;
  element: JSX.Element;
};
export type TSidebarItem =
  | {
      key: string;
      label: ReactNode;
      children?: TSidebarItem[];
    }
  | undefined;

export type TUserPath = {
  name?: string;
  path?: string;
  element?: JSX.Element;
  children?: TUserPath[];
};
