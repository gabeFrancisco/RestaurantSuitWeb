import { User } from "./User";

export interface AuthState {
  user: User,
  isLogged: boolean;
  message: string;
  token: string;
}
