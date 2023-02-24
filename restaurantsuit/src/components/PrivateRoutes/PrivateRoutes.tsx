import React, { useEffect } from "react";

import { Navigate, Outlet, useLocation } from "react-router-dom";
import loginService from "../../services/loginService";
import Aside from "../Sidebar/Sidebar";
import Header from "../Header/Header";

import "./PrivateRoutes.css";

export default function PrivateRoutes() {
  let auth = loginService.checkAuth();
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
