export interface IUserResponse {
  email: string;
  surname: string;
  name: string;
  password: string;
  workspaceName: string;
}

export interface LoginParams {
  email: string;
  password: string;
}

export interface RegisterParams {
  workspaceName: string;
  email: string;
}

export interface RegisterCompleteParams {
  name: string;
  surname: string;
  password: string;
  repeatPassword: string;
}

export interface ResetParams {
  newPassword: string;
  confirmPassword: string;
}
