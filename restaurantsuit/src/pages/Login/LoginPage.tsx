import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginService from "../../services/loginService";
import { fetchLogin } from "../../store/features/authSlice";
import { useAppDispatch } from "../../store/store";

import "./LoginPage.css";
import LoadingScreen from "../../widgets/Loading/LoadingScreen";

export default function LoginPage() {
  const navigate = useNavigate();
  useEffect(() => {
    if (LoginService.checkAuth()) {
      navigate("/dashboard");
    }
  }, []);
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      setLoading(true);
      dispatch(fetchLogin(values)).then(() => {
        navigate("/dashboard");
      });
    },
  });

  const [loading, setLoading] = useState(false);
  return (
    <div className="LoginPage">
      {loading ? <LoadingScreen /> : null}
      <div className="FormArea">
        <h1>Seja bem-vindo!</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="Form">
            {/* <label htmlFor="username">Usuário</label> */}
            <input
              placeholder="Usuário"
              id="username"
              type="text"
              name="username"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
          </div>
          <div className="Form">
            {/* <label htmlFor="password">Senha</label> */}
            <input
              placeholder="Senha"
              id="password"
              type="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>
          <div className="Form">
            <button type="submit" className="btn-secondary">
              Entrar!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
