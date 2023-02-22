import { BaseEntity } from "./BaseEntity";

export interface User extends BaseEntity{
  username: string;
  token: string;
  name: string;
  email: string;
  role: number;
  lastUserWorkGroup: number;
}
