import {
  IUser,
  IUserCreateRequest,
  IUserLoginRequest,
  IUserRecoverRequest,
} from "@/types/user";
import { ReactNode } from "react";

export interface IUserContext {
  login: (data: IUserLoginRequest) => void;
  register: (data: IUserCreateRequest) => void;
  recover: (data: IUserRecoverRequest) => void;
}

export interface IUserProvider {
  children: ReactNode;
}
