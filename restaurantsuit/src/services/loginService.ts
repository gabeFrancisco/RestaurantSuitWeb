class LoginService {
  loginUser = (token: string) => {
    if (token) {
      localStorage.setItem("token", token);
    }
  };

  checkAuth = () => {
    if (localStorage.getItem("token")) {
      return true;
    } else {
      return false;
    }
  };

  getToken = () : string | null => {
    const authDate= JSON.parse(localStorage.getItem("token") || '{}')
    return authDate
  };

  logoutUser = () => {
    localStorage.clear();
  };
}

export default new LoginService();
