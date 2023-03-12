import React, { useEffect } from "react";

import { Navigate, Outlet } from "react-router-dom";
import loginService from "../../services/loginService";
import Aside from "../Sidebar/Sidebar";
import Header from "../Header/Header";

import "./PrivateRoutes.css";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { fetchUser } from "../../store/features/authSlice";

export default function PrivateRoutes() {
  const auth = loginService.checkAuth();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if(auth){
      dispatch(fetchUser())
    }
  },[])
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
