export interface IUserResponse {
  email: string;
  surname: string;
  name: string;
  password: string;
  workspaceName: string;
}

export interface LoginParams
  extends Pick<IUserResponse, "email" | "password"> {}

export interface RegisterParams
  extends Pick<IUserResponse, "email" | "workspaceName"> {}

export interface RegisterCompleteParams
  extends Pick<IUserResponse, "name" | "password" | "surname"> {
  repeatPassword: string;
}

export interface ResetParams {
  newPassword: string;
  confirmPassword: string;
}
