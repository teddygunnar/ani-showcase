import { ComponentType } from "react";

export interface AlertProps {
  isOpenAlert: boolean;
  setIsOpenAlert: (v: boolean) => void;
}

export interface Props {
  [key: string]: unknown;
}

export type ComponentArrType = {
  Title: string;
  Components: ComponentType<AlertProps | object>;
  props?: Props;
};

export type RoutePathType = {
  title: string;
  path: string;
};
