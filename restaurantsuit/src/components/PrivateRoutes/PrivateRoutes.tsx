import React from "react";

import { Navigate, Outlet } from "react-router-dom";
import LoginService from "../../services/loginService";
import Aside from "../Aside/Aside";
import Header from "../Header/Header";

import "./PrivateRoutes.css";

export default function PrivateRoutes() {
  let auth = LoginService.checkAuth();
  return auth ? (
    <>
      <Header />
      <div className="App-Area">
        <Aside />
        <div className="Pages-Area">
          <Outlet />
        </div>
      </div>
    </>
  ) : (
    <Navigate to="/login" />
  );
}
