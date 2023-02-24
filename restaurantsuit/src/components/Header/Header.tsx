import React from "react";
import { useNavigate } from "react-router-dom";
import loginService from "../../services/loginService";
import { useAppSelector } from "../../store/store";

import "./Header.css";

import logo from "../../assets/logo.png";

export default function Header() {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.auth.user);
  return (
    <header className="Header">
      <div className="Title">
        <img src={logo} alt="LandUp logo" />
        <h2>LandUp</h2>
      </div>
      <div className="User-Actions">
        <p>
          Seja bem-vindo <b>{user.username}</b>!
        </p>
        <a
          href=""
          onClick={() => {
            loginService.logoutUser();
            navigate("/login");
          }}
        >
          Sair
        </a>
      </div>
    </header>
  );
}
