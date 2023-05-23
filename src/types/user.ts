export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface IUserCreateRequest {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface IUserLoginRequest {
  email: string;
  password: string;
}

export interface IUserRecoverRequest {
  email: string;
  newPassword: string;
  confirmNewPassword?: string;
}
