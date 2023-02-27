class LoginService {
  loginUser = (token: string) => {
    if (token) {
      localStorage.setItem("token", token);
    }
  };

  checkAuth = () => (localStorage.getItem("token") !== null ? true : false);

  getToken = (): string | null => {
    const authDate = JSON.parse(localStorage.getItem("token") || "{}");
    return authDate;
  };

  logoutUser = () => {
    localStorage.clear();
  };
}

export default new LoginService();
