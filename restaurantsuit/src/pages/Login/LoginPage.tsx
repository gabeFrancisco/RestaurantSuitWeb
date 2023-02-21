import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginService from "../../services/loginService";
import { fetchLogin } from "../../store/features/authSlice";
import { useAppDispatch } from "../../store/store";

import "./LoginPage.css";

export default function LoginPage() {
  const navigate = useNavigate();
  useEffect(() => {
    if (LoginService.checkAuth()) {
      navigate("/home");
    }
  }, []);
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      dispatch(fetchLogin(values)).then(() => {
        navigate("/home");
      });
    },
  });

  return (
    <div className="LoginPage">
      <div className="FormArea">
        <h1>Seja bem-vindo!</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="Form">
            <label htmlFor="username">Usuário</label>
            <input
              id="username"
              type="text"
              name="username"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
          </div>
          <div className="Form">
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>
          <div className="Form">
            <button type="submit" className="btn-secondary">Entrar!</button>
          </div>
        </form>
      </div>
    </div>
  );
}
