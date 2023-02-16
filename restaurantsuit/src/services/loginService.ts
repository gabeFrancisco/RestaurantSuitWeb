import axios from "axios";
import { useAppDispatch } from "../store/store";

export class LoginService {
  static loginUser = (token: string, userId: string) => {
    if (token) {
      localStorage.setItem("user_token", token);
      localStorage.setItem("user_id", userId);
    }
  };

  static getUser = () => {
    if (localStorage.length > 0) {
      return true;
    }
    else{
      return false;
    }
  };

  static logoutUser = () => {
    localStorage.clear();
  };
}

